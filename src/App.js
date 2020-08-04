import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from "./Banner";
import Work from "./Work";
import Contact from "./Contact";
import About from "./About/About";
import Blog from "./Blog";
import ERROR from "./404";
import ProjectInfo from "./ProjectInfo";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>
            <Banner />
            <About />
            <Work />
            <Blog />
            <Contact />
          </div>
        </Route>
        <Route path="/project/:projectId" children={<ProjectInfo />} />
        <Route component={ERROR} />
      </Switch>
    </Router>
  );
}

export default App;
