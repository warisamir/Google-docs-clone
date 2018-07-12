import React from 'react';
import styled from 'styled-components';

class EditableTitle extends React.Component {
    constructor(props) {
        super(props);

        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    render() {
        const { toggleEditable, text, editTitle} = this.props;
        return (
            <Input 
                innerRef={this.textInput} 
                onBlur={toggleEditable} 
                onChange={editTitle}
                value={text}
            />
        )
    }
}

const Input = styled.input`
    max-width: 160px;
    font-size: 18px;
    font-family: inherit;
    padding: 2px 5px;
    border: 1px solid #dcdcdc;
    border-radius: 2px;

    &:focus {
        outline: none;
        border: 1px solid #4f8ef5;
        -moz-box-shadow:    inset 0 0 10px rgba(0,0,0,0.05);
        -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
        box-shadow:         inset 0 0 10px rgba(0,0,0,0.05);
    }
`;
 
export default EditableTitle;