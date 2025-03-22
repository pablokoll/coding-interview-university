import os
import psycopg2
from flask import (
    Flask,
    request,
    session,
    g,
    redirect,
    url_for,
    render_template,
    flash,
    abort,
)
from functools import wraps

app = Flask(__name__)
app.config.from_object(__name__)

# Credenciales para la base de datos PostgreSQL
PGHOST = "ep-nameless-heart-a25cjzh6-pooler.eu-central-1.aws.neon.tech"
PGUSER = "neondb_owner"
PGDATABASE = "neondb"
PGPASSWORD = "X5abwrpjALu2"


def load_config():
    app.config.update(
        dict(
            DATABASE={
                "host": PGHOST,
                "user": PGUSER,
                "dbname": PGDATABASE,
                "password": PGPASSWORD,
            },
            SECRET_KEY=os.urandom(24),
            USERNAME="admin",
            PASSWORD="default",
        )
    )
    app.config.from_envvar("CARDS_SETTINGS", silent=True)


if __name__ == "__main__" or __name__ == "flash_cards":
    load_config()


def connect_db():
    """Establece una conexión a la base de datos PostgreSQL."""
    db_config = app.config["DATABASE"]
    return psycopg2.connect(
        host=db_config["host"],
        user=db_config["user"],
        dbname=db_config["dbname"],
        password=db_config["password"],
    )


def get_db():
    """Abre una nueva conexión a la base de datos si no existe en el contexto actual."""
    if not hasattr(g, "postgres_db"):
        try:
            g.postgres_db = connect_db()
        except psycopg2.Error as e:
            app.logger.error(f"Database connection error: {e}")
            abort(500)
    return g.postgres_db


@app.teardown_appcontext
def close_db(error):
    """Cierra la conexión a la base de datos al finalizar el contexto."""
    if hasattr(g, "postgres_db"):
        g.postgres_db.close()


def login_required(f):
    """Decorador para verificar el inicio de sesión."""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get("logged_in"):
            return redirect(url_for("login"))
        return f(*args, **kwargs)

    return decorated_function


@app.route("/")
def index():
    if session.get("logged_in"):
        return redirect(url_for("cards"))
    return redirect(url_for("login"))


@app.route("/cards")
@login_required
def cards():
    db = get_db()
    query = """
        SELECT id, type, front, back, known
        FROM cards
        ORDER BY id DESC
    """
    cur = db.cursor()
    cur.execute(query)
    cards = cur.fetchall()
    tags = get_all_tags()
    return render_template("cards.html", cards=cards, tags=tags, filter_name="all")


@app.route("/add", methods=["POST"])
@login_required
def add_card():
    db = get_db()
    query = "INSERT INTO cards (type, front, back) VALUES (%s, %s, %s)"
    cur = db.cursor()
    cur.execute(query, (request.form["type"], request.form["front"], request.form["back"]))
    db.commit()
    flash("New card was successfully added.")
    return redirect(url_for("cards"))


@app.route("/edit/<int:card_id>")
@login_required
def edit(card_id):
    db = get_db()
    query = """
        SELECT id, type, front, back, known
        FROM cards
        WHERE id = %s
    """
    cur = db.cursor()
    cur.execute(query, (card_id,))
    card = cur.fetchone()
    tags = get_all_tags()
    return render_template("edit.html", card=card, tags=tags)


@app.route("/edit_card", methods=["POST"])
@login_required
def edit_card():
    db = get_db()
    query = """
        UPDATE cards
        SET type = %s, front = %s, back = %s, known = %s
        WHERE id = %s
    """
    known = bool(request.form.getlist("known"))
    cur = db.cursor()
    cur.execute(
        query,
        (
            request.form["type"],
            request.form["front"],
            request.form["back"],
            known,
            request.form["card_id"],
        ),
    )
    db.commit()
    flash("Card saved.")
    return redirect(url_for("cards"))


@app.route("/delete/<int:card_id>")
@login_required
def delete(card_id):
    db = get_db()
    query = "DELETE FROM cards WHERE id = %s"
    cur = db.cursor()
    cur.execute(query, (card_id,))
    db.commit()
    flash("Card deleted.")
    return redirect(url_for("cards"))


@app.route("/tags")
@login_required
def tags():
    tags = get_all_tags()
    return render_template("tags.html", tags=tags)


@app.route("/add_tag", methods=["POST"])
@login_required
def add_tag():
    db = get_db()
    query = "INSERT INTO tags (tagName) VALUES (%s)"
    cur = db.cursor()
    cur.execute(query, (request.form["tagName"],))
    db.commit()
    flash("New tag was successfully added.")
    return redirect(url_for("tags"))


@app.route("/edit_tag/<int:tag_id>")
@login_required
def edit_tag(tag_id):
    tag = get_tag(tag_id)
    return render_template("editTag.html", tag=tag)


@app.route("/update_tag", methods=["POST"])
@login_required
def update_tag():
    db = get_db()
    query = "UPDATE tags SET tagName = %s WHERE id = %s"
    cur = db.cursor()
    cur.execute(query, (request.form["tagName"], request.form["tag_id"]))
    db.commit()
    flash("Tag saved.")
    return redirect(url_for("tags"))


def get_all_tags():
    """Obtiene todos los tags."""
    db = get_db()
    query = "SELECT id, tagName FROM tags ORDER BY id ASC"
    cur = db.cursor()
    cur.execute(query)
    return cur.fetchall()


def get_tag(tag_id):
    """Obtiene un tag por su ID."""
    db = get_db()
    query = "SELECT id, tagName FROM tags WHERE id = %s"
    cur = db.cursor()
    cur.execute(query, (tag_id,))
    return cur.fetchone()


@app.route("/login", methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        if request.form["username"] != app.config["USERNAME"]:
            error = "Invalid username or password!"
        elif request.form["password"] != app.config["PASSWORD"]:
            error = "Invalid username or password!"
        else:
            session["logged_in"] = True
            session.permanent = True  # Stay logged in
            return redirect(url_for("index"))
    return render_template("login.html", error=error)


@app.route("/logout")
def logout():
    session.pop("logged_in", None)
    flash("You've logged out")
    return redirect(url_for("index"))


if __name__ == "__main__":
    app.run(host="0.0.0.0")
