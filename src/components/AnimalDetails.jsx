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

  const {
    name,
    scientific_name,
    classification,
    legs,
    marcupial,
    imageUrl,
    locations,
  } = currentAnimal;

  if (isLoading) {
    return "Fetching the animal.";
  }
  return (
    // Photos from Unsplash.com
    // cats - @bogdanf
    // koala - @avishalz
    // Kangaroo - @johntorcasio
    // bats - @davidclode
    // dog - @marliesestreefland
    // fireman - @shotbygaines
    // bilby - Pixabay AI

    <section className={styles.animalDetailsPage}>
      {/* {isLoading ? (
        <p>Fetching animals</p>
      ) : ( */}
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
                  of legs:
                </span>{" "}
                {legs}
              </p>
              <p className={styles.animalDetailsParagraph}>
                <span className={styles.title}>Marcupial:</span>{" "}
                {marcupial ? "Yes" : "No"}
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
              {!isLoading && locations && locations.join(", ")}
              {/* {locationsList} */}
            </p>
          </section>
        </div>
        <div className={styles.animalDetailsOverlay}>
          <img
            className={styles.animalDetailsImage}
            src={imageUrl}
            alt={name}
          />
        </div>
      </div>
      {/* )} */}
    </section>
  );
}

export default AnimalDetails;
