import api from "./api";


// ============================================
// CALCULATE FOCUS INDEX
// ============================================

export const calculateFocusIndex = ({
  memoryAccuracy,
  rhythmAccuracy,
  visualAccuracy,
}) => {

  const focus =
    (
      memoryAccuracy +
      rhythmAccuracy +
      visualAccuracy
    ) / 3;

  return Math.round(focus);
};


// ============================================
// CALCULATE STRESS LEVEL
// ============================================

export const calculateStressLevel = ({
  missedInputs,
  reactionTime,
  failedRecalls,
}) => {

  let stress = 0;

  stress += missedInputs * 10;

  stress += failedRecalls * 15;

  stress += reactionTime > 1
    ? 20
    : 5;

  return Math.min(stress, 100);
};


// ============================================
// CALCULATE NEURAL SCORE
// ============================================

export const calculateNeuralScore = ({
  memoryAccuracy,
  rhythmAccuracy,
  visualAccuracy,
  reactionTime,
}) => {

  const score =
    (
      memoryAccuracy * 4 +
      rhythmAccuracy * 3 +
      visualAccuracy * 2 +
      (100 - reactionTime * 10)
    );

  return Math.round(score);
};


// ============================================
// DETECT ATTENTION COLLAPSE
// ============================================

export const detectAttentionCollapse = ({
  missedInputs,
  comboBreaks,
}) => {

  if (
    missedInputs >= 5 ||
    comboBreaks >= 3
  ) {
    return true;
  }

  return false;
};


// ============================================
// CALCULATE MULTITASKING SCORE
// ============================================

export const calculateMultitaskingScore = ({
  memoryAccuracy,
  rhythmAccuracy,
  visualAccuracy,
  reactionTime,
}) => {

  const multitask =
    (
      memoryAccuracy * 0.3 +
      rhythmAccuracy * 0.3 +
      visualAccuracy * 0.2 +
      (100 - reactionTime * 10) * 0.2
    );

  return Math.round(multitask);
};


// ============================================
// SEND ANALYTICS TO BACKEND
// ============================================

export const sendAnalytics = async (
  analyticsData
) => {

  try {

    const response = await api.post(
      "/ai/analyze",
      analyticsData
    );

    return response.data;

  } catch (error) {

    console.error(
      "Analytics Error:",
      error
    );

    return null;
  }
};


// ============================================
// BUILD COMPLETE GAME ANALYTICS
// ============================================

export const buildGameAnalytics = ({
  memoryAccuracy,
  rhythmAccuracy,
  visualAccuracy,
  reactionTime,
  missedInputs,
  failedRecalls,
  comboBreaks,
}) => {

  const focusIndex =
    calculateFocusIndex({
      memoryAccuracy,
      rhythmAccuracy,
      visualAccuracy,
    });

  const stressLevel =
    calculateStressLevel({
      missedInputs,
      reactionTime,
      failedRecalls,
    });

  const neuralScore =
    calculateNeuralScore({
      memoryAccuracy,
      rhythmAccuracy,
      visualAccuracy,
      reactionTime,
    });

  const attentionCollapse =
    detectAttentionCollapse({
      missedInputs,
      comboBreaks,
    });

  const multitaskingScore =
    calculateMultitaskingScore({
      memoryAccuracy,
      rhythmAccuracy,
      visualAccuracy,
      reactionTime,
    });

  return {

    focus_index: focusIndex,

    stress_level: stressLevel,

    neural_score: neuralScore,

    attention_collapse:
      attentionCollapse,

    multitasking_score:
      multitaskingScore,

    memory_accuracy:
      memoryAccuracy,

    rhythm_accuracy:
      rhythmAccuracy,

    visual_accuracy:
      visualAccuracy,

    reaction_time:
      reactionTime,

    missed_inputs:
      missedInputs,
  };
};