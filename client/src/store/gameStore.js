import { create } from "zustand";


export const useGameStore = create((set) => ({

  // GAME PHASE
  gamePhase: "home",

  setGamePhase: (gamePhase) =>
   set({ gamePhase }),

  // PLAYER STATS
  score: 0,
  combo: 0,
  stress: 0,
  focus: 100,
  
  level: 1,
  setLevel: (level) =>
    set({ level }),

  // FAIL SYSTEM
  wrongAttempts: 0,
  maxWrongAttempts: 2,

  // TIMER
  roundTime: 30,

  timer: 30,
  setTimer: (timer) =>
    set({ timer }),

  // AUDIO MEMORY
  audioSequence: [],

  // VISUAL
  targetColor: "",
  
  setTargetColor:
  (targetColor) =>
    set({ targetColor }),

  // RECALL
  recallQuestion: "",
  correctAnswer: null,

  // RHYTHM
  beatActive: false,

  // POPUPS
  popupMessage: "",

  // ACTIONS

  setScore: (score) =>
    set({ score }),

  setCombo: (combo) =>
    set({ combo }),

  setStress: (stress) =>
    set({ stress }),

  setFocus: (focus) =>
    set({ focus }),

  setWrongAttempts: (wrongAttempts) =>
    set({ wrongAttempts }),

  setAudioSequence: (audioSequence) =>
    set({ audioSequence }),

  setTargetColor: (targetColor) =>
    set({ targetColor }),

  setRecallQuestion: (recallQuestion) =>
    set({ recallQuestion }),

   setCorrectAnswer: (correctAnswer) =>
    set({ correctAnswer }),

  setBeatActive: (beatActive) =>
    set({ beatActive }),

  setPopupMessage: (popupMessage) =>
    set({ popupMessage }),

}));
