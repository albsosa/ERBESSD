import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
const Header = () => {
    return ( 
        <header>
            <Link to={'/'}>
                <img className="logo" src="../img/logo.png" />
            </Link>
        </header>
     );
}
 
export default Header; 