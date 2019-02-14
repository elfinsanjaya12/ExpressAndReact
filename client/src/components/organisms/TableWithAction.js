import React, { Component } from "react";
import Thead from "./Thead";

class TableWithAction extends Component {
  render() {
    const { thead } = this.props;
    return (
      <div className="table-responsive">
        <table className="table table-sm">
          <Thead text={thead} />
        </table>
      </div>
    );
  }
}

export default TableWithAction;
