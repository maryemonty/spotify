import { Link } from 'react-router-dom'
import logo from '../assets/Spotify-Logo.wine.svg'
import { FaHome, FaBookOpen } from 'react-icons/fa';
import { useState } from "react";

const SideBar = () => {

    return(
        <div className="sidebar d-flex flex-column align-items-start">
            <Link to="/"><img src={logo} alt="logo spotify" /></Link>
            <div className='d-flex flex-column ms-4'>
                <Link to="/"><FaHome className='icon'/> Home</Link>
                <Link to="/" className='mt-3'><FaBookOpen className='icon'/> Your Library</Link>
            </div>
            <Link to='/search'>
                <p>Search</p>
            </Link>
        </div>
    )
}

export default SideBar