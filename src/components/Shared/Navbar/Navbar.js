import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-md fixed navbar-light bg-white shadow-sm">
            <div class="container">
                <Link class="navbar-brand" to="/">Doctor's <strong>Portal</strong> </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link mr-3" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-3" to="/">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-3" to="/">Dental Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-3" to="/">Reviews</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-3" to="/">Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-3" to="/">Contact Us</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    );
};

export default Navbar;