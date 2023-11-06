const BASE_URL = "http://localhost:8000/librarymanagement";

export const getBooks = async (fields) => {
  const response = await fetch(
    BASE_URL + `/books?author=${fields.author}&title=${fields.title}`
  );
  const books = await response.json();
  return books;
};
