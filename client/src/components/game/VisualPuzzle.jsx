import { useState, useEffect }
from "react";

import PopupMessage
from "./PopupMessage";

import {
  useGameStore
} from "../../store/gameStore";

import {
  levelConfig
} from "../../utils/levelConfig";

const colors = [

  "red",

  "blue",

  "green",

  "yellow",
];

const fakeColors = [

  "cyan",

  "purple",

  "orange",
];

const VisualPuzzle = () => {

  const [popup, setPopup] =
    useState("");

  const {

    level,

    targetColor,

    setTargetColor,

    score,

    stress,

    combo,

    wrongAttempts,

    setScore,

    setStress,

    setCombo,

    setWrongAttempts,

  } = useGameStore();

  const currentLevel =
  levelConfig[level]
  || levelConfig[1];

  // GENERATE TARGET
  useEffect(() => {

    let target =
      colors[
        Math.floor(
          Math.random()
          * colors.length
        )
      ];

    // FAKE TARGETS
    if(currentLevel.fakeTargets){

      const useFake =
        Math.random() > 0.7;

      if(useFake){

        target =
          fakeColors[
            Math.floor(
              Math.random()
              * fakeColors.length
            )
          ];
      }
    }

    setTargetColor(target);

  }, [
  level,
  currentLevel,
  setTargetColor
]);

  // CLICK HANDLER
  const handleClick = (color) => {

    // CORRECT
    if(color === targetColor){

      setPopup(
        "TARGET LOCKED"
      );

      setScore(score + 10);

      setCombo(combo + 1);

      setStress(
        Math.max(0, stress - 5)
      );

    }

    // WRONG
    else {

      setPopup(
        "WRONG TARGET"
      );

      setWrongAttempts(
        wrongAttempts + 1
      );

      setCombo(0);

      setStress(
        stress + 10
      );
    }

    setTimeout(() => {

      setPopup("");

    }, 1000);
  };

  // SKIP FAKE TARGET
  const handleSkip = () => {

    if(
      fakeColors.includes(
        targetColor
      )
    ){

      setPopup(
        "SMART DETECTION"
      );

      setScore(score + 15);

      setCombo(combo + 1);

    }

    else {

      setPopup(
        "FALSE SKIP"
      );

      setWrongAttempts(
        wrongAttempts + 1
      );

      setStress(
        stress + 10
      );
    }

    setTimeout(() => {

      setPopup("");

    }, 1000);
  };

  return (

    <div className="game-card">

      {popup && (

        <PopupMessage
          text={popup}
        />
      )}

      <h2>
        Match Target Color
      </h2>

      <p>

  TARGET:

  {

    fakeColors.includes(
      targetColor
    )

    ?

    " UNKNOWN SIGNAL"

    :

    ` ${targetColor}`

  }

</p>
      <div className="color-grid">

        {colors.map((color) => (

          <button
            key={color}
            className="color-box"
            style={{
              background: color
            }}
            onClick={() =>
              handleClick(color)
            }
          />

        ))}

      </div>

      <button
        className="skip-btn"
        onClick={handleSkip}
      >

        SKIP SIGNAL

      </button>

    </div>
  );
};

export default VisualPuzzle;