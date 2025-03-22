CREATE TABLE IF NOT EXISTS tags (
  id SERIAL PRIMARY KEY,         -- SERIAL para auto-incremento
  tag_name TEXT NOT NULL         -- snake_case para la convención PostgreSQL
);
