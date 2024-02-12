/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./TopNav.module.css";
import { useAnimals } from "../contexts/AnimalsContext";

function TopNav() {
  const { animals, isLoading, setCurrentClassification } = useAnimals();
  if (isLoading) {
    return "Fetching the animals for the nav.";
  }

  if (!animals.length) {
    return "This is an abomination!";
  }

  const animalClasses = new Set();

  animals.filter((animal) => {
    const className = animal.classification;
    if (!animalClasses.has(className)) {
      animalClasses.add(className);
      return true;
    }
    return false;
  });

  return (
    <nav>
      <ul className={styles.navList}>
        {Array.from(animalClasses).map((animalClass) => (
          <li key={animalClass} className={styles.navItem}>
            <NavLink to={animalClass} className={styles.navLink}>
              {animalClass}
            </NavLink>
            <button
              value={animalClass}
              onClick={(e) => setCurrentClassification(e.target.value)}
            >
              {animalClass}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TopNav;
