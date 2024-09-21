import React from 'react';
import logo from "../../pictures/logo.png"
import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center' >
            <img className='mx-auto' src={logo} alt="" />
            <p>Jounalism Without Fear or favor</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;