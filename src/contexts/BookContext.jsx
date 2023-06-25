import { createContext, useState } from "react";

export const BookContext = createContext();
export const BookProvider = ({ children }) => {
  const [booksData, setBooksData] = useState([]);
  const [favIds, setFavIds] = useState([]);

  const handleAddFavorite = (bookId) => {
    setFavIds((favIds) =>
      favIds.includes(bookId) ? favIds : [...favIds, bookId]
    );
  };
  const handleMarkAsRead = (bookData) => {
    setBooksData((books) =>
      books.map((book) =>
        book.id === bookData.id ? { ...book, read: true } : book
      )
    );
  };
  const bookContext = {
    booksData,
    setBooksData,
    favIds,
    setFavIds,
    handleAddFavorite,
    handleMarkAsRead
  };

  return (
    <BookContext.Provider value={bookContext}>{children}</BookContext.Provider>
  );
};
