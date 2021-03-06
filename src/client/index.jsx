import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import NotFound from "./common/notfound.jsx";
import HomePage from "./common/homepage.jsx";
import Navbar from "./common/navbar.jsx";
import Support from "./common/support.jsx";
import Media from "./media.jsx";
import Users from "./user.jsx";
import Profile from "./profile.jsx";
import NewUser from "./newuser.jsx";
import NewPost from "./newpost.jsx";
import Register from "./register.jsx";
import Login from "./login.jsx";
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
            <Route path="/not-found" component={NotFound} />
            <Route path="/user" component={Users} />
            <Route path="/media" component={Media} />
            <Route path="/newuser" component={NewUser} />
            <Route path="/newpost" component={NewPost} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
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
