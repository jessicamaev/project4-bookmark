import React from "react";
import { Route } from "react-router-dom";
import About from './pages/About';

function Routes() {
    return (

        <Route path="/about" component={About} />

    );
}


export default Routes;
