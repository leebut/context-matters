/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import { useAnimals } from "../contexts/AnimalsContext";

function Homepage() {
  return (
    <>
      <Header />
      <h1>
        Context Matters{" "}
        <span style={{ fontSize: `1rem`, color: "darkgreen" }}>
          {" "}
          so do animals
        </span>
      </h1>
      <p>This app is a demo of React Router with context.</p>

      <Outlet />
    </>
  );
}

export default Homepage;
