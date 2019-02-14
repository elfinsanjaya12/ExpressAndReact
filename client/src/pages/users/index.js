import React, { Component } from "react";
import Table from "../../components/organisms/TableWithAction";
import SearchInput from "../../components/organisms/SearchInput";
import BreadCrumb from "../../components/organisms/BreadCrumb";

class User extends Component {
  render() {
    return (
      <div className="container">
        <BreadCrumb secondText="User" />
        <SearchInput />
        <br />
        <Table thead={["No", "Nama", "Aksi"]} />
      </div>
    );
  }
}

export default User;
