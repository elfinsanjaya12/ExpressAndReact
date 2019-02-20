import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NavbarGama from "./components/organisms/AdminNavbar";
import Home from "./pages/Home";
import Product from "./pages/product";
import ProductCreate from "./pages/product/create";
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
						<Route exact path="/product" component={Product} />
						<Route exact path="/product/create" component={ProductCreate} />
						<Route exact path="/users" component={User} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
