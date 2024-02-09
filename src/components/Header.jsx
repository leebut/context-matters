/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useAnimals } from "../contexts/AnimalsContext";

function Header() {
  const { animals, isLoading } = useAnimals();
  if (isLoading) {
    return "Fetching the animals from the farm";
  }

  if (!animals.length) {
    return "This is an abomination!";
  }

  const animalClasses = new Set();

  animals.filter((animal) => {
    const className = animal.class;
    if (!animalClasses.has(className)) {
      animalClasses.add(className);
      return true;
    }
    return false;
  });

  console.log(animalClasses);
  return (
    <header>
      <nav>
        <ul className={styles.navList}>
          {Array.from(animalClasses).map((animalClass) => (
            <li key={animalClass} className={styles.navItem}>
              <NavLink to={animalClass} className={styles.navLink}>
                {animalClass}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// if (teamType === "home") {
//   const existingPlayer = homeTeam.find(
//     (homeTeam) => homeTeam.name === player.name
//   );
//   if (!existingPlayer) {
//     setHomeTeam((addNewPlayer) => [...addNewPlayer, player]);

//     console.log("UPADATED TEAM");
//     console.log(homeTeam);
//   } else {
//     alert("This player is in the team");
//   }

export default Header;
