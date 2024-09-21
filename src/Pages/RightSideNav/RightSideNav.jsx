import React from 'react';
import Qzone1 from '../../pictures/qZone1.png'
import Qzone2 from '../../pictures/qZone2.png'
import Qzone3 from '../../pictures/qZone3.png'
import {FaGoogle, FaGithub,FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-4 mb-6  ' >
                <h2 className="text 3xl">Login With</h2>
                <button className="btn btn-outline w-full ">
                    <FaGoogle></FaGoogle>
                    Loggin With Google
                </button>
                <button className="btn btn-outline w-full ">
                    <FaGithub></FaGithub>
                    Loggin With Github
                </button>
            </div>
            <div className='p-4  mb-6 ' >
                <h2 className="text 3xl mb-4 ">Find Us On</h2>
                <a className='flex p-4 text-lg items-center border rounded-t-lg ' href="">
                    <FaFacebook className='mr-3' ></FaFacebook>
                    Facebook
                </a>
                <a className='flex p-4 text-lg items-center border-x ' href="">
                    <FaTwitter className='mr-2' ></FaTwitter>
                    Twitter
                </a>
                <a className='flex p-4 text-lg items-center border rounded-b-lg ' href="">
                    <FaInstagram className='mr-2' ></FaInstagram>
                    Instagram
                </a>
            </div>
            
            <div className='p-4  mb-6 border border-spacing-10 back bg-orange-200 ' >
                <h2 className="text 3xl mb-4 ">Q Zone</h2>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
                
            </div>
        </div>
    );
};

export default RightSideNav;