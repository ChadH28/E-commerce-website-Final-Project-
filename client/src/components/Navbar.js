import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

function Navbar() {
    
    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
    };

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;

    return (
        <nav className='navbar-fixed'>
            <div className="nav-wrapper">
                <div className="brand-logo left" >
                    <button className="btn-flat" onClick={openMenu}>&#9776;</button>
                    <Link to='/'>Fineprint</Link>
                </div>
                <ul id="nav-mobile" className="right">
                {   
                    userInfo ? <li>{userInfo.name}</li>
                    :
                    <li><Link to='/signin'><i className="material-icons">account_circle</i></Link></li>
                }
                    <li><Link to='/'><i className="material-icons">shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar