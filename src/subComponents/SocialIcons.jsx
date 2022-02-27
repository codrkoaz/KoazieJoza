import React from 'react';
import { motion } from 'framer-motion'
import {
	Dribbble,
	Github,
	Instagram,
	LinkedIn,
} from '../components/AllSVGS';
import styled from 'styled-components';

const Icons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: center;
	bottom: 0.9rem;
	left: 90%;
	position: fixed;
	z-index: 3;
	padding: 0.1rem;
	

	&:hover & {
		background-color: white;
		color: black;
	}

	& > *:not(last-child) {
		margin: 0.5px 0;
		text-decoration: none;
		color: white;
		filter: drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.6));
	}
`;

const IconGroup = styled.a`
	color: inherit;
	text-decoration: none;
	&:hover {
		& > * {
			fill: white;
		}
	}
`;

const SocialIcons = () => {
	return (
		<Icons>
			<IconGroup>
			<motion.div
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
						transition: { type: 'spring', duration: 1.2, delay: 1 }
						}}
            >
				<a
					href='https://github.com/koazie'
					target='_blank'
					rel='noreferrer'
				>
					<Github width={30} height={30} />
				</a>
				</motion.div>
			</IconGroup>
			<IconGroup>
			<motion.div
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
						transition: { type: 'spring', duration: 1.3, delay: 1 }
						}}
            >
				<a
					href='https://instagram.com/koaziejoza'
					target='_blank'
					rel='noreferrer'
				>
					<Instagram
						width={30}
						height={30}
					/>
					</a>
				</motion.div>
					
			</IconGroup>
			<IconGroup>
			<motion.div
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
						transition: { type: 'spring', duration: 1.4, delay: 1 }
						}}
            >
				<a
					href='https://www.linkedin.com/in/jozasmith/'
					target='_blank'
					rel='noreferrer'
				>
					<LinkedIn
						width={30}
						height={30}
					/>
					</a>
					</motion.div>
			</IconGroup>
			<IconGroup>
			<motion.div
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
            >
				<a
					href='https://dribbble.com/jozasmith'
					target='_blank'
					rel='noreferrer'
				>
					<Dribbble
						width={30}
						height={30}
					/>
					</a>
					</motion.div>
			</IconGroup>
		</Icons>
	);
};

export default SocialIcons;
