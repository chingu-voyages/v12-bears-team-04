import React from "react";
import PropTypes from "prop-types";

const Filter = ({ handleSet, params }) => {
	return (
		<div className="sortContainer">
			<fieldset>
				<label htmlFor="">
					Filter By...
					{params &&
						params.map((v, i) => {
							return (
								<label>
									{v}
									<input
										type="checkbox"
										name={v}
										value={true}
										onChange={e => console.log(e.target.name, e.target.value)}
									/>
								</label>
							);
						})}
				</label>
			</fieldset>
		</div>
	);
};

Filter.propTypes = {
	handleSet: PropTypes.func.isRequired,

	params: PropTypes.array.isRequired
};

export default Filter;
