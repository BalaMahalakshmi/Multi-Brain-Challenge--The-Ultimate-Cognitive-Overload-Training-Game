import { useState } from "react";

import {
  useGameStore
} from "../../store/gameStore";

const RecallQuestion = () => {

  const [answer, setAnswer] =
    useState("");

  const {
    recallQuestion,
    correctAnswer,
    score,
    stress,
    setScore,
    setStress,
    setGamePhase,
  } = useGameStore();

  const checkAnswer = () => {
    
    speechSynthesis.cancel();

    // CORRECT ANSWER
    if(
      Number(answer) ===
      correctAnswer
    ){

      setScore(score + 20);

    } else {

      setStress(stress + 20);
    }

    // SHOW RESULTS SCREEN
    setGamePhase("results");
  };

  return (

    <div className="game-card">

      <h2>
        Recall Test
      </h2>

      <p>
        {recallQuestion}
      </p>

      <input
        type="number"
        value={answer}
        onChange={(e) =>
          setAnswer(e.target.value)
        }
      />

      <button
        onClick={checkAnswer}
      >
        Submit
      </button>

    </div>
  );
};

export default RecallQuestion;