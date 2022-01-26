import React from 'react'
import styled from 'styled-components'

const Logo = styled.h1`
display: inline-block;
color: ${props => props.theme.text};
font-family: 'Poppins', sans-serif;
`


const LogoSpot = () => {
    return (
        <Logo>
            <h1>KOAZIE</h1>
        </Logo>
    )
}

export default LogoSpot
