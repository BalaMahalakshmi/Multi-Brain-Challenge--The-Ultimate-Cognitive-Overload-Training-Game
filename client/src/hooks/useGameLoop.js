import { useEffect } from "react";

import { useGameStore } from "../store/gameStore";

import { generateMemorySequence }
from "../utils/memoryUtils";

import { generateRecallQuestion }
from "../utils/recallQuestions";

import { levelConfig }
from "../utils/levelConfig";

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
];

export const useGameLoop = () => {

  const {

    gamePhase,

    level,

    setAudioSequence,

    setTargetColor,

    setRecallQuestion,

    setCorrectAnswer,

  } = useGameStore();

  const currentLevel =
    levelConfig[level]
    || levelConfig[1];

  useEffect(() => {

    if(gamePhase === "playing"){

      startRound();
    }

  }, [gamePhase, level]);

  const startRound = () => {

    const sequence =
      generateMemorySequence(
        currentLevel.memoryLength
      );

    setAudioSequence(sequence);

    const target =
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ];

    setTargetColor(target);

    const recall =
      generateRecallQuestion(sequence);

    setRecallQuestion(
      recall.question
    );

    setCorrectAnswer(
      recall.answer
    );
  };
};