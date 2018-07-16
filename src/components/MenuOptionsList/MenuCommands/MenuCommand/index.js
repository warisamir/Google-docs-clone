import React, { Component } from 'react';
import styled from 'styled-components';

const executeCommand = (command) => {
    switch(command) {
        case 'new':
                document.getElementById('page').innerHTML='';
            break;
        case 'open':
            
            const file = new File();
        default:
            console.log('works');
    }
}

class MenuCommand extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    executeCommand = () => {

    }
    
    render() {
        const {commandName, type, command } = this.props;
        switch(type) {
            case 'button':
                return ( 
                    <Button onClick={() => executeCommand(command)}>
                        <Text>
                            {commandName}
                        </Text>
                    </Button>
                );
            case 'file':
                return (
                    <Button>
                        <Text>Open</Text>
                        <File innerRef={this.fileInput} type={type} value="" style={{display: 'none'}} />
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

    &:hover {
        background: #eeeeee;
    }
`;

const File = styled.input`
    // width: 100%;
    // padding: 6px 38px;
    // text-align: left;
    // background: none;
    // border: none;
    // cursor: pointer;

    // &:hover {
    //     background: #eeeeee;
    }
`;

const Text = styled.p`
    margin: 0px;
    font-size: 13px;
`;
 
export default MenuCommand;