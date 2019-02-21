import React, { Component } from "react";
import axios from "../../axios";
import { Link } from "react-router-dom";
import Table from "../../components/organisms/TableWithAction";
import { SearchInput } from "../../components/atoms/Input/index";
import BreadCrumb from "../../components/atoms/BreadCrumb/BreadCrumb";
import { connect } from "react-redux";
import { setAllProduks } from "../../store/actions";
import { bindActionCreators } from "redux";

class Produk extends Component {
	constructor() {
		super();
		this.state = {
			query: "",
			access: {
				tambah: false,
				edit: false,
				hapus: true
			}
		};
	}

	componentDidMount() {
		this.props.setAllProduks();
	}

	_handleDelete = (id) => {
		// const token = localStorage.token;
		// const headers = {
		// 	token,
		// 	otoritas: "delete_supplier"
		// };
		console.log("js");
		axios
			.delete(`/product/${id}`)
			.then((res) => {
				console.log("dalam");

				this.props.setAllProduks();
			})
			.catch((err) => console.log(err));
	};

	render() {
		const { produk } = this.props;

		return (
			<div className="container">
				<BreadCrumb secondText="Produk" />
				<Link
					className="btn btn-primary"
					to="/product/create"
					style={{ marginBottom: 10 }}
				>
					<i className="fas fa-plus" /> Add
				</Link>
				<SearchInput />
				<br />
				<Table
					data={produk}
					thead={["Nama", "Ukuran", "Aksi"]}
					tbody={["name", "width"]}
					// editUrl={this.state.access.edit ? "/supplier/edit" : null}
					handlePageClick={this.handlePageClick}
					deleteAction={
						this.state.access.hapus ? (id) => this._handleDelete(id) : null
					}
				/>
			</div>
		);
	}
}

// export default Produk;
const mapStateToProps = (state) => {
	return {
		produk: state.produk
	};
};

const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ setAllProduks }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Produk);
