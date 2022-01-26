import React from 'react';
import styled from 'styled-components';
import korea from '../assets/video/koreaVid.mp4';
import GlowLightBtn from '../subComponents/GlowLightBtn';
import BigTitles from '../subComponents/BigTitles';
import SocialIcons from '../subComponents/SocialIcons';
import MusicComponent from '../subComponents/Music';

const GOAL_CONTAINER = styled.h1`
	display: flex;
	padding: 5px;
	justify-content: center;
	align-items: center;
	top: 90rem;
`;

const GoalPage = () => {
	return (
		<>
			<GlowLightBtn />

			<GOAL_CONTAINER>
				<h3>My goal is to walk and explore South Korea.</h3>
			</GOAL_CONTAINER>

			{/* Shout-out Seoul Walker on Youtube for this Video
                                https://www.youtube.com/watch?v=Z_NaYKUR3sM&t=68s*/}
			<video
				className='videoTag'
				autoPlay
				loop
				muted
				controls
				style={{
					position: 'fixed',
					width: '100%',
					height: '100%',
					left: '50%',
					top: '50%',
					objectFit: 'cover',
					transform: 'translate(-50%,-50%)',
					zIndex: -1,
				}}
			>
				<source src={korea} type='video/mp4' />
			</video>

			<BigTitles text='Goal' top='79%' left='78%' />
			<SocialIcons />
			<MusicComponent top='49%' />
		</>
	);
};

export default GoalPage;
