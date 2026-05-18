import { useGameStore } from "../../store/gameStore";

const ScoreBoard = () => {

  const {
    score,
    stress,
    focus,
    combo,
  } = useGameStore();

  return (

    <div className="hud">

      <div>
        SCORE: {score}
      </div>

      <div>
        FOCUS: {focus}
      </div>

      <div>
        STRESS: {stress}
      </div>

      <div>
        COMBO: {combo}
      </div>

    </div>
  );
};

export default ScoreBoard;