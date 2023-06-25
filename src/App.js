import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Favorites from "./components/Favorites";
import Read from "./components/Read";
import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/read" element={<Read />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
