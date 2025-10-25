import re

# Base 2: 0-1
# Base 8: 0-7
# Base 10: 0-9
# Base 16: 0-9 and A-F
# Base 36: 0-9 and A-Z
# En base a la base tenemos unos caracteres y nuneros a poder usar.
# Tenemos que segun la base ir sumando condicionales
# Podriamos hacer como un array con posibles filtros y segun la base asignamos los filtros
# Luego podriamos iterar sobre el string y ver que en cada caracter se cumplan todas las reglas
# Aplicar un .toLowerCase

# Quizas se podria hacer direfto con regex y seria mas facil? **SI** vamos a hacer un regex por cada bade hacemos un if else y chau return .test


def is_valid_number(n, base):
    patterns = {
        2: r"^[01]+$",
        8: r"^[0-7]+$",
        10: r"^[0-9]+$",
        16: r"^[0-9A-Fa-f]+$",
        36: r"^[0-9A-Za-z]+$",
    }

    keys = sorted(patterns.keys())
    for k in keys:
        if base <= k:
            print(
                f"Is valid number n {n} base {k} result {bool(re.fullmatch(patterns[k], n))}"
            )
            return bool(re.fullmatch(patterns[k], n))
    return bool(re.fullmatch(patterns[keys[-1]], n))


is_valid_number("10101", 2)
is_valid_number("10201", 2)
is_valid_number("76543210", 8)
is_valid_number("9876543210", 8)
is_valid_number("9876543210", 10)
is_valid_number("ABC", 10)
is_valid_number("ABC", 16)
is_valid_number("Z", 36)
is_valid_number("ABC", 20)
is_valid_number("4B4BA9", 16)
is_valid_number("5G3F8F", 16)
is_valid_number("5G3F8F", 17)
is_valid_number("abc", 10)
is_valid_number("abc", 16)
is_valid_number("AbC", 16)
is_valid_number("z", 36)
