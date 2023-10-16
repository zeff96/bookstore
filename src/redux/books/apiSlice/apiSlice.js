import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const appId = 'ao29KDXb9yD3X6fN3lgO';

const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}`;

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: () => ({}),
});

export default apiSlice;
