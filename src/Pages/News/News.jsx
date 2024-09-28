import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import RightSideNav from '../RightSideNav/RightSideNav';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../../assets/COMPO/AuthProvider/AuthProvider';




const News = () => {

    


     const {id} = useParams();
     

     const {News} = useContext(AuthContext);

     const singleNews = News?.find(News => News._id === id);
      console.log(singleNews);
 
    const {title} = singleNews; 
     






      


    


   


    
    

     
 

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>




            <div className='grid md:grid-cols-4'>
                <div className='col-span-3' >

                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src=''
                                />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>










                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;