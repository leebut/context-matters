import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerLayout}>
      <p>
        Images were collected from the following users of{" "}
        <a href="https://unplash.com" target="_blank">
          Unsplash.com:
        </a>
      </p>
      <p>
        cats-<span className={styles.yellow}>@bogdanf</span>, koala-
        <span className={styles.yellow}>@avishalz</span>, Kangaroo-
        <span className={styles.yellow}>@johntorcasio</span>, bats-
        <span className={styles.yellow}>@davidclode</span>, dog-
        <span className={styles.yellow}>@marliesestreefland</span>,
        <br />
        fireman-
        <span className={styles.yellow}>@shotbygaines</span>, snake-
        <span className={styles.yellow}>@acastrophotocr</span>, lizzard-
        <span className={styles.yellow}>@ricklipsett</span>, bilby-
        <span className={styles.yellow}>Pixabay AI</span>
      </p>
    </footer>
  );
}

export default Footer;
