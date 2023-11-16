import React, {useState, useEffect}from "react";
import './Header.css';
import logo from '../../assets/logo-no-background.png'
import useMobileHeader from '../../hooks/useMobileHeader';

import { motion } from "framer-motion";

const Header = () => {
    const isMobile = useMobileHeader();
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [activePage, setActivePage] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const setActiveStyle = (string) => {
        string = (string === '/') ? 'home' : string.slice(1);
        const link = document.getElementById(`header-${string}`);
        if (link) { link.className = 'header-active'; }
    }

    const mobileAnimationVariantReturner = (index) => {
        let delayIndex = index * 0.125;

        const pageArray = ['/', '/about', '/services', '/staff', '/contact'];

        //Apply a different animation to the active page!
        if (activePage === pageArray[index-1]) {
            return { hidden: {opacity: 1, x:'-50px', }, visible: { x: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.1, bounce: 0.4, type:"spring" } }}
        } 

        return {hidden: { opacity: 0,x:'-50px' },
        visible: { x: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5, delay:delayIndex, bounce: 0.4, type:"spring" } }};
        
        
    }

    useEffect(() => {
        console.log('render');
        if (activePage===null) {
            setActivePage(window.location.pathname)
            setActiveStyle(window.location.pathname);
        }

        if (isMenuOpen) {
            setActiveStyle(window.location.pathname);
        }
    });



    return (
        <header className="header-header p-4">
            { isMobile 
            ?(
                // Render side menu for mobile view
                <div className="mobile-header flex justify-between items-center">
                    <img className="header-logo logo-mobile" src={ logo }></img>
                    {/* Add toggle button or icon to show/hide the menu */}
                    <button className="menu-toggle cursor-pointer text-5xl" onClick={toggleMenu}>
                    {isMenuOpen ? '' : '☰'}
                    </button>
                    {isMenuOpen && (
                    <div className="mobile-menu fixed top-0 right-0 h-full w-48 p-4 flex flex-col items-end">
                        <button className="menu-toggle cursor-pointer text-5xl" onClick={toggleMenu}>
                            {isMenuOpen ? '✖' : '☰'}
                        </button>
                        
                        <ul>
                            <motion.li initial="hidden" whileInView="visible" variants={mobileAnimationVariantReturner(1)} viewport={{ once: true }}>
                                <a href="/" id="header-home">Home</a>
                            </motion.li>
                            <motion.li initial="hidden" whileInView="visible" variants={mobileAnimationVariantReturner(2)} viewport={{ once: true }}>
                                <a href="/about" id="header-about">About</a>
                            </motion.li>
                            <motion.li initial="hidden" whileInView="visible" variants={mobileAnimationVariantReturner(3)} viewport={{ once: true }}>
                                <a href="/services" id="header-services">Services</a>
                            </motion.li>
                            <motion.li initial="hidden" whileInView="visible" variants={mobileAnimationVariantReturner(4)} viewport={{ once: true }}>
                                <a href="/staff" id="header-staff">Staff</a>
                            </motion.li>
                            <motion.li initial="hidden" whileInView="visible" variants={mobileAnimationVariantReturner(5)} viewport={{ once: true }}>
                                <a href="/contact" id="header-contact">Contact</a>
                            </motion.li>
                        {/* Additional menu items can be added here */}
                        </ul>
                    </div>
                    )}
                </div>
            )
            
            


            :(
                <div className="header flex justify-evenly items-center">
                    <img className="header-logo" src={ logo }></img>
                    <nav className="header-navbar">
                        <ul className="list-none flex gap-4">
                            <motion.li initial="hidden" whileInView="visible" variants={mobileAnimationVariantReturner(1)} viewport={{ once: true }}>
                                <a href="/" id="header-home">Home</a>
                            </motion.li>
                            <motion.li initial="hidden" whileInView="visible" variants={mobileAnimationVariantReturner(2)} viewport={{ once: true }}>
                                <a href="/about" id="header-about">About</a>
                            </motion.li>
                            <motion.li initial="hidden" whileInView="visible" variants={mobileAnimationVariantReturner(3)} viewport={{ once: true }}>
                                <a href="/services" id="header-services">Services</a>
                            </motion.li>
                            <motion.li initial="hidden" whileInView="visible" variants={mobileAnimationVariantReturner(4)} viewport={{ once: true }}>
                                <a href="/staff" id="header-staff">Staff</a>
                            </motion.li>
                            <motion.li initial="hidden" whileInView="visible" variants={mobileAnimationVariantReturner(5)} viewport={{ once: true }}>
                                <a href="/contact" id="header-contact">Contact</a>
                            </motion.li>
                        </ul>
                    </nav>
                </div>
            )
            }

        </header>
    )
}

export default Header;