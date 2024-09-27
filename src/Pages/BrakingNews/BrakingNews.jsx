import React from 'react';
import Marquee from "react-fast-marquee";

const BrakingNews = () => {
    return (
        <div className='flex border border-spacing-2 mt-4 ' >
            <button className='btn btn-secondary' >
                Braking News
            </button>
            <Marquee pauseOnHover={true} speed={80} >
               Braking News Comming Soon.... <span className='text-blue-950 font-bold' >Login to Read Full news</span>
            </Marquee>
        </div>
    );
};

export default BrakingNews;