import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import HotelInformation from './pages/HotelInformation/HotelInformation';
import Checkout from './pages/Checkout/Checkout';
import SearchContent from './pages/SearchContent/SearchContent';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div>
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Home /> */}
      {/* <HotelInformation/> */}
      {/* <Checkout/> */}
      {/* <SearchContent/> */}
      <Profile/>
    </div>
  );
}

export default App;
