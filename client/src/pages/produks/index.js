import React, { Component } from "react";
import Table from "../../components/organisms/TableWithAction";
import SearchInput from "../../components/organisms/SearchInput";

class Produk extends Component {
  render() {
    return (
      <div>
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
