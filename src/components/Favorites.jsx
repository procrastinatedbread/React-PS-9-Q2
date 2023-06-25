import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Favorites = () => {
  const { favIds, booksData } = useContext(BookContext);
  const favBooks = booksData.filter(({ id }) => favIds.includes(id));
  return (
    <div style={{ display: "flex" }}>
      {favBooks.map(({ id, image, author, title }) => {
        return (
          <div key={id}>
            <img src={image} width="100px" height="200px" />

            <p>{author}</p>
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Favorites;
