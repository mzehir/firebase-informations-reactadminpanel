import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from './clientFiles/navigation';
import FixedInformation from './clientFiles/fixedInformation';
import Home from './clientFiles/home';
import About from './clientFiles/about';
import Resume from './clientFiles/resume';
import Contact from './clientFiles/contact';

function App2() {
  return (
    <div className="container-fluid">
      <div className="row">
        <FixedInformation></FixedInformation>
        <Navigation></Navigation>

        <Router>
          <Switch>

            <Route path="/adminPaneli/homePage">
              <Home></Home>
            </Route>

            <Route path="/adminPaneli/aboutPage">
              <About></About>
            </Route>

            <Route path="/adminPaneli/resumePage">
              <Resume></Resume>
            </Route>

            <Route path="/adminPaneli/contactPage">
              <Contact></Contact>
            </Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App2;
