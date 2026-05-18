import { useEffect } from "react";

import Countdown from
"../components/game/Countdown";

import AudioMemory from
"../components/game/AudioMemory";

import VisualPuzzle from
"../components/game/VisualPuzzle";

import RhythmPad from
"../components/game/RhythmPad";

import RecallQuestion from
"../components/game/RecallQuestion";

import ResultsScreen from
"../components/game/ResultsScreen";

import GameOver from
"../components/game/GameOver";

import GameHUD from
"../components/game/GameHUD";

import RoundTimer from
"../components/game/RoundTimer";

import { useGameStore }
from "../store/gameStore";

import { useGameLoop }
from "../hooks/useGameLoop";

const Game = () => {

  const {
    gamePhase,
    setGamePhase,
    wrongAttempts,
  } = useGameStore();

  // START GAME
  useEffect(() => {

    setGamePhase(
      "countdown"
    );

  }, []);

  // START GAME LOOP
  useGameLoop();

  // GAME OVER CONDITION
  useEffect(() => {

    if(wrongAttempts >= 2){

      setGamePhase(
        "gameover"
      );
    }

  }, [wrongAttempts]);

  // COUNTDOWN SCREEN
  if(gamePhase === "countdown"){

    return (

      <Countdown
        onComplete={() =>
          setGamePhase(
            "playing"
          )
        }
      />
    );
  }

  // GAME OVER SCREEN
  if(gamePhase === "gameover"){

    return <GameOver />;
  }

  // RESULTS SCREEN
  if(gamePhase === "results"){

    return <ResultsScreen />;
  }

  // MAIN GAMEPLAY
  // MAIN GAMEPLAY
return (

  <div className="game-screen">

    <div className="top-bar">

      <GameHUD />

      <RoundTimer />

    </div>

    {/* LEVEL WARNING */}

    {

      useGameStore.getState().level >= 2 && (

        <div className="level-warning">

          ⚠ FAKE SIGNALS DETECTED

          <br />

          Use SKIP SIGNAL
          when target color
          does not exist.

        </div>
      )
    }

    <div className="game-layout">

      <AudioMemory />

      <VisualPuzzle />

      <RhythmPad />

      <RecallQuestion />

    </div>

  </div>
);
};

export default Game;