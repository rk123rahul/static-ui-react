import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css"
import { Route, Switch } from "react-router-dom";
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"


const App = () => {
  return (
       <>
     
      
      <Switch>
               <Route exact path="/" component={Home}/>
               
               <Route exact path="/LOGIN" component={Login}/>
               <Route  exact path="/SIGNUP" component={Signup}/>
               {/* <Route  exact path="/SUBSCRIBE" component={Subscribe}/> */}
         
        </Switch>
      
       </>
  );
};

export default App;
