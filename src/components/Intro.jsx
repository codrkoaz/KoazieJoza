import React from 'react';
import styled from 'styled-components';
import CloseBoxBtn from './AllSVGS';
import { motion } from 'framer-motion';
import resumeFile from '../assets/resume/Joseph Smith Resume.pdf';

const Box = styled(motion.div)`
	position: absolute;
	left: 51%;
	top: 50%;
	transform: translate(-50%, -50%);
	padding: 4.3rem;

	width: 25vw;
	height: 40vh;
	display: flex;

	border: 5px solid white;
	background-color: black;
	z-index: 1;
`;

const Text = styled(motion.div)`
	font-size: calc(0.3em + 1.0vw);
	left: 0.3rem;
	position: relative; 
	display: flex;
	flex-direction: column;
	align-items: center;
	line-height: 1.6;
	text-align: center;
	bottom: 2rem;
	box-sizing: border-box;
	height: 100%;
	width: 100%;

	& > *:last-child {
		color: rgba(255, 255, 255, 0.9);
		font-size: calc(0.1em + 0.9vw);
		font-weight: 500;
	}

	p {
		padding: 1rem;
		position: relative;
		right: 2%;
		bottom: 1rem;
		
	}
	
`;

const CloseBox = styled(motion.div)`
	color: white;
	position: fixed;
	display: flex;
	cursor: pointer;
	left: 20px;
	top: 20px;
`;

const Intro = ({ showOpen, setShowOpen }) => {
	return (
		<>
			{' '}
			{showOpen ? (
				<Box
					initial={{ height: 0, opacity: 1 }}
					animate={{ height: '35vh' }}
					transition={{
						type: 'spring',
						duration: 1,
						delay: 0,
					}}
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						<Text>
							<h2>hi,</h2>
							<h2>
								<a
									href={resumeFile}
									target='_blank'
									rel='noreferrer'
									download
									style={{
										color: '#C26565',
										textDecoration: 'none',
									}}
								>
									Joza
								</a> here,
							</h2>
							<h4
								style={{
									fontFamily: 'Poppins',
									fontWeight: 'bold',
									color: 'white',
								}}
							>
								I create stuff I like sometimes.
							</h4>
							<p style={{ fontWeight: '400'}}>
								I'm a Frontend Web Developer and a Digital
								Artist based in Grand Rapids.
								I have a profound interest in
								full-stack development, UX Design, Mobile
								development and machine learning.
							</p>
						</Text>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}
					></motion.div>
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0 }}
					>
						<CloseBox>
							<CloseBoxBtn
								width={45}
								height={45}
								onClick={() => setShowOpen((prev) => !prev)}
							/>
						</CloseBox>
					</motion.div>
				</Box>
			) : null}
		</>
	);
};

export default Intro;
