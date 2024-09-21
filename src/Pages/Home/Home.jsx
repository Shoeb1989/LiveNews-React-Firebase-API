import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import BrakingNews from '../BrakingNews/BrakingNews';
import RightSideNav from '../RightSideNav/RightSideNav';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Home = () => {
    return (
        <div >
            <Header></Header>

            <BrakingNews></BrakingNews>
            <Navbar></Navbar>
            

            <div className=' grid grid-cols-1  md:grid-cols-4 gap-5' >

                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='lg:col-span-2' >
                    <h2 className="text-4xl">News comming soon</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default Home;