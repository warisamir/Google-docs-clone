import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import logoIcon from './docs.svg';

const DocumentListItem = ({history,name}) => {
    const newDocument = () => {
        history.push('/document');
    }
    return ( 
        <Item onClick={() => newDocument()}>
            <img style={{height: '40%'}} src={logoIcon} alt="Document"/>
            <p style={{fontSize: '14px', paddingLeft: '20px'}}>{name}</p>    
        </Item>
     );
}

const Item = styled.div`
    height: 50px;
    background: white;
    box-shadow: 0px 0px 1px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    padding: 0px 20px;
    margin: 10px 0;
    cursor: pointer;
`;
 
export default withRouter(DocumentListItem);