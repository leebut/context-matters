import styles from "./AnimalDetails.module.css";
import { useAnimals } from "../contexts/AnimalsContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function AnimalDetails() {
  const { id } = useParams();
  const { isLoading, getAnimal, currentAnimal } = useAnimals();

  useEffect(
    function () {
      getAnimal(id);
    },
    [id]
  );

  const { name, scientific_name, classification, legs, marcupial, locations } =
    currentAnimal;

  console.log(locations);
  return (
    <section className={styles.animalDetailsPage}>
      {isLoading ? (
        <p>Fetching animals</p>
      ) : (
        <div className={styles.outerWrapper}>
          <div className={styles.header}>
            <h1>{name}</h1>
          </div>
          <div className={styles.animalDetailsWrapper}>
            <section className={styles.animalDetailsInner}>
              <div>
                <p className={styles.animalDetailsParagraph}>
                  <span className={styles.title}>Scientific Name</span>
                  <br /> {scientific_name}
                </p>
                <p className={styles.animalDetailsParagraph}>
                  <span className={styles.title}>Classification</span>
                  <br /> {classification}
                </p>
              </div>
            </section>
            <section className={styles.animalDetailsInner}>
              <div>
                <p className={styles.animalDetailsParagraph}>
                  <span className={styles.title}>
                    N
                    <sup>
                      <u>o</u>
                    </sup>{" "}
                    of legs
                  </span>
                  <br />
                  {legs}
                </p>
                <p className={styles.animalDetailsParagraph}>
                  <span className={styles.title}>Marcupial</span>
                  <br /> {marcupial ? "Yes" : "No"}
                </p>
              </div>
            </section>
            <section
              className={styles.animalDetailsInner}
              style={{ gridColumn: "1 / -1" }}
            >
              <p className={styles.animalDetailsParagraph}>
                <span className={styles.title}>Locations found</span>
                <br />
                {locations &&
                  locations.map((location, idx) => (
                    <span key={idx}>{location}, </span>
                  ))}
              </p>
            </section>
          </div>
          <div className={styles.animalDetailsOverlay}></div>
        </div>
      )}
    </section>
  );
}

export default AnimalDetails;
