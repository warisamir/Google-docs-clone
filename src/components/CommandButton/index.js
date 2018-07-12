import React from 'react';


import styled from '../../../node_modules/styled-components';

const CommandButton = ({ executeCommand, command, args, icon }) => {
    return ( 
        <Button onClick={() => executeCommand(command, null, args)}>
            <Icon src={icon} alt={command} />
        </Button>
     );
}

const Button = styled.button`
    width: 25px;
    height: 25px;
    background: none;
    border: none;
`;

const Icon = styled.img`
    width: auto;
    height: 80%;
`;
 
export default CommandButton;