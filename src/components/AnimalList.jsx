import { NavLink } from "react-router-dom";
import { useAnimals } from "../contexts/AnimalsContext";
import styles from "./AnimalList.module.css";
function AnimalList() {
  const { animals, currentClassification } = useAnimals();
  return (
    <section className={styles.animalListLayout}>
      <h1>{currentClassification}</h1>

      {animals.length > 0 ? (
        <ul className={styles.list}>
          {animals.map(
            (animal) =>
              animal.classification === currentClassification && (
                <li key={animal.id} className={styles.listItem}>
                  <NavLink
                    to={`${currentClassification}/${animal.id}`}
                    className={styles.link}
                  >
                    <span className={styles.heading}>Common name:</span>{" "}
                    {animal.name}
                    <br />
                    <span className={styles.heading}>Scientific name: </span>
                    <em>({animal.scientific_name})</em>
                  </NavLink>
                </li>
              )
          )}
        </ul>
      ) : (
        <p>Loading animals</p>
      )}
    </section>
  );
}

export default AnimalList;
