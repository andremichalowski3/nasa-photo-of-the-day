import React from 'react';

import { Alert } from 'reactstrap';
import { Badge } from 'reactstrap';


function CardEarth({ earthPhotoData }) {
  return (
    <div>
<Alert color="primary">
  This is a Reacstrap "Alert" component!
</Alert>
<Badge color="success" pill>Success</Badge>
<Badge color="danger" pill>Danger</Badge>
<Badge color="warning" pill>Warning</Badge>

      <img src={earthPhotoData.hdurl} alt='nasa space'/>
      <h1>{earthPhotoData.title}</h1>
      <h3>Photo by: {earthPhotoData.copyright}</h3>
      <h3>{earthPhotoData.date}</h3>
      <p>{earthPhotoData.explanation}</p>
    </div>
  );
}
export default CardEarth;