import React from 'react';
import styled from 'styled-components';

const EditorPage = () => {
    return ( 
        <Page contentEditable>

        </Page>
     );
}

const Page = styled.div`
    width: 650px;
    height: 1000px;
    margin: 120px auto 40px auto;
    padding: 90px;
    background: white;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    border-radius: 2px;

    &:focus {
        outline: none;
    }
`;
 
export default EditorPage;