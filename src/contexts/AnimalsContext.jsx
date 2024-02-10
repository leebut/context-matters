/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";
const AnimalsContext = createContext();

function AnimalsProvider({ children }) {
  const [animals, setAnimals] = useState({});

  // Set isLoading to true to prevent nested route components loading before the data.
  const [isLoading, setIsloading] = useState(true);
  const [currentAnimal, setCurrentAnimal] = useState({});

  useEffect(function () {
    async function fetchAnimals() {
      try {
        const res = await fetch(`${BASE_URL}/animals`);
        const data = await res.json();
        setAnimals(data);
      } catch {
        alert("Error fetching animals");
      } finally {
        setIsloading(false);
      }
    }
    fetchAnimals();
  }, []);

  async function getAnimal(id) {
    try {
      const res = await fetch(`${BASE_URL}/animals/${id}`);
      const data = await res.json();
      setCurrentAnimal(data);
    } catch {
      alert("Error fetching animals");
    } finally {
      setIsloading(false);
    }
  }
  return (
    <AnimalsContext.Provider
      value={{ animals, isLoading, getAnimal, currentAnimal }}
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
