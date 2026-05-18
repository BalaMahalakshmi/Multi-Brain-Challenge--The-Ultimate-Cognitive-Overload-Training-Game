export const useAudio = () => {

  const speakSequence = (sequence) => {

    sequence.forEach((num, index) => {

      setTimeout(() => {

        const utterance = new SpeechSynthesisUtterance(
          num.toString()
        );

        speechSynthesis.speak(utterance);

      }, index * 1000);
    });
  };

  return {
    speakSequence,
  };
};