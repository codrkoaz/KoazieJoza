import React from 'react';
// import { NavLink } from 'react-router-dom';
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
	padding: 0.4rem;

	&:hover & {
		background-color: white;
		color: black;
	}

	& > *:not(last-child) {
		margin: 5px;
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
				<a
					href='https://github.com/koazie'
					target='_blank'
					rel='noreferrer'
				>
					<Github width={30} height={30} />
				</a>
			</IconGroup>
			<IconGroup>
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
			</IconGroup>
			<IconGroup>
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
			</IconGroup>
			<IconGroup>
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
			</IconGroup>
		</Icons>
	);
};

export default SocialIcons;
