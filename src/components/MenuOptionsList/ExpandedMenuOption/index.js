import React, { Component } from 'react';
import styled from 'styled-components';

import MenuCommands from '../MenuCommands';

class ExpandedMenuOption extends Component {

    componentDidMount() { 
        document.addEventListener('click', this.closeMenu, false);  
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closeMenu, false);
    }

    closeMenu = () => {
        this.props.closeMenu();
    }

    render() {
        return ( 
            <ExpandedOption onBlur={() => console.log('blurred')}>
                <MenuCommands commands={this.props.commands} />
            </ExpandedOption>
         );
    }
    
}

const ExpandedOption = styled.div`
    position: absolute;
    top: 26px;
    left: 0;
    min-width: 180px;
    background white;
    box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
    border-radius: 2px;
    border: 1px solid #c3c3c3;
    z-index: -1;
    
`;
 
export default ExpandedMenuOption;