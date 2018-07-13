import React, { Component } from 'react';
import styled from 'styled-components';

import ColorPicker from '../../../ColorPicker';

class ToolExpanded extends Component {

    componentDidMount() { 
        document.addEventListener('click', this.closeExpanded, false);  
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closeExpanded, false);
    }

    closeExpanded = () => {
        this.props.closeExpanded();
    }

    render() {
        if(this.props.isExpanded) {
            return (
                <Expanded>
                    <ColorPicker />
                </Expanded>
            )
        }
    
        return null;
    }
}

const Expanded = styled.div`
    position: absolute;
    left: 0;
    min-width: 180px;
    background white;
    box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
    border: 1px solid #c3c3c3;
`;
 
export default ToolExpanded;