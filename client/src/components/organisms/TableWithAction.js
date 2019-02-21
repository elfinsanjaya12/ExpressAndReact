import React, { Component } from "react";
import Thead from "../molecules/Thead";
import Tbody from "../molecules/TbodyWithAction";

class TableWithAction extends Component {
	render() {
		const {
			actionNotDisplay,
			data,
			thead,
			tbody,
			editUrl,
			deleteAction,
			customAction
		} = this.props;

		return (
			<div className="table-responsive">
				<table className="table table-dark">
					<Thead text={thead} />
					<Tbody
						data={data}
						display={tbody}
						editUrl={editUrl}
						deleteAction={deleteAction}
						actionNotDisplay={actionNotDisplay}
						customAction={customAction}
					/>
				</table>
			</div>
		);
	}
}

export default TableWithAction;
