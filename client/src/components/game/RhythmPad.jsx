import {
  useEffect,
  useState,
  useRef
} from "react";

import beatSound from "../../assets/audio/beat.mp3";

import {
  useGameStore
} from "../../store/gameStore";

const RhythmPad = () => {

  const {
    gamePhase
  } = useGameStore();

  const [beatActive, setBeatActive] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const audioRef = useRef(
    new Audio(beatSound)
  );

  const intervalRef = useRef(null);

  useEffect(() => {

    // STOP EVERYTHING
    audioRef.current.pause();

    audioRef.current.currentTime = 0;

    clearInterval(intervalRef.current);

    // ONLY RUN DURING GAME
    if(gamePhase !== "playing"){
      return;
    }

    intervalRef.current =
      setInterval(() => {

        audioRef.current.currentTime = 0;

        audioRef.current.play();

        setBeatActive(true);

        setTimeout(() => {

          setBeatActive(false);

        }, 350);

      }, 1200);

    // CLEANUP
    return () => {

      clearInterval(intervalRef.current);

      audioRef.current.pause();

      audioRef.current.currentTime = 0;
    };

  }, [gamePhase]);

  const handleTap = () => {

    if(beatActive){

      setMessage(
        "PERFECT SYNC"
      );

    } else {

      setMessage(
        "SYNC MISS"
      );
    }
  };

  return (

    <div className="game-card">

      <h2>
        Rhythm Sync
      </h2>

      <button
        className={`tap-btn ${
          beatActive
            ? "active-beat"
            : ""
        }`}
        onClick={handleTap}
      >
        TAP
      </button>

      <p>{message}</p>

    </div>
  );
};

export default RhythmPad;