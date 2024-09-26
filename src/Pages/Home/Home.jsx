import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import BrakingNews from '../BrakingNews/BrakingNews';
import RightSideNav from '../RightSideNav/RightSideNav';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { useLoaderData } from 'react-router-dom';
import Newscard from './Newscard';

const Home = () => {

    const news = useLoaderData()
    console.log(news);


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
                    {
                        news.map(anews => <Newscard></Newscard> )
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default Home;