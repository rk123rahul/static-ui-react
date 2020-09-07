import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./login.css"



const Signup = () => {
  return (
       <>
     
     <nav class="navbar  navbar-expand-lg navbar-dark logbg-nav navbar-custom fixed-top">
        <div class="container">
            <a class="logo navbar-brand" href=""><span>Magboffin </span></a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse"></div>   
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav pull-sm-left text-center">
                    <li class="nav-item">
                    <a class="nav-link" href="#footer">LOG IN</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#pricing">SIGN UP</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#cta">SUBSCRIBE</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="row row-gap">
           <div class="col-12">
            <div class='login' id='login'>
                <div class='head'>
                <h1 class="logo02">Magboffin</h1>
                </div>
                <p class='msg'>Welcome back</p>
                <div class='form'>
                <form>
                    <input type="email" placeholder='abc@gmail.com' class='text' id='email' required></input><br></br>    
                    <input type="text" placeholder='Username' class='text' id='username' required></input><br></br>
                    <input type="password" placeholder='••••••••••••••' class='password'></input><br></br>
                    <a href="#" class='btn-signup' id='do-signup'>Sign Up</a>
                    <a href="#" class='forgot'></a>
                </form>
                </div>
            </div>
           </div>
        </div>
    </div>
   

      <footer class="lastcontainer">
        <div class=" bg-footer">
            <div class="row row-content">
                <div class="col-12 text-center">
                    <div class="logo03">
                        <h1 class="logo02">Magboffin</h1>
                    </div>
                    
                </div>
            </div>
            <div class="row"> 
                <div class="col-12 col-sm-6 order-sm-last text-center">
                    <div class="">
                        <a href="#"><i class="social-icon fab fa-facebook-f "></i></a>
                        <a href="#"><i class="social-icon fab fa-twitter"></i></a>
                        <a href="#"><i class="social-icon fab fa-instagram"></i></a>
                        <a href="#"><i class="social-icon fas fa-envelope"></i></a>
                    </div>
                </div>
                <div class="col-12 col-sm-6"></div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-6 order-sm-last">
                    <div class="text-right">
                        <h4>Contavt:</h4>
                        <address>
                            (+91) 9871105998<br></br>
                            contact@magboffin.com<br></br>
                            Gurugram, Haryana, India - 122005 
                        </address>
                    </div>
                </div>
                <div class="col-12 col-sm-6"></div>
            </div>
            <div class="row row-content">
                <div class="col-12 text-center">
                    <span class="copyright">© 2020 Magboffin. All rights reserved.</span>
                </div>
            </div>
        </div>
    </footer>
      
       </>
  );
};

export default Signup;
