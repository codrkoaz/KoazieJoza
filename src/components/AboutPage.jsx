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
position: absolute;
box-sizing: border-box;
overflow: hidden;
	border: 10px solid black;
`;

// const float = keyframes`
// 0% { transform: translateY(-10px)}
// 50% { transform: translateY(15px) translateX(15px)}
// 100% { transform: translateY(-10px)}
// `

const SmileJoza = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
${'' /* animation: ${float} 4s ease infinite; */}
img{
    width: 100%;
    height: auto;
	border: 4px solid black;
	border-radius: 10px;
}
`;

const MainText = styled.div`
  border: 5px solid black;
background: rgba(255, 255, 255, 0.76);
border-radius: 10px;
  color: ${(props) => props.theme.textTwo};
  padding: 2rem;
  width: 50vw;
  height: 50vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
 
  position: absolute;
  left: calc(3rem + 1vw);
  top: 13rem;
  font-family: 'Poppins', monospace;
  font-style: italic;
`

// const MainText = styled.div`
// border: 4px solid black;
// border-radius: 20px;
// color: black;
// background: rgba(255, 255, 255, 0.9);
// backdrop-filter: blur(50px);
// padding: 2rem;
// width: 32vw;
// height: 50vh;
// z-index: 2;
// line-height: 1.5;

// display: flex;
// justify-content: center;
// align-items: center;
// position: fixed;
// left: calc(5rem + 5vw);
// top: 30%;



// p{
// font-size: 20px;
// 	font-style: italic;
// }
// `





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
					I recently got my certificate in Web Development at Kenzie Academy, with a focus mostly in Frontend Development and got myself into backend development. 
					<br /><br />
					I'm into any sort of frontend and backend development that requires creativity and problem solving. 
					<br /><br />
					I also, like my fair share of 3D motion animations, logo design, and video editing. 
					<br /><br />
					My other areas of interest is ux design and machine learning. 
					<br /><br />
					On my free time I like to build mechanical keyboards, play with my dog and eat lasange.

				

					
				</MainText>
				
				<BigTitles text="ABOUT" top="6%" left="5%" />

				</Box>
			
		</>
	);
};

export default AboutPage;
