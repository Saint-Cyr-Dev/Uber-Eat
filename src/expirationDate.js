import React from 'react';
import CountdownTimer from './CountdownTimer';

const VotreComposantPrincipal = () => {
  // Remplacez expirationDate par la date d'expiration réelle de votre offre
  const expirationDate = new Date('2023-12-31T23:59:59').getTime();

  return (
    <div>
      {/* ... (le reste de votre composant principal) */}
      <CountdownTimer expirationDate={expirationDate} />
    </div>
  );
};

export default VotreComposantPrincipal;
