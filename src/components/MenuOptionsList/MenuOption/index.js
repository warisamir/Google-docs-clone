import React, { Component } from 'react';
import styled, {css} from 'styled-components';

import ExpandedMenuOption from '../ExpandedMenuOption';

class MenuOption extends Component {
    state = {
        isExpanded: false
    }

    expandMenu = () => {
        let expanded = this.state.isExpanded; 
        this.setState({isExpanded: !expanded });
    }

    render() {
        return ( 
            <Option>
                <Title 
                    expanded={this.state.isExpanded}
                    onClick={this.expandMenu}
                    
                >
                    {this.props.title}
                </Title>
                {
                    this.state.isExpanded ? <ExpandedMenuOption commands={this.props.commands} closeMenu={this.expandMenu} /> : null
                }
            </Option>
         );
    }
}

const Option = styled.div`
    font-size: 14px;
    z-index: 2; 
    position: relative;
`;

const Title = styled.p` 
    padding: 5px;
    margin: 0;
    border: 1px solid rgba(0,0,0,0);
    
    ${props => props.expanded && css`
        box-shadow: 0px 0px 2px rgba(0,0,0,0.1);
        border: 1px solid #c3c3c3;
        border-bottom: 0px;
        background: white;
    `}
    &:hover {
        background: #eeeeee;
    }
`;
 
export default MenuOption;