import React from 'react';
import styled from 'styled-components';

import { fontStyles } from '../../data/fontStyles';

const FontStyleList = ({executeCommand}) => {
    
    return ( 
        <div>
            {
                fontStyles.map(style => 
                <Button 
                    key={style.name} 
                    color={style.color} 
                    size={style.size}
                    onClick={() => executeCommand(style.size, style.color)}
                > 
                {style.name} 
                </Button>)
            }
        </div>
     );
}

const Button = styled.button`
    width: 100%;
    padding: 15px;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    font-size: ${props => (props.size * 3) + 10}px;
    color: ${props => props.color};
    &:hover {
        background: #eeeeee;
    }
`;
 
export default FontStyleList;