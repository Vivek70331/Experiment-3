import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useAppContext } from "../context/AppContext";

export default function Navbar() {
  const { favoriteCount } = useAppContext();

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favorites">❤️ Favorites ({favoriteCount})</Link>
      </div>

      <ThemeToggle />
    </nav>
  );
}