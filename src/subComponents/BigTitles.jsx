import React from 'react';
import styled from 'styled-components';

const Text = styled.h3`
	position: fixed;
    display: flex;
    flex-wrap: wrap;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	right: ${(props) => props.right};
	color: ${(props) => `rgba(0, 0, 0,0.7)`};
	font-size: calc(5rem + 5vw);
	font-family: 'Poppins' sans-serif;
	z-index: 0;
    padding: 2;
`;

const BigTitlte = (props) => {
	return (
		<Text
			top={props.top}
			left={props.left}
			right={props.right}
		>
			{props.text}
		</Text>
	);
};

export default BigTitlte;
