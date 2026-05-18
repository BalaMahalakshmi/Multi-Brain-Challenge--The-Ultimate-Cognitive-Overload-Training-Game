import {
  useEffect,
  useState
} from "react";

const Countdown = ({
  onComplete
}) => {

  const [count, setCount] =
    useState(5);

  useEffect(() => {

    if(count === 0){

      onComplete();

      return;
    }

    const timer =
      setTimeout(() => {

        setCount(count - 1);

      }, 1000);

    return () =>
      clearTimeout(timer);

  }, [count]);

  return (

    <div className="countdown-screen">

      <div className="count-circle">

        <h1 key={count}>
          {count}
        </h1>

      </div>

    </div>
  );
};

export default Countdown;