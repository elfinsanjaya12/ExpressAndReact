import React from "react";
import TextInputWithLabel from "../../components/molecules/TextInputWithLabel";

const Form = (props) => {
	const { handleSubmit, handleChange, name, width } = props;
	return (
		<form onSubmit={handleSubmit}>
			<TextInputWithLabel
				label="Name"
				placeholder="Name"
				type="text"
				name="name"
				value={name}
				handleChange={handleChange}
			/>
			<TextInputWithLabel
				type="text"
				label="Width"
				placeholder="Width"
				name="width"
				value={width}
				handleChange={handleChange}
			/>

			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};

export default Form;
