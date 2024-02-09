import { useAnimals } from "../contexts/AnimalsContext";
import styles from "./Mammals.module.css";

function Mammals() {
  const { animals } = useAnimals();
  return (
    <>
      <section>
        <h1>Mammals</h1>

        <ul className={styles.list}>
          {animals.map((animal) =>
            animal.class === "mammals" ? (
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
          )}
        </ul>
      </section>
    </>
  );
}

export default Mammals;
