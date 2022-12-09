import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import Auth from '../../utils/Auth';

function LoggedInNavbar() {
    const [expandNavBar, setExpandNavBar] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setExpandNavBar(false)
    }, ([location]));

    return (
        <div className='navbar' id={expandNavBar ? 'open' : 'close'}>
            <div className='toggleButton'>
                <button onClick={() => { setExpandNavBar((prev) => !prev); }}> < ReorderIcon /> </button>
            </div>
            <div className='links'>
                <Link to='/dashboard'> Dahsboard </Link>
                <Link to='/savedrecipes'> Recipes </Link>
                <Link to='/profile'> Profile </Link>
                <Link to='/' onClick={Auth.logout}> Logout </Link>
            </div>
        </div>
    );
}

export default LoggedInNavbar;