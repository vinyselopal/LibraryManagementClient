const BASE_URL = "http://localhost:8000/librarymanagement";

export const getBooks = async (fields) => {
  const response = await fetch(
    BASE_URL + `/books?author=${fields.author}&title=${fields.title}`
  );
  const parsedResponse = await response.json();
  const books = parsedResponse.message;
  return books;
};

export const importBooks = async (fields) => {
  const response = await fetch(
    BASE_URL +
      `/books/import_books?author=${fields.author}&title=${fields.title}&quantity=${fields.quantity}`
  );
  const parsedResponse = await response.json();
  const books = parsedResponse.message;
  return books;
};

export const addBooks = async (books) => {
  const response = await fetch(BASE_URL + "/books", {
    body: JSON.stringify({ books }),
    method: "POST",
    "Content-Type": "application/json",
  });
  const parsedResponse = await response.json();
  const confirmation = parsedResponse.message;
  return confirmation;
};

export const issueBook = async (fields) => {
  console.log(fields);
  const response = await fetch(BASE_URL + "/members/issue_book", {
    body: JSON.stringify(fields),
    method: "POST",
    "Content-Type": "application/json",
  });
  const parsedResponse = await response.json();
  const confirmation = parsedResponse.message;
  return confirmation;
};

export const getMembers = async (fields) => {
  const response = await fetch(
    BASE_URL +
      `/members?${fields ? `outstanding_debt=${fields.outstanding_debt}` : ""}`
  );
  const parsedResponse = await response.json();
  const members = parsedResponse.message;
  return members;
};

export const getTransactions = async (fields) => {
  const response = await fetch(
    BASE_URL +
      `/transactions?book_author=${fields.book_author}&book_title=${fields.book_title}&issue_date=${fields.issue_date}&return_date=${fields.return_date}&payment_done=${fields.payment_done}&member_email=${fields.member_email}`
  );
  const parsedResponse = await response.json();
  const transactions = parsedResponse.message;
  return transactions;
};

export const returnBook = async (record_id) => {
  const response = await fetch(
    BASE_URL + `/transactions/${record_id}/return_book`,
    {
      method: "PUT",
    }
  );
  const parsedResponse = await response.json();
  const confirmation = parsedResponse.message;
  return confirmation;
};

export const chargeBookFee = async (record_id) => {
  const response = await fetch(
    BASE_URL + `/transactions/${record_id}/charge_fee`,
    {
      method: "PUT",
    }
  );
  const parsedResponse = await response.json();
  const confirmation = parsedResponse.message;
  return confirmation;
};
