import styles from "./Loading.module.css";

function Loading() {
  return (
    <section className={styles.loadingLayout}>
      <img src="/loading.jpg" alt="Loading image" />
    </section>
  );
}

export default Loading;
