import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
interface Props {
    setPage: React.Dispatch<React.SetStateAction<string>>
}

interface PutOptions {
    URL: string
    Method: string
}

export function UpdateTripForm() {

    return (
        <>
        <Link to="/Trips"><button type="button">back to all trips</button></Link>
        <form>
            <label for="id">ID  </label>
            <input type="text" id="id" maxLength={3} />
            <br></br>
            <label for='name'>name  </label>
            <input type="text" id="name" maxLength={30}/>
            <br></br>
            <label for='destinition'>destinition  </label>
            <input type="text" id="destinition" maxLength={40}/>
            <br></br>
            <label for='startDate'>start date  </label>
            <input type="date" id="startDate"/>
            <br></br>
            <label for='endDate'>end date  </label>
            <input type="date" id="endDate"/>
            <br></br>
            <label for='description'>description  </label>
            <input type="text" id="description" maxLength={100}/>
            <br></br>
            <label for='price'>price  </label>
            <input type="text" id="price" maxLength={10}/>
            <br></br>
            <label for='imgSrc'>image link  </label>
            <input type="text" id="imgSrc"/>
            <br></br>
            <label for='activities'>activities  </label>
            <input type="text" id="activities" maxLength={100}/>
            <br></br>
            <button type="button">Update Trip</button>
        </form>
        </>
    )
}