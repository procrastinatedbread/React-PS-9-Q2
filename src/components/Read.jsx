import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

export default function Read() {
  const { booksData } = useContext(BookContext);
  const readBooks = booksData.filter(({ read }) => read);
  // console.log(readBooks);
  return (
    <div>
      {readBooks.map(({ title, image }) => (
        <div>
          <img src={image} alt="book" width="200px" />
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}
