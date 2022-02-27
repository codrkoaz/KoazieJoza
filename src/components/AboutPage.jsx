import React from 'react';
import styled from 'styled-components';


// Nav Components
import GlowLight from '../subComponents/GlowLightBtn';
import SocialIcons from '../subComponents/SocialIcons';
import CircleParticles from '../subComponents/CircleParticles';
import BigTitles from '../subComponents/BigTitles'
import MusicComponent from '../subComponents/Music'

import koaziejoza from '../assets/images/joza.JPG'




const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
box-sizing: border-box;
overflow: hidden;
border: 10px solid black;
`;




const SmileJoza = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
img{
    width: 100%;
    height: 100%;
	border: 4px solid black;
	border-radius: 10px;
}
`;

const MainText = styled.div`
  border: 5px solid black;
background: rgba(255, 255, 255, 0.76);
  color: ${(props) => props.theme.textTwo};
  padding: 1rem;
  text-align: center;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
 
  position: absolute;
  left: calc(5rem + 5vw);
  top: 12rem;
  font-family: 'Poppins', monospace;
  ${'' /* font-style: italic; */}
`





const AboutPage = () => {
	
	return (
		<>
		
				<GlowLight />
			<SocialIcons />
			<MusicComponent />
			
			<Box>
				<CircleParticles />

                <SmileJoza>
                    <img src={koaziejoza} alt="Koazie Joza"/>
                </SmileJoza>

				<MainText>
					I recently got my certificate in Web Development at Kenzie Academy, with a focus mostly in Frontend Development. 
          I'm into any sort of development that requires me to be creative and to solve problems. I recently got myself into learning Backend development. 
          I also, like my fair share of ux design, logo design, and video editing. 
					My other areas of interest includes machine learning, backend development, and 3D motion animations. 
					In my free time I like to build mechanical keyboards while listening to jazz, cook, and binge watch Anime and Kdramas.
				</MainText>
				
				<BigTitles text="ABOUT" top="6%" left="5%" />

				</Box>
			
		</>
	);
};

export default AboutPage;
