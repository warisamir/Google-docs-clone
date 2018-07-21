import React from 'react';
import styled from 'styled-components';

import TemplateItem from './TemplateItem';

const TemplateList = () => {
    return ( 
        <Wrapper>
            <TemplateItem 
                blank
            
            />
            <TemplateItem 
                image="https://img.resume.com/templates/17.png"
                label="Resume"
                theme="Spearmint"
            
            />
            <TemplateItem 
                image="https://d.novoresume.com/images/doc/modern-cover-letter-template.png"
                label="Letter"
                theme="Classic"
            
            />
            <TemplateItem 
                image="https://wp.jsstatic.com/wp-content/uploads/sites/6/2016/05/Sample-Resume-Format-for-Fresh-Graduates-Single-Page-41.png"
                label="Resume"
                theme="Sun"
            
            />
            <TemplateItem 
                image="https://payload153.cargocollective.com/1/1/49907/5360308/brochure%20cover%20905px_905.jpg"
                label="Brochure"
                theme="Ocean"
            
            />
        </Wrapper>
     );
}

const Wrapper = styled.div`
    height: 298px;
    background: #424249;
    display: flex;
    justify-content: center;
    align-items: center;
`;
 
export default TemplateList;