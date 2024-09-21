import React from 'react';
import logo from "../../pictures/logo.png"
import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center mt-5 ' >
            <img className='mx-auto' src={logo} alt="" />
            <p className='mt-4' >Jounalism Without Fear or favor</p>
            <p className='text-xl mt-4 '>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;