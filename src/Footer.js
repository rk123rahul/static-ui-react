import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css"


const Footer = () => {
  return (
       <>
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

export default Footer;
