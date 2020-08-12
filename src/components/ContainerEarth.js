import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CardEarth from './CardEarth';

function ContainerEarth() {
    const [earthPhotoData, setEarthPhotoData] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=51aeSquTD287pPb4wRI3lrSZmK3uW50H4gDCxEeg')
            .then(response => {
                console.log(response)
                const earthPhotos = response.data;
                console.log('response', earthPhotos);
                setEarthPhotoData(earthPhotos);
                // Testing 
                console.log(response.data.id)
                console.log(response.data.name)
                console.log(response.data.estimated_diameter.feet.estimated_diameter_min)

            })
            .catch(err => 
                console.log('Error 404:', err)
            );
    }, []);

    return (
        <div>
            <h1>Asteroid Data</h1>
            <CardEarth earthPhotoData={earthPhotoData} />

        </div>
    )
}
export default ContainerEarth;