import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
	render() {
		return (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item active">
					<Link className="nav-link" to="/">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/product">
						Produks
					</Link>
				</li>
			</ul>
		);
	}
}

export default Navigation;
