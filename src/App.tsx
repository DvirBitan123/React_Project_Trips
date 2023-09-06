import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Registration } from './components/UserRegistration';
import { Login } from './components/UserLogin';
import { Trips } from './components/Trips';
import { TripDetail } from './components/TripDetail';
import { NewTripForm } from './components/NewTripForm';
import { UpdateTripForm } from './components/UpdateTripForm';

function App() {

  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Trips" element={<Trips/>} />
      <Route path="/TripDetail/:id" element={<TripDetail/>} />
      <Route path="/UserRegistration" element={<Registration/>} />
      <Route path="/UserLogin" element={<Login/>} />
      <Route path="/NewTripForm" element={<NewTripForm/>} />
      <Route path="/UpdateTripForm" element={<UpdateTripForm/>} />
    </Routes>
  </Router>
  )
}

export default App

  
