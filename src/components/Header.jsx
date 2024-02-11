/* eslint-disable react/prop-types */
// import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import TopNav from "./TopNav";
// import { useAnimals } from "../contexts/AnimalsContext";

function Header() {
  return (
    <header className={styles.headerLayout}>
      <TopNav />
    </header>
  );
}

export default Header;
