import React from 'react';
import styled from 'styled-components';

const Section = ({colors, executeCommand}) => {
    return ( 
        <ColorsSection>
            {
                colors.map(color => {
                    return (
                        <Color key={color} onClick={() => executeCommand(color)} hex={color} />
                    )
                })
            }
        </ColorsSection>
     );
}
 
const ColorsSection = styled.div`
    margin: 10px;
`;

const Color = styled.button`
    width: 15px;
    height: 15px;
    margin: 0px 1px;
    border: 1px solid rgba(0,0,0,0);
    cursor: pointer;
    background: ${props => props.hex};
    &:hover {
        border: 1px solid black;
    }
`;

export default Section;