import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <>

            <header class="jumbotron">
                <div class="bg">
                    <nav class="navbar  navbar-expand-lg navbar-dark navbar-custom">
                        <div class="container">
                            <a class="logo navbar-brand" href=""><span>Magboffin </span></a>

                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                                <span class="navbar-toggler-icon"></span></button>
                            <div class="collapse navbar-collapse"></div>
                            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul class="navbar-nav pull-sm-left text-center">
                                    <li className="nav-item">
                                        <NavLink exact activeClassName="nav" className="nav-link text-light" to="/LOGIN">LOGIN<span class="sr-only">(current)</span> </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName="nav" className="nav-link text-light" to="/SIGNUP">SIGN UP<span class="sr-only">(current)</span> </NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#cta">SUBSCRIBE</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div class="container firstcontainer ">
                        <div class="row row-header">
                            <div class="col-12 col-sm-6 bg-ass-1">
                                <h1 class="AI01" >ARTIFICAL</h1>
                                <p class="AI02">INTELLIGENCE</p>
                                <p class="desc">Let's dive into <br></br>the world of <span class="p-color">creativity.s</span> </p>

                                <a class=" get_started rounded-pill btn btn-primary" href="#" role="button">GET STARTED</a>

                            </div>
                            <div class="col-12 col-sm-6 bg-face-1"></div>
                        </div>
                    </div>
                </div>


            </header>
        </>
    );
};

export default Header;
