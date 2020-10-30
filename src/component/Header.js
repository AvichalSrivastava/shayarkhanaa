import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './common.css';
class Header extends Component
{
    render()
    {
        return(
            <div className="header">
                <header className="tm-header" id="tm-header">
                <div className="tm-header-wrapper">
                    <button className="navbar-toggler" type="button" aria-label="Toggle navigation"  data-toggle="collapse" data-target="/navbarSupportedContent"  style={{backgroundColor: 'black'}}>
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="tm-site-header">
                        <div className="mb-3 mx-auto tm-site-logo"><i className="fas fa-times fa-2x"></i></div>            
                        <h1 className="text-center">Shayar khana</h1>
                    </div>
                    <nav className="tm-nav" id="tm-nav">            
                        <ul>
                            <Link to="/"  className="navBarStyle">
                                <li className="tm-nav-item active"><a className="tm-nav-link ">
                                    <i className="fas fa-home"></i>
                                    Home
                                </a></li>
                            </Link>
                            <Link to="AboutUs" className="navBarStyle">
                                <li className="tm-nav-item active"><a className="tm-nav-link ">
                                    <i className="fas fa-users"></i>
                                    About Me
                                </a></li>
                            </Link >
                            <Link to="ContactUs" className="navBarStyle">
                                <li className="tm-nav-item active"><a className="tm-nav-link ">
                                    <i className="far fa-comments"></i>
                                    Contact Us
                                </a></li>
                            </Link>
                        </ul>
                    </nav>
                    <div className="tm-mb-65">
                        <a rel="nofollow" href="https://fb.com/templatemo" className="tm-social-link">
                            <i className="fab fa-facebook tm-social-icon"></i>
                        </a>
                        <a href="https://twitter.com" className="tm-social-link">
                            <i className="fab fa-twitter tm-social-icon"></i>
                        </a>
                        <a href="https://instagram.com" className="tm-social-link">
                            <i className="fab fa-instagram tm-social-icon"></i>
                        </a>
                        <a href="https://linkedin.com" className="tm-social-link">
                            <i className="fab fa-linkedin tm-social-icon"></i>
                        </a>
                    </div>
                    <p className="tm-mb-80 pr-5 text-white">
                        <a href="http://www.avichalsrivastava.in">Developed by ZigZager</a>
                    </p>
                </div>
            </header>
            </div>
            );
    }
}
export default Header;