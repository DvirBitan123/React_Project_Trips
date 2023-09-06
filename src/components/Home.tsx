import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export function Home() {

    return (
    <>
        <Link to="/Trips"><button type='button'>All Trips</button></Link>
        <Link to="/UserRegistration"><button type='button'>Registration</button></Link>
        <Link to="/UserLogin"><button type='button'>Log In</button></Link>
    </>
    )
}