import {
  useEffect
} from "react";

import {
  useGameStore
} from "../../store/gameStore";

const RoundTimer = () => {

  const {
    timer,
    setTimer,
    setGamePhase,
  } = useGameStore();

  useEffect(() => {

    if(timer <= 0){

      setGamePhase(
        "gameover"
      );

      return;
    }

    const interval =
      setInterval(() => {

        setTimer(timer - 1);

      }, 1000);

    return () =>
      clearInterval(interval);

  }, [timer]);

  return (

    <div className="timer-box">

      {timer}

    </div>
  );
};

export default RoundTimer;