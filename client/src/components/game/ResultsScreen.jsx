import {
  useGameStore
} from "../../store/gameStore";

const ResultsScreen = () => {

  const {

    score,

    focus,

    stress,

    combo,

    level,

    setLevel,

    setTimer,

    setGamePhase,

    setScore,

    setStress,

    setFocus,

    setCombo,

    setWrongAttempts,

  } = useGameStore();

  // NEXT LEVEL
  const nextLevel = () => {

    setLevel(level + 1);

    setTimer(30);

    setWrongAttempts(0);

    setGamePhase(
      "countdown"
    );
  };

  // RESTART GAME
  const restartGame = () => {

    setLevel(1);

    setScore(0);

    setStress(0);

    setFocus(100);

    setCombo(0);

    setWrongAttempts(0);

    setTimer(30);

    setGamePhase(
      "countdown"
    );
  };

  return (

    <div className="results-screen">

      <div className="results-card">

        <h2>LEVEL {level} COMPLETE</h2>

        <h1>
          NEURAL ANALYSIS
        </h1>

        <div className="score-number">

          {score}

        </div>

        <div className="results-stats">

          <div>
            <span>FOCUS</span>
            <span>{focus}</span>
          </div>

          <div>
            <span>STRESS</span>
            <span>{stress}</span>
          </div>

          <div>
            <span>COMBO</span>
            <span>{combo}</span>
          </div>


        </div>

        <div className="results-buttons">

          <button
            className="next-btn"
            onClick={nextLevel}
          >
            NEXT LEVEL
          </button>

          <button
            className="restart-btn"
            onClick={restartGame}
          >
            RESTART
          </button>

        </div>

      </div>

    </div>
  );
};

export default ResultsScreen;