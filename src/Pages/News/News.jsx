import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import RightSideNav from '../RightSideNav/RightSideNav';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../../assets/COMPO/AuthProvider/AuthProvider';




const News = () => {

    
    const [singleNewsData,setSingleNewsData] = useState({})

     const {id} = useParams();
     const news = useLoaderData();
     

     

     useEffect(()=>{
        const singleNews = news.find(data => data._id === id);
        setSingleNewsData(singleNews)
    },[news,id])
 
    const { thumbnail_url, details, author, rating, title, _id, total_view } =
      singleNewsData || {};
    const date = new Date(author?.published_date);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });






      


    


   


    
    

     
 

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>




            <div className='grid md:grid-cols-4'>
                <div className='col-span-3' >

                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src={thumbnail_url}
                                />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            
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