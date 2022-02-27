import React from 'react';
import styled from 'styled-components';

const Text = styled.h3`
	position: fixed;
    display: flex;
  flex-direction: column;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	right: ${(props) => props.right};
	color: ${(props) => `rgba(0, 0, 0,0.7)`};
	font-size: calc(5rem + 5vw);
	font-family: 'Source Sans Pro', 'Source Sans', sans-serif;
	z-index: 0;
    padding: 2;
`;

const BigTitles = (props) => {
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

export default BigTitles;
