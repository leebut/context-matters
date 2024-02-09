/* eslint-disable react/prop-types */
import Header from "../components/Header";

function Homepage({ animals, isLoading }) {
  return (
    <>
      <Header animals={animals} isLoading={isLoading} />
      <h1>Context Matters</h1>
      <p>This app is a demo of React Router with context.</p>
    </>
  );
}

export default Homepage;
