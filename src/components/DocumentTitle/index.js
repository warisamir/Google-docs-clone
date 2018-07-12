import React, { Component } from 'react';

import EditableTitle from './EditableTitle';
import Title from './Title';

class DocumentTitle extends Component {
    state = { 
        title: 'Document Name',
        editable: false
     }

    toggleEditable = () => {
        let editable = this.state.editable;
        this.setState({ editable: !editable });
    }

    editTitle = (e) => {
        this.setState({ title: e.target.value });
    }

    render() { 
        const {editable, title} = this.state;
        if(!editable) {
            return (
                <Title 
                    toggleEditable={this.toggleEditable}
                    text={title}
                />
            )
        } else {
            return (
                <EditableTitle 
                    text={title}
                    toggleEditable={this.toggleEditable}
                    editTitle={this.editTitle}
                />
            )
        }
    }
}



 
export default DocumentTitle;