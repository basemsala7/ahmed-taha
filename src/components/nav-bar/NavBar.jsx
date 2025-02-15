import styles from "./nav-bar.module.css";
function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <a class="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">Work</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">faqs</a>
        </li>
        <li>
          <a href="#contact">let&#39; s chat</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
