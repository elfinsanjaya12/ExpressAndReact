import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NavbarGama from "./components/organisms/AdminNavbar";
import Home from "./pages/Home";
import Produk from "./pages/produks";
import User from "./pages/users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarGama />
        <br />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/produk" component={Produk} />
            <Route exact path="/users" component={User} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
