import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import {colors} from './colors';

const ColorPicker = ({executeCommand}) => {
    return ( 
        <Grid>
            {
                colors.map((color, index) => {
                    return (
                        <Section executeCommand={executeCommand} key={index} colors={color.colors} />
                    )
                })
            }
        </Grid>
     );
}

const Grid = styled.div`
    
`;

 
export default ColorPicker;