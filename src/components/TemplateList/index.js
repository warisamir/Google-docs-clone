import React from 'react';
import styled from 'styled-components';

import TemplateItem from './TemplateItem';

const TemplateList = () => {
    return ( 
            
        <Wrapper>
            <h5 style={{margin: 0, fontSize: '14px', color: '#c6d2db'}}>Start a new document</h5>
            <div style={{display: 'flex', flexDirection: 'row'}}>
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
            </div>
           
        </Wrapper> 
     );
}

const Wrapper = styled.div`
    height: 310px;
    display: flex;
    background: #424249;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
 
export default TemplateList;