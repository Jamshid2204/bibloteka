CREATE TABLE books(
  id SERIAL PRIMARY KEY,
  name VARCHAR(25),
  author VARCHAR(25),
  genre VARCHAR(25),
  since INT
);


INSERT INTO books(name, author, genre, since) VALUES('Urush va tinchlik', 'Lev Tolstoy', 'roman', 1965);
INSERT INTO books(name, author, genre, since) VALUES('Otgan kunlar', 'Abdulla Qodiriy', 'roman', 1925);
