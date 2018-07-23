import React from 'react';
import styled from 'styled-components';

import {
    MdMenu,
    MdApps,
    MdNotifications
} from 'react-icons/lib/md/';
import SearchBar from '../SearchBar';

const DashboardTopbar = () => {
    return ( 
        <Topbar>
            <Section>
                <MdMenu size="25" color="white" />
                <h2 style={{fontWeight: 500, padding: '0px 25px'}}>Noodle Docs</h2>
                <SearchBar />
            </Section>
            <Section>
                <div style={{margin: '0 10px'}}>
                    <MdApps size="25" color="white" />
                </div>
                <div style={{margin: '0 10px'}}>
                    <MdNotifications size="25" color="white" />
                </div>
                
            </Section>
        </Topbar>
     );
}
 
const Topbar = styled.div`
    height: 64px;
    background: #4285f4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px;
    color: white;
`;

const Section = styled.div`
    display: flex;
    align-items: center;
`;

export default DashboardTopbar;