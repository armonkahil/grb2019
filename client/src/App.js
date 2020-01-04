import React from "react";
import Search from "./pages/search";
import Saved from "./pages/save";
import NoMatch from "./pages/nomatch";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="*" component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
