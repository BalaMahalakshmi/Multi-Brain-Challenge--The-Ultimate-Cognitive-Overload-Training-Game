export const generateMemorySequence = (
  length
) => {

  return Array.from(
    { length },

    () =>
      Math.floor(
        Math.random() * 9
      ) + 1
  );
};