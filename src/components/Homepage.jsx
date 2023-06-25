import { useContext, useEffect } from "react";
import { fakeFetch } from "../constants";
import { BookContext } from "../contexts/BookContext";
import { ProfileContext } from "../contexts/ProfileContext";

const Homepage = () => {
  const {
    booksData,
    setBooksData,
    favIds,
    handleMarkAsRead,
    handleAddFavorite
  } = useContext(BookContext);
  const { setProfile } = useContext(ProfileContext);
  useEffect(() => {
    const innerFunction = async () => {
      try {
        const { data } = await fakeFetch("https://example.com/api/books");
        setBooksData(data.books);
        setProfile(data.user);
      } catch (e) {
        console.error(e);
      }
    };
    innerFunction();
  }, []);
  return (
    <>
      <div style={{ display: "flex" }}>
        {booksData.length > 0 &&
          booksData?.map((book) => {
            const { id, image, title, author, read } = book;
            return (
              <>
                <li key={id}>
                  <img src={image} width="100px" height="200px" />
                  <p>{title}</p>
                  <p>{author}</p>
                  <div>
                    <button
                      onClick={() => handleMarkAsRead(book)}
                      disabled={read}
                    >
                      {read ? "Already read" : "Mark as read"}
                    </button>
                  </div>
                  <button onClick={() => handleAddFavorite(id)}>
                    {favIds.includes(id) ? "Go" : "Add"} to favorites
                  </button>
                </li>
              </>
            );
          })}
      </div>
    </>
  );
};
export default Homepage;
