import React from 'react';
import styled from 'styled-components';

import MenuCommand from '../MenuCommand';

const MenuSection = ({commands}) => {
    return ( 
        <Section>
            {
                commands.list.map(command => <MenuCommand key={command.name} commandName={command.name} command={command.command} type={command.type}/>)
            }
        </Section>
     );
}

const Section = styled.div`
    padding: 8px 0;
    border-bottom: 1px solid #ebebeb;
`;

 
export default MenuSection;