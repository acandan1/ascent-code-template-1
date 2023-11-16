import React from "react";

import logo from '../../assets/logo-no-background.png';

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer flex items-center justify-evenly overflow-hidden pb-10 pt-10 text-center gap-10 flex-col md:flex-row bg-yellow-300">
            <img src={logo} alt="logo" className="justify-center h-32"></img>
            <div className="footer-navigation flex flex-col gap-3">
                <h1 className="text-3xl text-red-500">Navigation</h1>
                <hr className="border-t-2 border-gray-500"></hr>

                <a className="footer-link" href="/">Home</a>
                <a className="footer-link" href="/about">About</a>
                <a className="footer-link" href="/services">Services</a>
                <a className="footer-link" href="/staff">Staff</a>
                <a className="footer-link" href="/contact">Contact</a>
            </div>
            <div className="footer-copyright flex items-center flex-col h-full justify-center">
                <p>© Copyright 2023, Atilay Candan</p>
                <p>All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer;