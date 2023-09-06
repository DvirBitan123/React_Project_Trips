import { useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

interface Trip {
    destination: string
    endDate: string
    id: string
    image: string
    name: string
    startDate: string
    description: string
    price: string
    activities: string[]
}

export function TripDetail() {
    const { id } = useParams();
    const [trip, setTrip] = useState<Trip>({
        destination: 'hay',
        endDate: '12/12/12',
        id: '1',
        image: 'dhjjdsfhdsjfv',
        name: 'dvir',
        startDate: '12.121.11',
        description: 'blanablablaka',
        price: '99999999999',
        activities: ['hay', 'bye', 'shay', 'day'] 
    });
    useEffect(() => {
            const fetchOneTrip = () => {
                fetch(`http://localhost:3000/api/trips/${id}`)
                .then(data => data.json())
                .then(myTrip => setTrip(myTrip))
            }
            fetchOneTrip()
        }, [])
        const {destination, endDate, image, name, startDate, description, price, activities} = trip;
        const allActs =  activities.join(" || ");        

        let card = 
                    <div>
                        <div>{id}</div>
                        <div>{name}</div>
                        <div>{destination}</div>
                        <div>{startDate}</div>
                        <div>{endDate}</div>
                        <div>{description}</div>
                        <div>price: {price}</div>
                        <div>{allActs}</div>
                        <img src={image} width="300" height="200"></img>
                        <br></br>
                    </div>

    return (
        <>
        <div>Trip Details</div>
        <br></br>
        <Link to="/Trips"><button type='button'>back to all trips</button></Link>
        <Link to="/UpdateTripForm"><button type='button'>update trip details</button></Link>
        <div>{card}</div>
        </>
    )
}