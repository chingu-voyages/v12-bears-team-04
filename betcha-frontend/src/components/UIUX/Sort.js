import React from "react";
import PropTypes from "prop-types";

const Sort = ({ handleSet, params }) => {
	return (
		<div className="sortContainer">
			<label htmlFor="">
				Sort By...
				{params && (
					<select onChange={e => handleSet(e.target.value)}>
						{params.map((v, i) => (
							<option value={v} key={v}>
								{v}
							</option>
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
