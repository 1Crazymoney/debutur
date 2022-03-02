-- REFERENCE SCHEMA TO GENERATE TABLES FOR THIS PROJECT IN COCKROACHDB

CREATE TABLE profile (
  id UUID PRIMARY KEY,
  login VARCHAR(255) UNIQUE NOT NULL,
  avatar_url VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL DEFAULT 'Debutur User',
  email VARCHAR(255) UNIQUE NOT NULL,
  bio TEXT NOT NULL DEFAULT 'Welcome to Debutur. Edit your profile to get started',
  theme VARCHAR(255) NOT NULL DEFAULT 'light',
  button_links TEXT[],
  button_titles TEXT[]
);

-- cockroach sql --url ""
