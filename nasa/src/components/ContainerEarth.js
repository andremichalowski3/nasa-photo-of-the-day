import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CardEarth from './CardEarth';

function ContainerEarth() {
    const [earthPhotoData, setEarthPhotoData] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=dUFMqfbga9SRJHZ6awhed0VzvUbJ7NZ3o2izmDyR')
            .then(response => {
                // console.log(response)
                const earthPhotos = response.data;
                // console.log('response', earthPhotos);
                setEarthPhotoData(earthPhotos);
            })
            .catch(err => 
                console.log('Error 404:', err)
            );
    }, []);

    return (
        <div>
            <h1>NASA PHOTO OF THE DAY</h1>
            <CardEarth earthPhotoData={earthPhotoData} />

        </div>
    )
}
export default ContainerEarth;