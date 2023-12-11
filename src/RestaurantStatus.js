// RestaurantStatus.js
import React, { useState, useEffect, useRef } from 'react';

const RestaurantStatus = () => {
  const [isOpen, setIsOpen] = useState(true);
  const statusRef = useRef(isOpen);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Simuler le changement de statut du restaurant (ouvert/fermé)
      const newStatus = !statusRef.current;
      statusRef.current = newStatus;
      setIsOpen(newStatus);
    }, 5000); // Changer toutes les 5 secondes (à ajuster selon vos besoins)

    // Nettoyage du setInterval lors du démontage du composant
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Statut du restaurant :</h2>
      <p>Le restaurant est {isOpen ? 'ouvert' : 'fermé'}.</p>
    </div>
  );
};

export default RestaurantStatus;
