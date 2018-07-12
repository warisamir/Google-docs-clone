import React from 'react';
import styled from 'styled-components';

import './textStyles.css';
import EditorPage from './EditorPage';

const Editor = () => {
    return ( 
        <Wrapper>
          <EditorPage />  
        </Wrapper>
     );
}

const Wrapper = styled.div`
    height: 100vh;
    overflow: scroll;
    background: #eeeeee;
`;
 
export default Editor;