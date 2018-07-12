import React, { Component } from 'react';
import styled from 'styled-components';

import CommandButton from '../CommandButton';
import icon from './icons/bold.png';

class CommandList extends Component {

    executeCommand = (command, args) => {
        document.execCommand(command);
    }

    render() {
        return ( 
            <List>
                <CommandButton 
                    command='bold'
                    args={null}
                    icon={icon}
                    executeCommand={this.executeCommand} 
                />   
            </List>
         );
    }
    
}

const List = styled.div`
    display: flex;
`;

export default CommandList;