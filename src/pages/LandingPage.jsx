/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Context Matters - so do animals</h1>
      <Link to="/home">Find out about the animals</Link>
    </div>
  );
}

export default LandingPage;
