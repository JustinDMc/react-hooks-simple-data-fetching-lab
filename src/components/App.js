import React, {useEffect, useState} from 'react'

export default function App() {

    const [dogImage, setDogImage] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => res.json())
        .then(dogData => {
            setDogImage(dogData.message);
            setIsLoaded(true);
        });
    }, [])

    if (!isLoaded) return <p>Loading...</p>

    return (
        <div>
            <img alt="A Random Dog" src={dogImage}/>
        </div>
    )
}
