import React from 'react';
import GlowLight from '../subComponents/GlowLightBtn';
import styled from 'styled-components';
import SocialIcons from '../subComponents/SocialIcons';
import BigTitles from '../subComponents/BigTitles';
import MusicComponent from '../subComponents/Music';

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	position: relative;
	align-items: center;
	overflow: hidden;
	border: 10px solid black;
	box-sizing: border-box;
`;

const Main = styled.div`
	border: 7px solid black;
	color: black;
	background-color: rgba(255, 255, 255, 0.85);
	padding: 1rem;
	width: 30vw;
	height: 60vh;
	z-index: 3;
	line-height: 2.7;
	font-family: 'Poppins', sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Title = styled.h3`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(1em + 1vw);
	font-weight: bold;
`;

const Description = styled.div`
	color: black;
	font-weight: bold;
	font-size: calc(0.3em + 1vw);
	padding: 0.5rem 0;

	strong {
		margin-bottom: 1rem;
		text-transform: uppercase;
		font-weight: bold;
	}
	ul,p {
		margin-left: 2rem;
        font-weight: '300';
		margin-top: 1rem;
	
	}
`;

const MySkillsPage = () => {
	return (
		<>
			<SocialIcons />
			<GlowLight />
			<MusicComponent />
			<Box>
				<Main>
					<Title
						style={{ fontFamily: 'Anonymous Pro' }}
					>
						Frontend/Backend Developer
					</Title>

					<Description
						style={{ fontFamily: 'Anonymous Pro' }}
					>
						I value business or brand for which I'm
						creating, thus I enjoy bringing new ideas to
						life.
					</Description>
					<Description
						style={{ fontFamily: 'Anonymous Pro' }}
					>
						<strong>skills</strong>
						<p>
							HTML, CSS, Javascript, React.js, Java.
						</p>
					</Description>
					<Description style={{ fontFamily: 'Anonymous Pro' }}>
						<strong>tools</strong>
						<p>
							VScode, Github, IntelliJ IDEA, Git, Codepen
						</p>
					</Description>
				</Main>
				<Main>
					<Title
						style={{ fontFamily: 'Poppins' }}
						width={40}
						height={40}
					>
						Designer
					</Title>

					<Description
						style={{
							fontFamily: 'Poppins',
							fontWeight: '400',
						}}
					>
						I love to create designs which speaks without
						saying anything, keep it clean, simple and
						minimal.
					</Description>
					<Description>
						<strong
							style={{
								fontFamily: 'Poppins',
								fontWeight: 'bold',
							}}
						>
							I like to design
						</strong>
						<ul style={{ fontWeight: '400'}}>
                            <li>Web Design</li>
                            <li>Mobile Apps</li>
						</ul>
                    </Description>
                    <Description>
					<strong
						style={{
							fontFamily: 'Poppins',
							fontWeight: 'bold',
						}}
					>
						tools
                        </strong>
                    </Description>
                    <Description>
                    <ul style={{ fontWeight: '400'}}>
                            <li>Figma</li>
                            <li>Affinity Designer & Photos</li>
						</ul>
                    </Description>
				</Main>
				<BigTitles text='SKILLS' top='73%' left='30%' />
			</Box>
			<SocialIcons />
		</>
	);
};

export default MySkillsPage;
