import {
  useEffect,
  useRef
} from "react";

import {
  useGameStore
} from "../../store/gameStore";

const AudioMemory = () => {

  const {
    audioSequence,
    gamePhase
  } = useGameStore();

  // STORE TIMEOUT IDS
  const timeoutsRef = useRef([]);

  useEffect(() => {

    // CLEAR OLD SPEECH
    speechSynthesis.cancel();

    // CLEAR OLD TIMEOUTS
    timeoutsRef.current.forEach(
      (timeout) =>
        clearTimeout(timeout)
    );

    timeoutsRef.current = [];

    // ONLY PLAY DURING GAME
    if(gamePhase !== "playing"){
      return;
    }

    audioSequence.forEach(
      (num, index) => {

        const timeout =
          setTimeout(() => {

            // STOP IF GAME ENDED
            if(gamePhase !== "playing"){
              return;
            }

            const utterance =
              new SpeechSynthesisUtterance(
                num.toString()
              );

            utterance.rate = 0.9;

            speechSynthesis.speak(
              utterance
            );

          }, index * 1200);

        // SAVE TIMEOUT
        timeoutsRef.current.push(
          timeout
        );
      }
    );

    // CLEANUP
    return () => {

      speechSynthesis.cancel();

      timeoutsRef.current.forEach(
        (timeout) =>
          clearTimeout(timeout)
      );
    };

  }, [audioSequence, gamePhase]);

  return (

    <div className="game-card">

      <h2>
        Audio Signal
      </h2>

      <p>
        Listen carefully...
      </p>

    </div>
  );
};

export default AudioMemory;