import React from 'react';
import styled from 'styled-components';

const FontSizeList = ({executeCommand}) => {   
    const fontSizes = [
        {
            label: 10,
            size: 1
        },
        {
            label: 13,
            size: 2
        },
        {
            label: 16,
            size: 3
        },
        {
            label: 18,
            size: 4
        },
        {
            label: 24,
            size: 5
        },
        {
            label: 32,
            size: 6
        },
        {
            label: 48,
            size: 6
        },
        
    ]
    return ( 
        <div>
            {
                fontSizes.map(size => 
                <Button 
                    key={size.label} 
                    onClick={() => executeCommand(size.size)}
                > 
                {size.label} 
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
    font-size: 10px;
    color: black;
    &:hover {
        background: #eeeeee;
    }
`;
 
export default FontSizeList;