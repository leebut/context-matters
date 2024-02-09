import { useAnimals } from "../contexts/AnimalsContext";

function Reptiles() {
  const { animals } = useAnimals();
  return (
    <>
      <section>
        <h1>Reptiles</h1>

        <ul>
          {animals.map((animal) =>
            animal.class === "reptiles" ? (
              <li key={animal.name}>{animal.name}</li>
            ) : (
              ""
            )
          )}
        </ul>
      </section>
    </>
  );
}

export default Reptiles;
