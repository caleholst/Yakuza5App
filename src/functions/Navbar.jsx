import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/kiryu">Kiryu</Link></li>
                <li><Link to="/saejima">Saejima</Link></li>
                <li><Link to="/haruka">Haruka</Link></li>
                <li><Link to="/akiyama">Akiyama</Link></li>
                <li><Link to="/shinada">Shinada</Link></li>
                <li><Link to="/allCharacters">All Characters</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
