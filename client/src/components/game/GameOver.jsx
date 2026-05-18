import {
  useGameStore
} from "../../store/gameStore";

const GameOver = () => {

  const {
    setGamePhase,
    setScore,
    setStress,
    setFocus,
    setCombo,
    setWrongAttempts,
    setTimer,
  } = useGameStore();

  const restartGame = () => {

    // RESET STATS
    setScore(0);

    setStress(0);

    setFocus(100);

    setCombo(0);

    setWrongAttempts(0);

    setTimer(30);

    // START AGAIN

    setGamePhase("countdown");
  };

  return (

    <div className="game-over-screen">

      <div className="game-over-card">

        <h1>
          TIME UP
        </h1>

        <p>
          Neural synchronization failed.
        </p>

        <button
          onClick={restartGame}
        >
          PLAY AGAIN
        </button>

      </div>

    </div>
  );
};

export default GameOver;