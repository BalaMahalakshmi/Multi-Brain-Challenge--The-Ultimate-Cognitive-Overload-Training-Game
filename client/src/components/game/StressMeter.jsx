const StressMeter = ({ level }) => {

  return (
    <div className="game-card">
      <h2>Stress Meter</h2>

      <progress
        value={level}
        max="100"
      />
    </div>
  );
};

export default StressMeter;