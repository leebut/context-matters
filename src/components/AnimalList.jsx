import { Link } from "react-router-dom";
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
                <Link
                  key={animal.id}
                  to={`${currentClassification}/${animal.id}`}
                  className={styles.link}
                >
                  <li className={styles.listItem}>
                    <span className={styles.heading}>Common name:</span>{" "}
                    {animal.name}
                    <br />
                    <span className={styles.heading}>Scientific name: </span>
                    <em>({animal.scientific_name})</em>
                  </li>
                </Link>
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
