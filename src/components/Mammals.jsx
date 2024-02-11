import { Link } from "react-router-dom";
import { useAnimals } from "../contexts/AnimalsContext";
import styles from "./Mammals.module.css";

function Mammals() {
  const { animals, isLoading } = useAnimals();

  // const {
  //   name,
  //   scientific_name,
  //   classification,
  //   legs,
  //   marcupial,
  //   imageUrl,
  //   locations,
  // } = animals;

  console.log(animals);
  return (
    <>
      <section>
        <h1>Mammals</h1>
        {!isLoading && animals.length > 0 ? (
          <ul className={styles.list}>
            {animals.map(
              (animal) =>
                animal.classification === "mammals" && (
                  <>
                    <Link to={`${animal.id}`} className={styles.link}>
                      <li key={animal.id} className={styles.listItem}>
                        <span className={styles.heading}>Common name:</span>{" "}
                        {animal.name}
                        <br />
                        <span className={styles.heading}>
                          Scientific name:{" "}
                        </span>
                        <em>({animal.scientific_name})</em>
                      </li>
                    </Link>
                  </>
                )
            )}
          </ul>
        ) : (
          <p>Loading animals</p>
        )}
      </section>
    </>
  );
}

export default Mammals;
