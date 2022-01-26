import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import BigTitles from '../subComponents/BigTitles';
import { Project } from '../assets/data/projectdata';
import Card from '../subComponents/Card';
import MusicComponent from '../subComponents/Music'


import GlowLight from '../subComponents/GlowLightBtn';
import SocialIcons from '../subComponents/SocialIcons';

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	height: 200vh;
	position: relative;
	display: flex;
	align-items: center;
    border: 10px solid black;
    box-sizing: border-box;
`;

const Main = styled(motion.ul)`
	position: fixed;
	top: 25rem;
	left: calc(40rem - 15vw);
	height: 40vh;
	display: flex;
	color: white;
    z-index: 3;
`;

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        }
	}
};

const MySkillsPage = () => {
	const ref = useRef(null);

	useEffect(() => {
		let element = ref.current;

		const rotate = () => {
			element.style.transform = `translateX(${-window.pageYOffset}px)`;
		};
		window.addEventListener('scroll', rotate);

		return () =>
			window.removeEventListener('scroll', rotate);
	}, []);

	return (
		<>
			<GlowLight />
			<SocialIcons />
			<MusicComponent />
			<Box>
				<Main ref={ref} variants={container} initial='hidden' animate='show'>
					{Project.map((d) => (
						<Card key={d.id} data={d} />
					))}
				</Main>
				<BigTitles text='Projects' top='10%' left='50%' />
			</Box>
		</>
	);
};

export default MySkillsPage;
