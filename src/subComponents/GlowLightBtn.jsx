import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GlowLgt } from '../components/AllSVGS';

const Glow = styled.button`
	position: fixed;
	top: 2rem;
	left: 50%;
	transform: translate(-50%, 0);

	background-color: #ffffff;
	padding: 0;
	border-radius: 100%;
	border: 4px solid #000;
	height: 6rem;
	width: 6rem;

	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2;

	cursor: pointer;

	&:hover {
		background-color: rgb(255, 255, 255);
		box-shadow: 0 0 8px 6px rgba(255, 255, 255, 0.7);
	}
	& > *:first-child {
		text-decoration: none;
		color: black;
	}
`;

const GlowLight = () => {
	return (
		<Glow>
			<NavLink to='/'>
				<GlowLgt
					width={100}
					height={100}
					fill='currentColor'
				/>
			</NavLink>
		</Glow>
	);
};

export default GlowLight;
