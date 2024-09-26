import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Register = () => {

    const handleRegister = e => {

        e.preventDefault();

        console.log(e.currentTarget)

        const form = new FormData(e.currentTarget);

        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')

        console.log(email, password, name, photo);



    }





    return (
        <div>
            <Navbar></Navbar>

            <div className="hero bg-base-400 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="">
                    <p className='text-4xl' >Please Register</p>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input name='photo' type="text" placeholder="Photo Url" className="input input-bordered" required />
                            </div>
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
                            Already have an account? <Link className='text-blue-600' to='/login' >Login</Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;