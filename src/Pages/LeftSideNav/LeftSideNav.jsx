import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [catagories, setcatagories] = useState([]);

    // for data load using useEffect

    useEffect(() => {
      fetch('categories.json')
      .then(res => res.json())   // convert data json
      .then(data => setcatagories(data))  // converting data in the setcatagory item
    } , [])





    return (
        <div className='space-y-7' >
            <h2>All Catagory</h2>
            {
                catagories.map(catagory => <Link 
                     className=' block ml-4 text-xl font-Poppins ' 
                      key={catagory.id} 
                      to={`category/${catagory.id}`}  // for going to inside the news need the ids
                       > 
                      {catagory.name} </Link>)
            }
        </div>
    );
};

export default LeftSideNav;