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
	bottom: 3.9rem;
	left: 93%;
	position: fixed;
	z-index: 3;
	padding: 0.4rem;

	& > *:not(last-child) {
		margin: 5px;
		text-decoration: none;
		color: white;
		filter: drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.6));
	}
`;

const SocialIcons = () => {
	return (
		<Icons>
			<div>
				<a
					href='https://github.com/koazie'
					style={{ color: 'white' }}
					target='_blank'
					rel='noreferrer'
				>
					<Github
						width={30}
						height={30}
						fill='currentColor'
					/>
				</a>
			</div>
			<div>
				<a
					href='https://instagram.com/koaziejoza'
					style={{ color: 'white' }}
					target='_blank'
					rel='noreferrer'
				>
					<Instagram
						width={30}
						height={30}
						fill='currentColor'
					/>
				</a>
			</div>
			<div>
				<a
					href='https://www.linkedin.com/in/jozasmith/'
					style={{ color: 'white' }}
					target='_blank'
					rel='noreferrer'
				>
					<LinkedIn
						width={30}
						height={30}
						fill='currentColor'
					/>
				</a>
			</div>
			<div>
				<a
					href='https://dribbble.com/jozasmith'
					style={{ color: 'white' }}
					target='_blank'
					rel='noreferrer'
				>
					<Dribbble
						width={30}
						height={30}
						fill='currentColor'
					/>
				</a>
			</div>
		</Icons>
	);
};

export default SocialIcons;
