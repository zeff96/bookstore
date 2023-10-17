import apiSlice from './apiSlice/apiSlice';

const bookSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => '/books',
      providesTags: (result) => (result
        ? [
          ...result.map(({ id }) => ({ type: 'Books', id })),
          { type: 'Books', id: 'LIST' },
        ]
        : [{ type: 'Books', id: 'LIST' }]),
      transformResponse: (data) => {
        const books = Object.keys(data).map((key) => ({
          ...data[key][0],
          item_id: key,
        }));
        return books;
      },
    }),
    addBook: build.mutation({
      query: (body) => ({
        url: '/books',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Books', id: 'LIST' }],
    }),
    deleteBook: build.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (id) => [{ type: 'Books', id }],
    }),
  }),
});

export const { useGetBooksQuery, useAddBookMutation, useDeleteBookMutation } = bookSlice;
