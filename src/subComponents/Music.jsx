import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import jazz from '..//assets/music/Finger swingin.mp3'


const MusicBox = styled.h2`
display: flex;
color: white;
font-family: 'Poppins', sans-serif;
cursor: pointer;
position: fixed;
top: 3rem;
left: 8rem;
z-index: 10;

position: fixed;
left: 4rem;
top: 3rem;
z-index: 3;

`






const MusicComponent = () => {


    
    const ref = useRef(null);
        const [click, setClick] = useState(false)
    
        const handleClick = () => {
            setClick(!click);
    
            if (!click) {
                ref.current.play();
            } else {
                ref.current.pause();
            }
        }
    
    
    return (
        

    
        <MusicBox onClick={() => handleClick()}>
            <musicPlay click={click} />
            <musicPlay click={click} />
            <musicPlay click={click} />

            Music


            <audio src={jazz} ref={ref} loop/>

        </MusicBox>
    )
}

export default MusicComponent;


