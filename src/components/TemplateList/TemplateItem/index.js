import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import MdAdd from 'react-icons/lib/md/add';

const TemplateItem = ({history, blank, image, label, theme}) => {
    const newDocument = () => {
        history.push('/document');
    }
    if(!blank) {
        return ( 
            <Item>
                <ItemImage onClick={() => newDocument()}>
                    <Image src={image} alt={label}/>
                </ItemImage>
                <Label>{label}</Label>
                <p style={{margin: 0, color: 'white', fontSize: '12px'}}>{theme}</p>
            </Item>
         );
    } else {
        return (
            <Item>
                <ItemImage onClick={() => newDocument()} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <MdAdd size="60" color="#4285f4" />
                </ItemImage>
                <Label style={{margin:'14px 0'}}>Blank</Label>
            </Item>
        )
    }
}

const Item = styled.div`
    margin: 0px 22px;
`;

const ItemImage = styled.div`
    width: 148px;
    height: 184px;
    background: white;
    margin: 16px 0;
    transition: 0.3s ease-in-out;
    border: 3px solid rgba(0,0,0,0);
    cursor: pointer;
    &:hover {
        border: 3px solid #4285f4;
    }
`;

const Label = styled.p`
    color: white;
    font-weight: bold;
    margin: 2px 0;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;
 
export default withRouter(TemplateItem);