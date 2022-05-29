import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from './components/Homepage'
import About from './pages/About';

function Routes() {
    return (
        //homepage -> homepage component -- (folders)
        <Switch>
            <Route path="/about" component={About} exact />
            <Route path="/" component={Homepage} />
        </Switch>

    );
}


export default Routes;
