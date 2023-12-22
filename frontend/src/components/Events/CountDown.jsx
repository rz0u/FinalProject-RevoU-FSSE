import axios from "axios";
import React, { useEffect, useState } from "react";

function CountDown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // if (
    //   typeof timeLeft.days === "undefined" &&
    //   typeof timeLeft.hours === "undefined" &&
    //   typeof timeLeft.minutes === "undefined" &&
    //   typeof timeLeft.seconds === "undefined"
    // ) {
    //   axios.delete(`${server}/event/delete-shop-event/${data._id}`);
    // }

    return () => clearTimeout(timer);
  }, [timeLeft]);

  function calculateTimeLeft() {
    const difference = +new Date("2023-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval, index) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <span key={index} className="text-[25px] text-[#475ad2]">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-[red] text-[25px]">Event telah berakhir.</span>
      )}
    </div>
  );
}

export default CountDown;
