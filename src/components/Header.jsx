/* eslint-disable react/prop-types */
// import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import TopNav from "./TopNav";
// import { useAnimals } from "../contexts/AnimalsContext";

function Header() {
  return (
    <header className={styles.headerLayout}>
      <TopNav />
      <h1>
        Context Matters<span>&nbsp; - so do animals</span>
      </h1>
    </header>
  );
}

export default Header;
