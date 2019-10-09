import React from "react";

const SearchIcon = props => {
	return (
		<div>
			<svg
				height="100%"
				viewBox="0 0 14 18"
				style={{
					fillRule: "evenodd",
					clipRule: "evenodd",
					strokeLinejoin: "round",
					strokeMiterlimit: "1.41421"
				}}
			>
				<path
					d="M2.886,17.747l-2.886,-1.666l3.111,-5.388c-1.937,-1.963 -2.413,-5.05 -0.968,-7.553c1.733,-3.002 5.578,-4.032 8.579,-2.298c3.002,1.733 4.032,5.577 2.299,8.579c-1.445,2.502 -4.356,3.634 -7.024,2.938l-3.111,5.388Zm6.17,-14.02c1.41,0.814 1.893,2.618 1.079,4.028c-0.813,1.409 -2.618,1.892 -4.027,1.079c-1.409,-0.814 -1.893,-2.618 -1.079,-4.028c0.813,-1.409 2.618,-1.892 4.027,-1.079Z"
					style={{ fill: "#616e7d" }}
				/>
			</svg>
		</div>
	);
};

export default SearchIcon;
