import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import {colors} from './colors';

const ColorPicker = () => {
    return ( 
        <Grid>
            {
                colors.map((color, index) => {
                    return (
                        <Section key={index} colors={color.colors} />
                    )
                })
            }
        </Grid>
     );
}

const Grid = styled.div`
    
`;

 
export default ColorPicker;