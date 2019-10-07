import React, { useState } from "react";
import PropTypes from "prop-types";
import CheckBox from "../../widgets/CheckBox.js";

const Filter = ({ legend, value, setValue }) => {
	// takes an array of strings
	// takes a function to set the state of the filter array
	const [checked, setChecked] = useState(true);

	return (
		<div className="filterContainer">
			<label style={{ display: "flex", alignItems: "center" }}>
				{legend || value}
				<CheckBox
					checked={checked}
					setChecked={setChecked}
					onChange={() => setValue(value)}
				/>
			</label>
		</div>
	);
};

Filter.propTypes = {
	legend: PropTypes.string,
	value: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired
};

export default Filter;
