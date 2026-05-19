export const calculateScore = ({
  memory,
  rhythm,
  reaction,
}) => {

  return (
    memory * 4 +
    rhythm * 3 +
    (100 - reaction)
  );
};