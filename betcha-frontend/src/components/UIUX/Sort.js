import React from "react";
import PropTypes from "prop-types";

const Sort = ({ handleSet, params }) => {
	console.log(handleSet, params);
	return (
		<div className="sortContainer">
			<label htmlFor="">
				Sort By...
				{params && (
					<select>
						{params.map((v, i) => (
							<option>{v}</option>
						))}
					</select>
				)}
			</label>
		</div>
	);
};

Sort.propTypes = {
	handleSet: PropTypes.func.isRequired,

	params: PropTypes.array.isRequired
};

export default Sort;
