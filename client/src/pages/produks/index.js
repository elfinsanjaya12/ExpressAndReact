import React, { Component } from "react";
import Table from "../../components/organisms/TableWithAction";
import SearchInput from "../../components/organisms/SearchInput";
import BreadCrumb from "../../components/organisms/BreadCrumb";

class Produk extends Component {
  render() {
    return (
      <div className="container">
        <BreadCrumb secondText="Produk" />
        <SearchInput />
        <br />
        <Table
          thead={["No", "Produk", "Gambar", "Modal", "Harga", "Stok", "Aksi"]}
        />
      </div>
    );
  }
}

export default Produk;
