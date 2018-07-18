import React, { Component } from 'react';
import styled from 'styled-components';


class MenuCommand extends Component {

    render() {
        const {commandName, type } = this.props;
        switch(type) {
            case 'button':
                return ( 
                    <Button>
                        <Text>
                            {commandName}
                        </Text>
                    </Button>
                );
            case 'file':
                return (
                    
            
                <Button>
                    <File type="file" accept="text/plain" name="file" />
                    <Text for="file">Open</Text>
                </Button>
                    
                );
            default:
                return null
        }
    }
    
}

const Button = styled.button`
    width: 100%;
    padding: 6px 38px;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    &:hover {
        background: #eeeeee;
    }
`;

const File = styled.input`
    position: absolute;
    left: 0;
    opacity: 0;
`;

const Text = styled.label`
    margin: 0px;
    font-size: 13px;
`;
 
export default MenuCommand;