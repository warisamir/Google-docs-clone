import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';
import DocumentTitle from '../DocumentTitle';
import Button from '../Button';
import MenuOptionsList from '../MenuOptionsList';
import EditorToolbar from '../EditorToolbar';

const Topbar = () => {
    return ( 
        <div style={{position: 'absolute', width: '100%'}}>
            <Wrapper>
                <HorizontalPanel>
                    <Logo />    
                    <VerticalPanel style={{margin: '0px 15px'}}>
                        <DocumentTitle />
                        <MenuOptionsList />
                    </VerticalPanel>      
                </HorizontalPanel>
                <div>
                    <Button>Save</Button>
                </div>
            </Wrapper>
            <EditorToolbar />    
        </div>
        
     );
}

const HorizontalPanel = styled.div`
    display: flex;
    align-items: center;
`;

const VerticalPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Wrapper = styled.div`
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
    padding: 0px 30px;
    background: white;
`;
 
export default Topbar;