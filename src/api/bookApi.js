import axios from 'axios';

const appId = 'ao29KDXb9yD3X6fN3lgO';

const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}`;

export const setBooks = async (book) => {
  await axios.post(`${url}/books`, book);
  return book;
};

export const getBooks = async () => {
  const res = await axios.get(`${url}/books`);
  return res.data;
};

export const deleteBooks = async (id) => {
  await axios.delete(`${url}/books/${id}`, id);
  return id;
};
