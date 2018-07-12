import React from 'react';

import MenuSection from './MenuSection';

const MenuCommands = ({commands}) => {
    return ( 
        <div>
            {
                commands.map((command, index) => (
                    <MenuSection key={index} commands={command} />
                ))
            }            
        </div>
     );
}
 
export default MenuCommands;