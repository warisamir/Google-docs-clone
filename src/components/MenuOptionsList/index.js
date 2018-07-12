import React from 'react';
import styled from 'styled-components';

import MenuOption from './MenuOption';
import options from './options';

const MenuOptionsList = () => {
    return ( 
        <List>
            {
                options.map(option => <MenuOption key={option.name} title={option.name} commands={option.commands} /> )
            }
        </List>
     );
}

const List = styled.div`
    display: flex;
    position: relative;
`;
 
export default MenuOptionsList;