import React, { useState, useEffect } from "react";
import styled from "styled-components";
import testData from "../testing_helper/all_challenges.json";
import Challenge from "../components/UIUX/Challenge.js";
import Navbar from "../components/navigation/Navbar";
import { PageItem } from "./LandingPage.js";
import HeroImage from "../components/UIUX/HeroImage";
import VsBox from "../components/UIUX/VsBox";
import ChallengeIconContainer from "../components/UIUX/ChallengeIconContainer";
import FriendChallenge from "../components/UIUX/FriendChallenge";

const ChallengePage = props => {
	const test = testData[0];
	const [friendChallengeVisible, setFriendChallengeVisible] = useState(false);
	return (
		<PageItem>
			<Navbar />
			<HeroImage title={test.title} imgSrc={test.challengeImgUrlLg} />
			<div className="bodyText">
				<div className="subHeader">{test.subTitle}</div>
				<div className="rules">
					<ul className="rulesList">
						{test.rules && test.rules.map((v, i) => <li key={i}>{v}</li>)}
					</ul>
				</div>
				<VsBox open={() => setFriendChallengeVisible(true)} />
				{friendChallengeVisible && (
					<FriendChallenge close={() => setFriendChallengeVisible(false)} />
				)}
				<ChallengeIconContainer
					iconList={[
						test.activityType,
						test.challengeType,
						test.currency,
						test.charityId,
						test.duration,
						test.startDate
					]}
				/>
			</div>
		</PageItem>
	);
};

export default ChallengePage;
