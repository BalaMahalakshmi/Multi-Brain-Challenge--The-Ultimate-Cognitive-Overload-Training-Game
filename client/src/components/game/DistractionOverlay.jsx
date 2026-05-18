const messages = [

  "SIGNAL LOST",

  "WARNING",

  "FOCUS COLLAPSE",

  "ERROR",

  "DISTORTION",
];

const DistractionOverlay = () => {

  const randomMessage =
    messages[
      Math.floor(
        Math.random()
        * messages.length
      )
    ];

  return (

    <div className="distraction">

      {randomMessage}

    </div>
  );
};

export default DistractionOverlay;