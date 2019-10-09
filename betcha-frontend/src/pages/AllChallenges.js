import React, { useState, useEffect } from "react";
import styled from "styled-components";
import testData from "../testing_helper/all_challenges.json";
import Challenge from "../components/UIUX/Challenge.js";
import { PageItem } from "./LandingPage.js";
import Navbar from "../components/navigation/Navbar";
import SearchIcon from "../components/UIUX/SearchIcon.js";
import FilterIcon from "../components/UIUX/FilterIcon.js";
import ExtendIcon from "../components/UIUX/ExtendIcon.js";
import SortIcon from "../components/UIUX/SortIcon.js";
// import DownIcon from "../components/UIUX/DownIcon.js";

const NavContainer = styled.div`
	background-color: #a6b0ba;
	max-height: 2em;
	padding: 5px;
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const MainBody = styled.div`
	font-family: "Roboto Condensed", sans-serif;
`;

const NavInput = styled.div`
	background-color: white;
	color: #616e7d;
	width: 25%;
	display: flex;
	padding: 5px;
	justify-content: space-between;
	span {
		justify-self: center;
	};
	svg {
		fillRule: "evenodd",
		clipRule: "evenodd",
		strokeLinejoin: "round",
		strokeMiterlimit: "1.41421"
	}
`;

const Search = styled(NavInput)``;

const ChallengeContainer = styled.div``;

const AllChallenges = props => {
	const [challengeList, setChallengeList] = useState([]);
	const [filterParamList, setFilterParamList] = useState({
		coding: false,
		active: true,
		musical: true
	});
	const [sort, setSort] = useState("title");
	const [search, setSearch] = useState("");

	console.log(challengeList);

	useEffect(() => {
		setChallengeList(testData);
		return () => {};
	}, []);

	return (
		<PageItem>
			<Navbar>
				<span>Challenges</span>
			</Navbar>
			<MainBody>
				<NavContainer>
					<NavInput onChange={e => setSearch(e.target.value)}>
						<SearchIcon />
						<span>Search</span>
					</NavInput>

					<NavInput>
						<FilterIcon />
						<span>Filter</span>
						<ExtendIcon />
					</NavInput>
					<NavInput>
						<SortIcon />
						<span>Sort</span>
						<ExtendIcon />
					</NavInput>
				</NavContainer>
				<ChallengeContainer>
					{challengeList.map((v, i) => (
						<Challenge {...v} key={v.id} />
					))}
				</ChallengeContainer>
			</MainBody>
		</PageItem>
	);
};

export default AllChallenges;
