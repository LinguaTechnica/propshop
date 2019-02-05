import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/partials/privateRoute/PrivateRoute"
import HomePage from "./components/pages/home/HomePage"
import LoginPage from "./components/pages/login/LoginPage"

const App = () => (
  <Router>
    <div>
      <Route path="/login" component={LoginPage} />
      <PrivateRoute path="/home" component={HomePage} />
    </div>
  </Router>
);

export default App;
