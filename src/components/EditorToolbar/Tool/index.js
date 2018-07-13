import React,{ Component} from 'react';
import styled, { css } from 'styled-components';

import ToolExpanded from './ToolExpanded';

class Tool extends Component {

    state = {
        expandable: false,
        isExpanded: false
    }

    handleClick = () => {
        if(this.props.expandable) {
            let expanded = this.state.isExpanded;
            this.setState({isExpanded: !expanded});
        } else {
            this.props.executeCommand();
        }
    }

    render(){
        return ( 
            <div style={{position:'relative'}}>
                <Button active={this.state.isExpanded} onClick={this.handleClick}>
                            {this.props.children}
                </Button>
                {
                    this.state.isExpanded ? <ToolExpanded closeExpanded={this.handleClick} type={this.props.type} isExpanded={this.state.isExpanded} /> : null
                }
            </div>
         );
    }
    
}

const Button = styled.button`
    background: none;
    border: none;
    padding: 5px;
    border-radius: 2px;
    color: #767676;
    cursor: pointer;
    ${props => props.active && css`
        background: #eeeeee;
        color: black;
    `}

    &:hover {
        background: #eeeeee;
        color: black;
    }

    &:focus {
        outline: none;
    }
`;
 
export default Tool;