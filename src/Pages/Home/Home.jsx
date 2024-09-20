import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            

            <div className=' grid grid-cols-1  md:grid-cols-4 gap-5' >

                <div>
                    This left side nav
                </div>
                <div className='lg:col-span-2' >
                    <h2 className="text-4xl">News comming soon</h2>
                </div>
                <div>
                    this right side nav
                </div>

            </div>
        </div>
    );
};

export default Home;