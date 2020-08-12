import React from 'react';

function CardEarth({ earthPhotoData }) {
  return (
    <div>
      <h2>{earthPhotoData.id}</h2>
      <h2>{earthPhotoData.name}</h2>      
      <h2>{earthPhotoData.estimated_diameter.feet.estimated_diameter_min}</h2>
    </div>
  );
}
export default CardEarth;