import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import NotFound from "./common/notfound.jsx";
import Reservation from "./common/reservation.jsx";
import HomePage from "./homepage.jsx";
import Navbar from "./navbar.jsx";
import Menu from "./menu.jsx";
import Login from "./login.jsx";
import Register from "./register.jsx";
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
            <Route path="/reservation" component={Reservation} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/menu" component={Menu} />
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
