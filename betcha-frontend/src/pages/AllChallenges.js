import React, { useState, useEffect } from "react";
import testData from "../testing_helper/all_challenges.json";
import Challenge from "../components/UIUX/Challenge.js";
import Sort from "../components/UIUX/Sort.js";
import Filter from "../components/UIUX/Filter.js";

const AllChallenges = props => {
	const [challengeList, setChallengeList] = useState([]);
	const [filterParamList, setFilterParamList] = useState([]);
	const [sort, setSort] = useState("title");
	useEffect(() => {
		setChallengeList(testData);
		return () => {};
	}, []);
	return (
		<div className="myChallengeContainer">
			<Filter handleSet={setFilterParamList} />
			<Sort
				handleSet={setSort}
				params={[
					"title",
					"activityType",
					"challengeType",
					"duration",
					"startDate"
				]}
			/>
			{testData.map((v, i) => {
				return <Challenge {...v} key={v.id} />;
			})}
		</div>
	);
};

export default AllChallenges;
