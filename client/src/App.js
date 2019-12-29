import React from "react";
import Search from "./pages/search";
import Saved from "./pages/save";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar
          homeTitle={"GOOGLE BOOKS"}
          savedLink={"/saved"}
          homeLink={"/"}
          searchLink={"/"}
        />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
