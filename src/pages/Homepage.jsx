/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";
import AnimalList from "../components/AnimalList";
// import { useAnimals } from "../contexts/AnimalsContext";

function Homepage() {
  return (
    <>
      <Header />

      <p className={styles.paragraph}>
        This app is a demo of React Router with context.
      </p>
      <section className={styles.homepageLayout}>
        <AnimalList />
        <Outlet />
      </section>

      <Footer />
    </>
  );
}

export default Homepage;
