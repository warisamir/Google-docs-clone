import React from 'react';
import styled from 'styled-components';

import DocumentListItem from './DocumentListItem';

const DocumentsList = () => {
    return ( 
        <List>
            <DocumentListItem name="Document Name" />
            <DocumentListItem name="SDLC Notes" />
        </List>
     );
}

const List = styled.div`
    width: 60%;
    margin: 0 auto;
`;
 
export default DocumentsList;