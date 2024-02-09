import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Mammals from "./components/Mammals";
import Reptiles from "./components/Reptiles";
import LandingPage from "./pages/LandingPage";
import NoRouteFound from "./pages/NoRouteFound";
import { AnimalsProvider } from "./contexts/AnimalsContext";

function App() {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <AnimalsProvider>
          <Routes>
            <Route index element={<LandingPage />}></Route>

            <Route path="home" element={<Homepage />}>
              <Route path="mammals" element={<Mammals />} />
              <Route path="reptiles" element={<Reptiles />} />
            </Route>
            <Route path="*" element={<NoRouteFound />} />
          </Routes>
        </AnimalsProvider>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;