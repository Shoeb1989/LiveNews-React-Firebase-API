import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = e => {

        e.preventDefault();

        console.log(e.currentTarget)

        const form = new FormData(e.currentTarget);

        console.log(form.get('email'));
     


    }




    return (
        <div>
            <Navbar></Navbar>

            <div className="hero bg-base-200 min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                
                    <div className="">
                    <p className='text-4xl mr-4' >Please Login</p>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <p className='flext center' >
                            Don't have account ? Please <Link className='text-blue-600' to='/register' >Register</Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;