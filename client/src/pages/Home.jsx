import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (

    <div className="home-page">

      <div className="overlay" />

      <div className="home-content">

        <h1 className="game-title">

          MULTI-BRAIN
          <span>
            CHALLENGE
          </span>

        </h1>

        <p className="game-subtitle">

          Survive cognitive overload.
          Train memory, rhythm,
          focus and reaction under
          pressure.

        </p>

        <button
          className="start-btn"
          onClick={() =>
            navigate("/game")
          }
        >
          START NEURAL TEST
        </button>

      </div>

    </div>
  );
};

export default Home;