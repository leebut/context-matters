import { Link } from "react-router-dom";
import { useAnimals } from "../contexts/AnimalsContext";
import styles from "./Mammals.module.css";

function Mammals() {
  const { animals, isLoading } = useAnimals();
  return (
    <>
      <section>
        <h1>Mammals</h1>

        <ul className={styles.list}>
          {!isLoading ? (
            animals.map((animal) =>
              animal.classification === "mammals" ? (
                <>
                  <Link to={`${animal.id}`} className={styles.link}>
                    <li
                      className={styles.listItem}
                      key={animal.scientific_name}
                    >
                      <span className={styles.heading}>Common name:</span>{" "}
                      {animal.name}
                      <br />
                      <span className={styles.heading}>Scientific name: </span>
                      <em>({animal.scientific_name})</em>
                      {/*<br />
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
                      ))} */}
                    </li>
                  </Link>
                </>
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

export default Mammals;
