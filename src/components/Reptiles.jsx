import { useAnimals } from "../contexts/AnimalsContext";
import AnimalList from "./AnimalList";
import { useEffect } from "react";

function Reptiles() {
  const { animals, setCurrentClassification } = useAnimals();

  useEffect(
    function () {
      setCurrentClassification("reptiles");
    },
    [setCurrentClassification]
  );

  console.log(animals);
  return <AnimalList />;
}

export default Reptiles;
