/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";
const AnimalsContext = createContext();

function AnimalsProvider({ children }) {
  const [animals, setAnimals] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimal, setCurrentAnimal] = useState({});
  const [currentClassification, setCurrentClassification] = useState("");

  useEffect(function () {
    async function fetchAnimals() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/animals`);
        const data = await res.json();
        setAnimals(data);
      } catch {
        alert("Error: execute, 'npm run server'");
      } finally {
        setIsLoading(false);
      }
    }
    fetchAnimals();
  }, []);

  async function getAnimal(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/animals/${id}`);
      const data = await res.json();
      setCurrentAnimal(data);
    } catch {
      alert("Error: Make sure to use 'npm run server'");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <AnimalsContext.Provider
      value={{
        animals,
        isLoading,
        getAnimal,
        currentAnimal,
        currentClassification,
        setCurrentClassification,
      }}
    >
      {children}
    </AnimalsContext.Provider>
  );
}

function useAnimals() {
  const context = useContext(AnimalsContext);
  if (context === undefined)
    throw new Error("AnimalContext used outside of the AnimalProvider");
  return context;
}

export { AnimalsProvider, useAnimals };
