import React, { Component } from 'react';
import styled from 'styled-components';

import './textStyles.css';
import EditorPage from './EditorPage';

class Editor extends Component {
    render() {
        return ( 
            <Wrapper>
              <EditorPage />  
            </Wrapper>
         );
    }    
}

const Wrapper = styled.div`
    height: 100vh;
    overflow: scroll;
    background: #eeeeee;

    @media print {
        height: 100%;
        overflow: hidden;
      }
`;
 
export default Editor;