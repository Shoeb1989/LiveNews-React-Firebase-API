import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className ="text-4xl font-Poppins " >This is Home</h2>
        </div>
    );
};

export default Home;