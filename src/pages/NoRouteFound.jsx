import { useNavigate } from "react-router-dom";

function NoRouteFound() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>No Route Found. Go back before the Terminator comes back!</h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Go back
        </button>
      </div>
    </>
  );
}

export default NoRouteFound;
