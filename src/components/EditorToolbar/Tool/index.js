import React from 'react';
import styled from 'styled-components';

const Tool = ({children, executeCommand}) => {
    return ( 
        <Button onClick={executeCommand}>
            {children}
        </Button>
     );
}

const Button = styled.button`
    background: none;
    border: none;
    padding: 5px;
    border-radius: 2px;
    color: #767676;
    cursor: pointer;

    &:hover {
        background: #eeeeee;
        color: black;
    }

    &:focus {
        outline: none;
    }
`;
 
export default Tool;