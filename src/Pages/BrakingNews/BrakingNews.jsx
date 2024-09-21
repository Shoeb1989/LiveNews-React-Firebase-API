import React from 'react';
import Marquee from "react-fast-marquee";

const BrakingNews = () => {
    return (
        <div className='flex' >
            <button className='btn btn-secondary' >
                Braking News
            </button>
            <Marquee pauseOnHover={true} speed={80} >
               Braking News Comming Soon, Stay Alart...
            </Marquee>
        </div>
    );
};

export default BrakingNews;