import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/UserAuthentication/Login";
import Register from "./components/UserAuthentication/Register";
import Home from "./components/UserAuthentication/Home";
import history from './components/UserAuthentication/history';


function App() {
  return (
    <Fragment>
      
      <BrowserRouter history={history}>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
