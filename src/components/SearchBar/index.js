import React, { Component } from 'react';
import styled from 'styled-components';

import MdSearch from 'react-icons/lib/md/search';

class SearchBar extends Component {
    state = { 
        isFocused: false,
        value: ''
     }

    handleInputClick = () => {
        this.setState({isFocused: true});
     }

    handleInputBlur = () => {
        this.setState({isFocused: false});
    }

    handleInputChange = (e) => {
        this.setState({value: e.target.value})
    }

    render() { 
        return ( 
            <InputBlock focused={this.state.isFocused} onClick={this.handleInputClick} onBlur={this.handleInputBlur}>
                <div>
                    <MdSearch color={this.state.isFocused ? 'black' : 'white'} size="20" />
                </div>
                <Input onChange={this.handleInputChange} value={this.state.value} focused={this.state.isFocused} placeholder="Search" />
            </InputBlock>
         );
    }
}

const InputBlock = styled.div`
    display: flex;
    background: ${props => props.focused ? 'rgba(255,255,255, 1)' : 'rgba(255,255,255, 0.3)'};
    width: 500px;
    padding: 10px 5px;
    border-radius: 4px;
    transition: background 0.3s ease-in-out;
`;

const Input = styled.input`
    font-family: inherit;
    font-size: 16px;
    font-weight:  500;
    color: ${props => props.focused ? 'black' : 'white'};
    width: 100%;
    background: none;
    border: none;
    padding: 0px 10px;

    &::placeholder {
        color: ${props => props.focused ? 'black' : 'white'};
    }

    &:focus {
        outline: 0;
    }
`;
 
export default SearchBar;