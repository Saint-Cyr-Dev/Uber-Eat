import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountdownTimer = ({ expirationDate }) => {
  // Calculer la différence entre la date actuelle et la date d'expiration
  const timeRemaining = expirationDate - Date.now();

  // Fonction pour formater le temps restant
  const formatTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h2>Offre expirera dans :</h2>
      <CountdownCircleTimer
        isPlaying={true}
        duration={timeRemaining / 1000} // Convertir le temps restant en secondes
        colors={[['#FF4500', 0.33], ['#FF8C00', 0.33], ['#008000', 0.33]]} // Couleurs du cercle du compte à rebours
        onComplete={() => console.log('Le compte à rebours est terminé')}
      >
        {formatTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default CountdownTimer;
