import React, { Component } from "react";
import Thead from "../molecules/Thead";
import Tbody from "../molecules/TbodyWithAction";

class TableWithAction extends Component {
  render() {
    const { data, thead, tbody } = this.props;

    return (
      <div className="table-responsive">
        <table className="table table-dark">
          <Thead text={thead} />
          <Tbody data={data} display={tbody} />
        </table>
      </div>
    );
  }
}

export default TableWithAction;
