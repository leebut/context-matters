/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header({ animals, isLoading }) {
  if (isLoading) {
    return "Fetching the animals from the farm";
  }

  if (!animals.length) {
    return "This is an abomination!";
  }

  return (
    <header>
      <nav>
        <ul className={styles.navList}>
          {animals.map((animal) => (
            <li key={animal.name} className={styles.navItem}>
              <NavLink to={animal.class} className={styles.navLink}>
                {animal.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
