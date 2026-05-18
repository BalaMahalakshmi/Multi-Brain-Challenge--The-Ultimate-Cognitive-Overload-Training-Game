import {
  useGameStore
} from "../../store/gameStore";

const GameHUD = () => {

  const {
    stress,
    combo,
    level,
  } = useGameStore();

  return (

    <div className="game-hud">

      <div className="hud-box">

        <span>LEVEL</span>

        <h2>{level}</h2>

      </div>

      <div className="hud-box">

        <span>STRESS</span>

        <h2>{stress}%</h2>

      </div>

      <div className="hud-box">

        <span>COMBO</span>

        <h2>{combo}</h2>

      </div>

    </div>
  );
};

export default GameHUD;