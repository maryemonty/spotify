import { Link } from 'react-router-dom'
import logo from '../assets/Spotify-Logo.wine.svg'
import { FaHome, FaBookOpen, FaSearch } from 'react-icons/fa';

const SideBar = () => {

    return(
        <div className="sidebar d-flex flex-column align-items-start">
            <Link to="/"><img src={logo} alt="logo spotify" /></Link>
            <div className='d-flex flex-column ms-4'>
                <Link to="/"><FaHome className='icon'/> Home</Link>
                <Link to='/search' className='mt-3'><FaSearch className='icon'/> Search</Link>
                <Link to="/" className='mt-3'><FaBookOpen className='icon'/> Your Library</Link>
            </div>
        </div>
    )
}

export default SideBar