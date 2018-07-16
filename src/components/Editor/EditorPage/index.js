import React from 'react';
import styled from 'styled-components';

const EditorPage = () => {
    return ( 
        <Page id="page" contentEditable>

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
    font-size: 16px;

    > img {
        width: 100%;
        height: auto;
    }

    &:focus {
        outline: none;
    }

    @media print {
        width: auto;
        height: 100%;
        margin: 0;
        box-shadow: none;
        border-radius: 0px;
      }
`;
 
export default EditorPage;