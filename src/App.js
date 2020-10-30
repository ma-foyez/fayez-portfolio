import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Components/Home/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
       <Router>
         <Switch>
           <Route exact path="/">
             <Home/>
           </Route>
           <Route path="/home">
             <Home/>
           </Route>
           <Route path="*">
             <NotFound></NotFound>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
