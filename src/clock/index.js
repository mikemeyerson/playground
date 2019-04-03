import React, { useLayoutEffect, useState } from "react";

import "./styles.css";

function Clock() {
  const [date, setDate] = useState(() => new Date());
  // Need to account for rotations
  // otherwise hand moves counter-clockwise on 0
  const [secondRotations, setSecondRotations] = useState(0);
  const [minuteRotations, setMinuteRotations] = useState(0);
  const [hourRotations, setHourRotations] = useState(0);

  useLayoutEffect(
    () => {
      const secondsInterval = setInterval(() => {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        setDate(now);

        if (seconds === 59) {
          setSecondRotations(value => value + 1);
        }

        if (minutes === 59) {
          setMinuteRotations(value => value + 1);
        }

        if (hours === 11) {
          setHourRotations(value => value + 1);
        }

        const secondsDegrees =
          (seconds / 60) * 360 + 90 + secondRotations * 360;
        const minutesDegrees =
          (minutes / 60) * 360 + 90 + minuteRotations * 360;
        const hoursDegrees = (hours / 12) * 360 + 90 + hourRotations * 360;

        const secondHand = document.querySelector(".second-hand");
        const minuteHand = document.querySelector(".minute-hand");
        const hourHand = document.querySelector(".hour-hand");

        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
      }, 1000);

      return () => {
        clearInterval(secondsInterval);
      };
    },
    [secondRotations, minuteRotations, hourRotations]
  );

  return (
    <div>
      {`${date.getHours() % 12}:${date.getMinutes()}:${date.getSeconds()}`}
      <div className="clock">
        <div className="clock-face">
          <div className="hand hour-hand" />
          <div className="hand minute-hand" />
          <div className="hand second-hand" />
        </div>
      </div>
    </div>
  );
}

export default Clock;
