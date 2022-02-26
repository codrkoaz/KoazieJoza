import React from 'react';
import styled from 'styled-components';
import korea from '../assets/video/koreaVid.mp4';
import GlowLightBtn from '../subComponents/GlowLightBtn';
import BigTitles from '../subComponents/BigTitles';
import SocialIcons from '../subComponents/SocialIcons';
import MusicComponent from '../subComponents/Music';

const GOAL_CONTAINER = styled.div`
	display: flex;
	font-weight: bold;
	align-content: center;
	padding: 8rem;
	font-size: 30px;
	flex-direction: row;
	align-items: baseline;
	color: white;
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 1);

`;

const GoalPage = () => {
	return (
		<>
			<GlowLightBtn />

			<GOAL_CONTAINER>
			My goal is to walk and explore South Korea.
			</GOAL_CONTAINER>

			{/* Shout-out Seoul Walker on Youtube for this Video
                                https://www.youtube.com/watch?v=Z_NaYKUR3sM&t=68s*/}
			<video
				className='videoTag'
				autoPlay
				loop
				muted
				// controls
				style={{
					position: 'fixed',
					width: '100%',
					height: '100%',
					left: '50%',
				top: '50%',
				
					objectFit: 'fill',
					transform: 'translate(-50%,-50%)',
					zIndex: -1,
				}}
			>
				<source src={korea} type='video/mp4' />
			</video>

			<BigTitles text='Goals' top='79%' left='72%' />
			<SocialIcons />
			<MusicComponent top='49%' />
		</>
	);
};

export default GoalPage;
