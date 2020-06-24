import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AboutMe from "./pages/AboutMe/index";
import Office from "./pages/Office/index";
import Main from "./pages/Main/index";
import Contact from "./pages/Contact/index";
import Blog from "./pages/Blog/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/sobre" component={AboutMe} />
        <Route path="/ambiente" component={Office} />
        <Route path="/contato" component={Contact} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </BrowserRouter>
  );
}
