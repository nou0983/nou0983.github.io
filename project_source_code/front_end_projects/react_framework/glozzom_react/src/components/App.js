import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Blog from "./Blog";
import Contact from "./Contact";
import NavbarPage from "./Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavbarPage />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/services" exact component={Services} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
