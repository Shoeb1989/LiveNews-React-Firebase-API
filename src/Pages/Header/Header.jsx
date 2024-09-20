import React from 'react';
import logo from "../../pictures/logo.png"
import moment from 'moment';


const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <p>Jounalism Without Fear or favor</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;