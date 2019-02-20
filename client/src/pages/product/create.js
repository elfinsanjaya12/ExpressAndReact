import React, { Component } from "react";
import axios from "../../axios";
import BreadCrumb from "../../components/atoms/BreadCrumb/BreadCrumb";
import Form from "./form";

class ProductCreate extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			width: ""
		};
	}

	_handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	_handleSubmit = (event) => {
		const { name, width } = this.state;
		// if (this.validate()) {
		//   const token = localStorage.token
		//   const headers = {
		//     token,
		//     otoritas: 'create_ruangan'
		//   }
		console.log("atas");
		axios
			.post("/product", { name, width })
			.then((res) => {
				console.log(name);
				this.props.history.push("/product");
			})
			.catch((err) => {
				const message = err.response.data.message;
				this.setState({
					error: {
						// status: true,
						message: message
					}
				});
			});
		console.log("bawah");
		// }
		event.preventDefault();
	};

	render() {
		const { name, width } = this.state;
		return (
			<div className="container" style={{ marginTop: "20px" }}>
				<div className="col-md-4 offset-md-4">
					<BreadCrumb
						secondText="Product"
						thirdText="Add Product"
						secondUrl="/product"
					/>
					<Form
						handleChange={this._handleChange}
						handleSubmit={this._handleSubmit}
						name={name}
						width={width}
					/>
				</div>
			</div>
		);
	}
}

export default ProductCreate;
