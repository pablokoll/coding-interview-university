-- Tabla de tarjetas
CREATE TABLE cards (
  id SERIAL PRIMARY KEY,                -- Usa SERIAL para auto-incremento
  type SMALLINT NOT NULL,               -- SMALLINT en lugar de tinyint
  front TEXT NOT NULL,                  -- Sin cambios
  back TEXT NOT NULL,                   -- Sin cambios
  known BOOLEAN DEFAULT FALSE           -- BOOLEAN con valores TRUE/FALSE
);

-- Tabla de etiquetas
CREATE TABLE tags (
  id SERIAL PRIMARY KEY,                -- Usa SERIAL para auto-incremento
  tag_name TEXT NOT NULL                -- Ajuste de naming: snake_case para convenciones PostgreSQL
);
