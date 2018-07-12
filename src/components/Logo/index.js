import React from 'react';

import logoImage from './docs.svg';

const Logo = () => {
    const style = {
        width: '35px',
        height: 'auto'
    }
    return ( 
        <img style={style} src={logoImage} alt="Logo"/>
     );
}
 
export default Logo;