const booksReducer = (books, action) => {
  switch (action.type) {
    case 'book_added': {
      return [
        ...books,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    }
    case 'book_changed': {
      return books.map((b) => {
        if (b.id === action.book.id) {
          return action.book;
        }
        return b;
      });
    }

    case 'book_removed': {
      return books.filter((b) => b.id !== action.id);
    }

    default: {
      throw Error(`unknown action${action.type}`);
    }
  }
};

export default booksReducer;
