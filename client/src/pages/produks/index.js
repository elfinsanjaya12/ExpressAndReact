import React, { Component } from "react";
import Table from "../../components/organisms/TableWithAction";
import { SearchInput } from "../../components/atoms/Input/index";
import BreadCrumb from "../../components/atoms/BreadCrumb/BreadCrumb";

class Produk extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
  }

  // componentDidMount() {
  //   this.props.setAllProduks();
  // }
  render() {
    // const { produks } = this.props;
    return (
      <div className="container">
        <div className="card shadow-sm p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <BreadCrumb secondText="Produk" />
            <SearchInput />
            <br />
            <Table
              // data={produks}
              thead={["Produk", "Gambar", "Modal", "Harga", "Stok", "Aksi"]}
              tbody={["nama", "gambar"]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Produk;
// const mapStateToProps = state => {
//   return {
//     produk: state.produk
//   };
// };

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ setAllProduks }, dispatch);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Produk);
