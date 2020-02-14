import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import NotFound from "./notfound.jsx";
import HomePage from "./homepage.jsx";
import Navbar from "./navbar.jsx";
import Support from "./support.jsx";
import Search from "./search.jsx";
import Users from "./user.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "../../public/style.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/support" component={Support} />
            <Route path="/search" component={Search} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/user" component={Users} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
