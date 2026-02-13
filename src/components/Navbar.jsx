import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Experiment 3</h1>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    padding: "15px 20px",
    background: "#282c34",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none"
  }
};

export default Navbar;
