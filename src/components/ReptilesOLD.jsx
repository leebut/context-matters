import { useAnimals } from "../contexts/AnimalsContext";
import styles from "./Reptiles.module.css";

function Reptiles() {
  const { animals, isLoading } = useAnimals();
  return (
    <>
      <section>
        <h1>Reptiles</h1>

        <ul className={styles.list}>
          {!isLoading ? (
            animals.map((animal) =>
              animal.classification === "reptiles" ? (
                <li key={animal.name} className={styles.listItem}>
                  <span className={styles.heading}>Common name:</span>{" "}
                  {animal.name}
                  <br />
                  <span className={styles.heading}>Scientific name: </span>
                  <em>({animal.scientific_name})</em>
                  <br />
                  <span className={styles.heading}>
                    N
                    <sup>
                      <u>o</u>
                    </sup>{" "}
                    legs:{" "}
                  </span>
                  {animal.legs}
                  <br />
                  <span className={styles.heading}>Location(s):</span>
                  {animal.locations.map((location, idx) => (
                    <span key={idx}> {location} </span>
                  ))}
                </li>
              ) : (
                ""
              )
            )
          ) : (
            <p>Loading animals</p>
          )}
        </ul>
      </section>
    </>
  );
}

export default Reptiles;
