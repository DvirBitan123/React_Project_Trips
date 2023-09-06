import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState} from 'react';

export function Trips() {
    const [trips, setTrips] = useState([]);
    useEffect(() => {
        const fetchTrips = () => {
            fetch('http://localhost:3000/api/trips/')
            .then(data => data.json())
            .then(allTrips => {
                setTrips(allTrips);
            })
        }
        fetchTrips();
    } ,[])
    const cardsArray = [];
    for (let trip of trips) {
        const {destination, endDate, id, image, name, startDate} = trip;

        let card = <Link to={`/TripDetail/${id}`}><button type='button'>
                    <div>
                        <div>{id}</div>
                        <div>{name}</div>
                        <div>{destination}</div>
                        <div>{startDate}</div>
                        <div>{endDate}</div>
                        <img src={image} width="300" height="200"></img>
                        <br></br>
                        <button type='button'>delete trip</button>
                        <br></br>
                    </div>
                    </button></Link>
                    
        cardsArray.push(card)
    }
    
    return (
        <>
        <div>Trips</div>
        <br></br>
        <Link to="/"><button type='button'>Home</button></Link>
        <br></br>
        <Link to="/NewTripForm"><button type='button'>Add New Trip</button></Link>
        <br></br>
        <div>{cardsArray}</div>
        </>
    )
}