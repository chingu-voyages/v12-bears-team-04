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
	min-width: 100%;
	max-width: 100%;
	justify-content: space-between;
	position: relative;
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
	/* position: relative; */
	input {
		max-width: 100%;
		max-height: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
	};
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

const ExtendedInput = styled.li`
	border: solid var(--main-dk-grey) 2px;
	position: absolute;
	width: 80vw;
	left: 10vw;
	top: 10vh;
	background-color: white;
	color: #bada55;
`;

const InputOptions = styled.ul`
	color: var(--color-text-grey);
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
	const [showFilter, setShowFilter] = useState(false);
	const [showSort, setShowSort] = useState(false);

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

					<NavInput onClick={() => setShowFilter(!showFilter)}>
						<FilterIcon />
						<span>Filter</span>
						<ExtendIcon />
						{showFilter && (
							<ExtendedInput>
								<InputOptions
									onClick={() =>
										setFilterParamList({
											...filterParamList,
											active: !filterParamList.active
										})
									}
								>
									Show only Active Challenges
								</InputOptions>
								<InputOptions>Show only Charity Challenges</InputOptions>
								<InputOptions>
									Challenges starting in the next 7 days
								</InputOptions>
							</ExtendedInput>
						)}
					</NavInput>
					<NavInput onClick>
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
