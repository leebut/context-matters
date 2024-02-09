/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";
const AnimalsContext = createContext();

function AnimalsProvider({ children }) {
  const [animals, setAnimals] = useState({});
  const [isLoading, setIsloading] = useState(false);

  useEffect(function () {
    async function fetchAnimals() {
      try {
        setIsloading(true);
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

  return (
    <AnimalsContext.Provider value={{ animals, isLoading }}>
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
