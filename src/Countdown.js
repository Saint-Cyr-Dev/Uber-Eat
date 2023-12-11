import React, { useState, useEffect } from 'react';

const Countdown = ({ expirationDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const timeRemaining = expirationDate - now;

    return {
      days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000),
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [expirationDate, calculateTimeRemaining]);

  return (
    <div>
      <span>Ouvre dans :</span>
      <p>{timeRemaining.days} jours, {timeRemaining.hours} heures, {timeRemaining.minutes} minutes, {timeRemaining.seconds} secondes</p>
    </div>
  );
};

export default Countdown;
