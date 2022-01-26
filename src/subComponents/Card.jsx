import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSVGS';
import { motion } from 'framer-motion';

const Box = styled(motion.li)`
	width: 19rem;
	height: 35vh;
	background-color: white;
	color: black;
	font-weight: 500;
	padding: 1.5rem 2rem;
	margin-right: 3rem;

	border-radius: 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 5px solid black;
	transition: all 0.2s ease;
	flex-wrap: row;

	&:hover {
		background-color: black;
		color: white;
		border: 5px solid white;
	}
`;

const Title = styled.h3`
	font-size: calc(1rem + 0.5vw);
	font-family: 'Anonymous Pro', sans-serif;
`;

const Description = styled.h3`
	font-size: calc(0.8em + 0.5vw);
	font-family: 'Anonymous Pro';
	font-weight: bold;
`;
const Tags = styled.div`
	border-top: 3px solid black;
	border-bottom: 3px solid black;
	padding: 0.5rem;
	display: flex;
	flex-wrap: wrap;
	${Box}:hover & {
		border-top: 3px solid white;
		border-bottom: 3px solid white;
	}
`;

const Tag = styled.span`
	margin-right: 1rem;
	font-size: calc(0.8em + 0.3vw);
`;

const Footer = styled.footer`
	display: flex;
	justify-content: space-between;
`;

const Link = styled(NavLink)`
	background-color: black;
	text-decoration: none;
	color: white;
	padding: 0.5rem calc(2rem + 2vw);
	border-radius: 0 0 30px 30px;
	font-size: calc(1em + 0.5vw);

	${Box}:hover & {
		background-color: white;
		color: black;
	}
`;

const GITHUB = styled(NavLink)`
	color: inherit;
	text-decoration: none;
	${'' /* left: 5rem; */}
	${Box}:hover & {
		& > * {
			fill: white;
		}
	}
`;

const Item = {
	hidden: {
		scale: 0,
	},
	show: {
		scale: 1,
		transition: {
			type: 'spring',
			duration: 0.5,
		},
	},
};

const Card = (prop) => {
	const { id, name, description, tags, demo, github } =
		prop.data;

	return (
		<Box key={id} variants={Item}>
			<Title>{name}</Title>
			<Description>{description}</Description>
			<Tags>
				{tags.map((t, id) => {
					return <Tag key={id}>#{t}</Tag>;
				})}
			</Tags>
			<Footer>
				<Link
					to={{ pathname: `${demo}` }}
					target='_blank'
					rel='noreferrer'
				>
					Visit
				</Link>
				<GITHUB
					to={{ pathname: `${demo}` }}
					target='_blank'
				>
					<Github width={50} height={50} />
				</GITHUB>
			</Footer>
		</Box>
	);
};

export default Card;
