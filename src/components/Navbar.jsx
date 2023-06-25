import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { favIds, booksData } = useContext(BookContext);
  const readCount = booksData.reduce(
    (acc, { read }) => (read ? acc + 1 : acc),
    0
  );
  return (
    <>
      <NavLink to="/">All Books</NavLink>
      <span> </span>
      <NavLink to="/favorites">Favorites({favIds.length})</NavLink>
      <span> </span>
      <NavLink to="/read">Read({readCount})</NavLink>
      <span> </span>
      <NavLink to="/profile">Profile</NavLink>
    </>
  );
};
export default Navbar;
