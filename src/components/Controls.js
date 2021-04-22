import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContextTheme } from '../contexts/contextTheme';

const Controls = () => {
    const { increaseFont,
            decreaseFont,
            alignTextLeft,
            alignTextCenter,
            alignTextRight 
        } = useContext(ContextTheme);

    return (
        <ContainerControls>
            <div>
                <Button onClick={increaseFont}>Increase Size</Button>
                <Button onClick={decreaseFont}>Decrease Size</Button>
            </div>
            <div>
                <Button onClick={alignTextLeft}>Left</Button>
                <Button onClick={alignTextCenter}>Center</Button>
                <Button onClick={alignTextRight}>Right</Button>
            </div>
        </ContainerControls>
    );
}

const ContainerControls = styled.div`
	margin-top: 20px;
`;

const Button = styled.button`
	background: #165168;
	color: #fff;
	border: none;
	cursor: pointer;
	font-size: 12px;
	padding: 7px;
	margin-right: 10px;
	margin-bottom: 10px;
	border-radius: 3px;

	&:hover {
		background: #191668;
	}
`;

export default Controls;
