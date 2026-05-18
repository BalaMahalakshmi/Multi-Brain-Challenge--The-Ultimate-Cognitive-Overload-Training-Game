import { useState } from "react";

export const useRhythm = () => {

  const [hits, setHits] = useState([]);

  const registerHit = () => {

    const time = Date.now();

    setHits((prev) => [...prev, time]);
  };

  return {
    hits,
    registerHit,
  };
};