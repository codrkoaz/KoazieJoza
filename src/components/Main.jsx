import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import GlowLight from '../subComponents/GlowLightBtn';
import LogoSpot from '../subComponents/LogoSpot';
import MusicComponent from '../subComponents/Music';
import SocialIcons from '../subComponents/SocialIcons';
import Intro from './Intro';
import { motion } from 'framer-motion';

const MainContainer = styled.div`
	background: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	${'' /* overflow: hidden; */}
	border-right: 10px solid black;

	position: relative;
	box-sizing: border-box;
	border: 10px solid black;

	h2,
	h3,
	h4,
	h5 {
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
	}
`;
const Container = styled.div`
	padding: 2rem;
`;

// NavLink
const Contact = styled.div`
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 2rem;
	right: calc(1rem + 1.5vw);
	text-decoration: none;
	z-index: 1;
`;

const GOAL = styled(NavLink)`
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 48%;
	right: calc(1rem + 1.5vw);
	transform: translate(-50%, -50%);
	transform: rotate(-90deg);
	text-decoration: none;
	z-index: 1;
`;

const PROJECTS = styled(NavLink)`
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 48%;
	left: calc(1rem + 1.2vw);
	transform: translate(-50%, -50%);
	transform: rotate(90deg);
	text-decoration: none;
	z-index: 1;
`;

const BottomBar = styled.div`
	position: absolute;
	bottom: 4rem;
	left: 0;
	right: 0;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
	color: ${(props) => props.theme.text};
	text-decoration: none;
	z-index: 1;
`;

const SKILLS = styled(NavLink)`
	color: ${(props) => props.theme.text};
	text-decoration: none;
	z-index: 1;
`;

const Center = styled.button`
	position: absolute;
	top: 46%;
	left: 49.5%;
	transform: translate(-50%, -50%);
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Footer = styled.div`
	color: ${(props) => props.theme.text};
	font-size: 13px;
	${'' /* display: flex; */}
	${'' /* justify-content: center; */}
	${'' /* flex-direction: column; */}
	${'' /* box-sizing: border-box; */}
	line-height: 20px;
	text-align: center;
    text-shadow: 0px 4px 3px rgba(0, 0, 0, .6);
	position: fixed;
min-height: 100px;
width: 100%;
	left: 0;
	bottom: 0;
	top: 96%; 
`;

const Main = () => {
	const [showOpen, setShowOpen] = useState(false);

	const isOpen = () => {
		setShowOpen((prev) => !prev);
	};

	return (
		<MainContainer>
			<Container>
				<GlowLight />
				<SocialIcons />

				<Center onClick={isOpen}>
					<LogoSpot />
				</Center>

				<MusicComponent />

				<Contact>
				<a
					href='mailto:koazietype@gmail.com'
					style={{ color: 'white' }}
					rel='noreferrer'
				>
					<motion.h2
					initial={{
							y: -200,
							transition: {
								type: 'spring',
								duration: 1.5,
								delay: 1,
							}
						}}
						animate={{
							y: 0,
						transition: { type: 'spring', duration: 1.5, delay: 1 }
						}}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
							say hi...
					</motion.h2>
						</a>
				</Contact>

				<GOAL to='/Goal'>
					<motion.h2
						initial={{
							y: 200,
							transition: {
								type: 'spring',
								duration: 1.5,
								delay: 1,
							},
						}}
						animate={{
							y: 0,
							transition: {
								type: 'spring',
								duration: 1.5,
								delay: 1,
							},
						}}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Goals
					</motion.h2>
				</GOAL>

				<PROJECTS to='/Projects' click={click}>
					<motion.h2
						initial={{
							y: 200,
							transition: {
								type: 'spring',
								duration: 1.5,
								delay: 1,
							},
						}}
						animate={{
							y: 0,
							transition: {
								type: 'spring',
								duration: 1.5,
								delay: 1,
							},
						}}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Project.
					</motion.h2>
				</PROJECTS>

				<BottomBar>
					<ABOUT to='/About' click={click}>
						<motion.h2
							initial={{
								y: 200,
								transition: {
									type: 'spring',
									duration: 1.5,
									delay: 1,
								},
							}}
							animate={{
								y: 0,
								transition: {
									type: 'spring',
									duration: 1.5,
									delay: 1,
								},
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							About
						</motion.h2>
					</ABOUT>
					<SKILLS to='/MySkills' click={click}>
						<motion.h2
							initial={{
							y: 200,
							transition: {
								type: 'spring',
								duration: 1.5,
								delay: 1,
							}
						}}
						animate={{
							y: 0,
						transition: { type: 'spring', duration: 1.5, delay: 1 }
						}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							Skills
						</motion.h2>
					</SKILLS>
				</BottomBar>
			</Container>

			<Intro
				showOpen={showOpen}
				setShowOpen={setShowOpen}
			/>

			<Footer>
				Built and designed by Joza Smith.<br></br>
				All rights reserved. ©
			</Footer>
		</MainContainer>
	);
};

export default Main;
