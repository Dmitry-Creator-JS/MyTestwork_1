import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to='/posts'> articles </NavLink>
            <NavLink to='/users'> users </NavLink>
            <NavLink to='/photos'> photos </NavLink>
        </div>
    );
};

export default Navbar;