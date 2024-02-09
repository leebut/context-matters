import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Mammals from "./pages/Mammals";
import Reptiles from "./pages/Reptiles";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";

function App() {
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
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route
            index
            element={<Homepage animals={animals} isLoading={isLoading} />}
          />
          <Route path="mammal" element={<Mammals />} />
          <Route path="reptile" element={<Reptiles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
