import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css"
import Header from "./Header"
import Middlecontainer from "./Middlecontainer"
import Middlecontainer2 from "./Middlecontainer2"
import Middlecontainer3 from "./Middlecontainer3"
import  Footer from "./Footer"


const Home = () => {
  return (
       <>
     
       <Header></Header>
       <Middlecontainer></Middlecontainer>
       <Middlecontainer2></Middlecontainer2>
       <Middlecontainer3></Middlecontainer3>
       <Footer></Footer>
      
       </>
  );
};

export default Home;
