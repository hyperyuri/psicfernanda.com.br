import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AboutMe from "./pages/AboutMe/";
import Office from "./pages/Office/";
import Contact from "./pages/Contact/";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AboutMe} />
        <Route path="/consultorio" exact component={Office} />
        <Route path="/contato" exact component={Contact} />
        {/* <Route path="/blog" component={Blog} /> */}
      </Switch>
    </BrowserRouter>
  );
}
