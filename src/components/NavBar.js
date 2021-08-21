import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';

function Navbar() {
    return (
        <div>
            <ul className="navUl">
                
                <li><Link className="link" to="/welcome">HappyHour</Link></li>
                <li><Link className="link" to="/">Search</Link></li>
                <li><Link className="link" to="/info">More Info</Link></li>
                <li><Link className="link" to="/random">Surprise Me</Link></li>
                {/* </ul>li> <Link to={`/Favourites/`}>Ann's Profile</Link></li> */}
            </ul>
        </div>
    )
}

export default Navbar;