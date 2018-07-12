import React from 'react';
import styled from 'styled-components';

import Tool from './Tool';
import { executeCommand } from '../../execFunctions';

import {
    MdUndo,
    MdRedo,
    MdLocalPrintShop,
    MdFormatPaint,
    MdFormatBold,
    MdFormatItalic,
    MdFormatUnderlined,
    MdFormatColorText,
} from 'react-icons/lib/md/';


const EditorToolbar = () => {
    const iconSize = 18;
    return ( 
        <Toolbar>
            <Section>
                <Tool>
                    <MdUndo size={iconSize} />
                </Tool>
                <Tool>
                    <MdRedo size={iconSize} />
                </Tool>
                <Tool>
                    <MdLocalPrintShop size={iconSize} />
                </Tool>
                <Tool>
                    <MdFormatPaint size={iconSize} />
                </Tool>
            </Section>
            <Section>
                <Tool executeCommand={() => executeCommand('bold', null)}>
                    <MdFormatBold size={iconSize} />
                </Tool>
                <Tool executeCommand={() => executeCommand('italic', null)}>
                    <MdFormatItalic size={iconSize} />
                </Tool>
                <Tool executeCommand={() => executeCommand('underline', null)}>
                    <MdFormatUnderlined size={iconSize} />
                </Tool>
                <Tool>
                    <MdFormatColorText size={iconSize} />
                </Tool>
            </Section>
        </Toolbar>
     );
}

const Toolbar = styled.div`
    height: 35px;
    display: flex;
    background: white;
    padding: 0px 30px;
`;

const Section = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0px 5px;
    border-right: 1px solid #e0e0e0;
`;
 
export default EditorToolbar;