import React from 'react';
import styled from 'styled-components';

//onMouseEnter={toggleEditable}

const Title = ({text, toggleEditable}) => <Text onClick={toggleEditable}> {text} </Text>;
 
const Text = styled.p`
    margin: 0px;
    font-size: 18px;
    padding: 2px 5px;
    border: 1px solid rgba(0,0,0,0);
    border-radius: 2px;

    &:hover {
        border: 1px solid #cacaca;
    }
`;

export default Title;