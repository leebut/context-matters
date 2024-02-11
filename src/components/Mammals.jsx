import { useAnimals } from "../contexts/AnimalsContext";
import AnimalList from "./AnimalList";
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
  return <AnimalList />;
}

export default Mammals;
