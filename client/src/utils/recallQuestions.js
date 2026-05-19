export const generateRecallQuestion =
(sequence) => {

  const questionTypes = [

    {
      question:
      "What was the first number?",

      answer: sequence[0],
    },

    {
      question:
      "What was the second number?",

      answer: sequence[1],
    },

    {
      question:
      "What was the last number?",

      answer:
      sequence[
        sequence.length - 1
      ],
    },

    {
      question:
      "What was the highest number?",

      answer:
      Math.max(...sequence),
    },
  ];

  return questionTypes[
    Math.floor(
      Math.random() *
      questionTypes.length
    )
  ];
};