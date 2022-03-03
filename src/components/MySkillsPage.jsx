import React from 'react';
import GlowLight from '../subComponents/GlowLightBtn';
import styled from 'styled-components';
import SocialIcons from '../subComponents/SocialIcons';
import BigTitles from '../subComponents/BigTitles';
import MusicComponent from '../subComponents/Music';
import CircleParticles from '../subComponents/ColorParticles'

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: space-evenly;
	position: relative;
	align-items: center;
	border: 10px solid black;
box-sizing: border-box;

`;

const Main = styled.div`
	border: 7px solid black;
	color: black;
	background-color: rgba(255, 255, 255, 0.79);
	padding: 2rem;
	width: 30vw;
	height: 50vh;
	z-index: 2;
	line-height: 1.5;
	font-family: 'Poppins', sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
position: relative;
`;

const Title = styled.h3`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(1em + 1vw);
	font-weight: bold;

	&*:first-child{
		margin-right: 1rem;
	}
`;

const Description = styled.div`
	color: black;
	font-weight: bold;
	font-size: calc(0.4em + 1vw);
	padding: 0.5rem 0;

	strong {
		margin-bottom: 1rem;
		text-transform: uppercase;
		font-weight: bold;
	}
	ul,p {
		margin-left: 1.5rem;
        font-weight: '300';
		margin-top: 2rem;
	
	}
`;

const MySkillsPage = () => {
	return (
		
			<Box>
			<GlowLight />
			<SocialIcons style={{ top: '10%'}}/>
			<MusicComponent />
			<CircleParticles />
				<Main>
					<Title width={40}
						height={40}
					style={{ fontFamily: 'Anonymous Pro' }}
					>
						Frontend/Backend Developer
					</Title>
					<Description
						style={{ fontFamily: 'Anonymous Pro' }}
					>
						I love creating ideas that can benefit the companies I work for.
					</Description>
					<Description
						style={{ fontFamily: 'Anonymous Pro' }}
					>
						<strong>skills</strong>
						<p>
							HTML, CSS, Javascript, React.js, Java, Firebase(Learning).
						</p>
					</Description>
					<Description style={{ fontFamily: 'Anonymous Pro' }}>
						<strong>tools</strong>
						<p>
							VScode, Github, IntelliJ IDEA, Git.
					</p>
					<br></br>
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
					<br></br>
					</Description>
					<Description>
						<strong
							style={{
								fontFamily: 'Poppins'
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
                    <ul style={{ fontWeight: '400'}}>
                            <li>Figma</li>
                            <li>Affinity Designer & Photos</li>
					</ul>
					<br></br>
                    </Description>
				</Main>
				<BigTitles text='SKILLS' top='73%' left='23%' />
			</Box>

	);
};

export default MySkillsPage;
