import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

function About() {
    return <>
        <Navbar />
        <div className='max-w-screen-xl mx-auto'>
            <img width={40} alt='Company_logo' src='/icon-192x192.png' />

            About Page
            <h1>
                <Link to="/">Home</Link>
            </h1>
        </div>
    </>

}

export default About