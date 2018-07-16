import React, { Component } from 'react';
import styled from 'styled-components';

import Tool from './Tool';

import unLink from './link.png';
import {
    MdUndo,
    MdRedo,
    MdLocalPrintShop,
    MdFormatPaint,
    MdFormatBold,
    MdFormatItalic,
    MdFormatUnderlined,
    MdFormatColorText,
    MdEdit,
    MdArrowDropDown,
    MdInsertLink,
    MdLeakRemove,
    MdImage,
    MdFormatAlignLeft,
    MdFormatAlignJustify,
    MdFormatAlignRight,
    MdFormatAlignCenter,
    MdFormatListNumbered,
    MdFormatListBulleted,
    MdFormatIndentIncrease,
    MdFormatIndentDecrease
} from 'react-icons/lib/md/';


class EditorToolbar extends Component {
    state = {
        fontStyle: 'Normal Text',
        fontSize: 16
    }

    executeCommand = (command, arg) => {
        switch(command) {
            case 'changeFontStyle':
                console.log(command, arg);
                document.execCommand('fontSize', null, arg.size)
                document.execCommand('foreColor', null, arg.color);     
                this.setState({fontStyle: arg.name});      
                break;
            case 'createLink':
                const href = prompt('Link To:');
                document.execCommand(command, null, href);
                break;
            case 'insertImage':
                const src = prompt('Image URL:');
                document.execCommand(command, null, src);
                break;
            default:
                document.execCommand(command, null, arg);
                break;
        }
    }

    render() {
        const iconSize = 18;
        return ( 
            <Toolbar>
                <Section>
                    <Tool executeCommand={() => this.executeCommand('undo')}>
                        <MdUndo size={iconSize} />
                    </Tool>
                    <Tool executeCommand={() => this.executeCommand('redo')}>
                        <MdRedo size={iconSize} />
                    </Tool>
                    <Tool executeCommand={() => window.print()}>
                        <MdLocalPrintShop size={iconSize} />
                    </Tool>
                    <Tool>
                        <MdFormatPaint size={iconSize} />
                    </Tool>
                </Section>
                <Section>
                    <Tool expandable type="fontStyleList" executeCommand={(size, color, name) => this.executeCommand('changeFontStyle', {size, color, name})}>
                        {this.state.fontStyle} <MdArrowDropDown size="14" />
                    </Tool>
                </Section>
                <Section>
                    <Tool expandable type="fontSizeList" executeCommand={(size) => this.executeCommand('fontSize', size)}>
                        {this.state.fontSize} <MdArrowDropDown size="14" />
                    </Tool>
                </Section>
                <Section>
                    <Tool executeCommand={() => this.executeCommand('bold')}>
                        <MdFormatBold size={iconSize} />
                    </Tool>
                    <Tool executeCommand={() => this.executeCommand('italic')}>
                        <MdFormatItalic size={iconSize} />
                    </Tool>
                    <Tool executeCommand={() => this.executeCommand('underline')}>
                        <MdFormatUnderlined size={iconSize} />
                    </Tool>
                    <Tool expandable type="colorPicker" executeCommand={(color) => this.executeCommand('foreColor', color)}>
                        <MdFormatColorText size={iconSize} />
                    </Tool>
                    <Tool expandable type="colorPicker" executeCommand={(color) => this.executeCommand('hiliteColor', color)}>
                        <MdEdit size={iconSize} />
                    </Tool>
                </Section>
                <Section>
                    <Tool executeCommand={() => this.executeCommand('createLink')}>
                        <MdInsertLink size={iconSize} />
                    </Tool>
                    <Tool executeCommand={() => this.executeCommand('unlink')}>
                        <MdLeakRemove size={iconSize} />
                    </Tool>
                    <Tool executeCommand={() => this.executeCommand('insertImage')}>
                        <MdImage size={iconSize} />
                    </Tool>
                </Section>
                <Section>
                    <Tool executeCommand={() => this.executeCommand('justifyLeft')}>
                        <MdFormatAlignLeft size={iconSize} />
                    </Tool>
                    <Tool executeCommand={() => this.executeCommand('justifyCenter')}>
                        <MdFormatAlignCenter size={iconSize} />
                    </Tool>
                    <Tool executeCommand={() => this.executeCommand('justifyRight')}>
                        <MdFormatAlignRight size={iconSize} />
                    </Tool>
                    <Tool executeCommand={() => this.executeCommand('justifyFull')}>
                        <MdFormatAlignJustify size={iconSize} />
                    </Tool>
                </Section>
                <Section>
                    <Tool executeCommand={() => this.executeCommand('insertOrderedList')}>
                        <MdFormatListNumbered size={iconSize} />
                    </Tool>
                    <Tool executeCommand={() => this.executeCommand('insertUnorderedList')}>
                        <MdFormatListBulleted size={iconSize} />
                    </Tool>
                    <Tool executeCommand={() => this.executeCommand('outdent')}>
                        <MdFormatIndentDecrease size={iconSize} />
                    </Tool>
                    <Tool executeCommand={() => this.executeCommand('indent')}>
                        <MdFormatIndentIncrease size={iconSize} />
                    </Tool>
                </Section>
            </Toolbar>
         );
    }
   
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