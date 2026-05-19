export const generateRhythmPattern = (
  level
) => {

  const pattern = [];

  for (let i = 0; i < level; i++) {
    pattern.push(
      Math.random() > 0.5
        ? "tap"
        : "pause"
    );
  }

  return pattern;
};