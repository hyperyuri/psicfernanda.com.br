import React from "react";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";

import AboutMe from "./pages/AboutMe/";
import Office from "./pages/Office/";
import Contact from "./pages/Contact/";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <HashRouter>
          <Route path="/" exact component={AboutMe} />
          <Route path="/consultorio" component={Office} />
          <Route path="/contato" component={Contact} />
          {/* <Route path="/blog" component={Blog} /> */}
        </HashRouter>
      </Switch>
    </BrowserRouter>
  );
}
