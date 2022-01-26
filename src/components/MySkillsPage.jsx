import React from 'react'
import GlowLight from '../subComponents/GlowLightBtn';
import styled from 'styled-components';
import SocialIcons from '../subComponents/SocialIcons';
import BigTitles from '../subComponents/BigTitles'
import MusicComponent from '../subComponents/Music'



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
    
`


const Main = styled.div`
border: 7px solid black;
color: black;
background-color: rgba(255, 255, 255, 0.85);
padding: 1rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.9;
font-family: 'Poppins', sans-serif;
display: flex;
flex-direction: column;
justify-content: space-between;
`



const Title = styled.h3`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
font-weight: bold;
`

const TitleDescription = styled.div`
color: black;
font-weight: bold;
font-size: calc(0.3em + 1vw);
padding: 0.5rem 0;


strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-weight: bold;
}
p{
    margin-left: 2rem;
    margin-top: 2.5rem;
}
`



const MySkillsPage = () => {

    return (
        <>
            <SocialIcons/>
            <GlowLight />
            <MusicComponent/>
        <Box>
                

                <Main>
                    <Title style={{fontFamily: 'Anonymous Pro'}} width={40} height={40}>Frontend/Backend Developer</Title>
                    
                    <TitleDescription style={{fontFamily: 'Anonymous Pro'}}>
                    I value business or brand for which I'm creating, thus I enjoy bringing new ideas to life.
                    <br /> <br/>
                        <strong>skills</strong>
                    <p>HTML, CSS, Javascript, React.js, Java, mySQL</p>
                        <strong>tools</strong>

                    <p>VScode, Github, IntelliJ IDEA, Git, Codepen</p>
                        </TitleDescription>
            </Main>
            <Main>
                    <Title style={{ fontFamily: 'Poppins' }} width={40} height={40}>Designer</Title>
                    
                    <TitleDescription style={{fontFamily: 'Poppins', fontWeight: '500'}}>
                        
                        I love to create designs which speaks without saying anything, keep it clean, simple and minimal.

                        <br /> <br/>
                        <strong style={{ fontFamily: 'Poppins' , fontWeight: '500'}}>I like to design</strong>
                        <p>Web Design, Mobile Apps, Mods for Sims 4</p>
                        
                        <strong style={{ fontFamily: 'Poppins' , fontWeight: '500'}}>tools</strong>

                    <p>Figma, (Affinity Designer, Photos, Publisher), Blender, Marvelous Designer</p>
                    </TitleDescription>
                </Main>
				<BigTitles text="SKILLS" top="73%" left="30%" />

            </Box>
            <SocialIcons />

        </>
    )
}

export default MySkillsPage
