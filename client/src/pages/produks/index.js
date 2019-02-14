import React, { Component } from "react";
import Table from "../../components/organisms/TableWithAction";

class Produk extends Component {
  render() {
    return (
      <Table
        thead={["No", "Produk", "Gambar", "Modal", "Harga", "Stok", "Aksi"]}
      />
    );
  }
}

export default Produk;
