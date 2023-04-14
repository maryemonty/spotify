import { Link } from 'react-router-dom'
import logo from '../assets/Spotify-Logo.wine.svg'
import { FaHome, FaBookOpen } from 'react-icons/fa';

function SideBar(){
    return(
        <div className="sidebar d-flex flex-column align-items-start">
            <Link to="/"><img src={logo} alt="logo spotify" /></Link>
            <div className='d-flex flex-column ms-4'>
                <Link to="/"><FaHome className='icon'/> Home</Link>
                <Link to="/" className='mt-3'><FaBookOpen className='icon'/> Your Library</Link>
            </div>
            <div className='d-flex ms-4'>
                <input className='mt-3 input' type='text' placeholder='Search' />
                <button className='btn btn-dark button'>Go</button>
            </div>
        </div>
    )
}

export default SideBar