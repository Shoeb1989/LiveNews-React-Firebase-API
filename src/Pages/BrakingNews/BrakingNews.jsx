import React from 'react';
import Marquee from "react-fast-marquee";
import img from '../../pictures/braking.png'

const BrakingNews = () => {
    return (
        <div className='flex border border-spacing-2 mt-4 ' >
            <button className='btn btn-secondary' >
            <img className='mx-auto object-cover h-10 w-40 bg-indigo-600 bg-opacity-0 ' src={img} alt="" />
            </button>
            <Marquee pauseOnHover={true} speed={80} >
               Braking News Comming Soon.... <span className='text-blue-950 font-bold' >Login to Read Full news</span>
            </Marquee>
        </div>
    );
};

export default BrakingNews;