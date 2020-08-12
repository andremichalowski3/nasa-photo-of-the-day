import React from 'react';

function CardEarth({ earthPhotoData }) {
  return (
    <div>
      <img src={earthPhotoData.hdurl} alt='nasa space'/>
      <h1>{earthPhotoData.title}</h1>
      <h3>Photo by: {earthPhotoData.copyright}</h3>
      <h3>{earthPhotoData.date}</h3>
      <p>{earthPhotoData.explanation}</p>
    </div>
  );
}
export default CardEarth;