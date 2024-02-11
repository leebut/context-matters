import { Link } from "react-router-dom";
import { useAnimals } from "../contexts/AnimalsContext";
import styles from "./Mammals.module.css";
import { useEffect } from "react";

function Mammals() {
  const { animals, setCurrentClassification } = useAnimals();

  useEffect(
    function () {
      setCurrentClassification("mammals");
    },
    [setCurrentClassification]
  );

  console.log(animals);
  return (
    <section>
      <h1>Mammals</h1>

      {animals.length > 0 ? (
        <ul className={styles.list}>
          {animals.map(
            (animal) =>
              animal.classification === "mammals" && (
                <Link
                  key={animal.id}
                  to={`${animal.id}`}
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

export default Mammals;
