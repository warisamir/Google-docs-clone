import React from 'react';
import styled from 'styled-components';

const MenuCommand = ({commandName}) => {
    return ( 
        <Command>
            <Text>
                {commandName}
            </Text>
        </Command>
     );
}

const Command = styled.button`
    width: 100%;
    padding: 6px 38px;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
        background: #eeeeee;
    }
`;

const Text = styled.p`
    margin: 0px;
    font-size: 13px;
`;
 
export default MenuCommand;