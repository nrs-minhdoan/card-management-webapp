import React, {Component} from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 200px;
    padding: 3px;
    font-size: 14px;
    font-family: 'Patrick Hand', cursive;
`

class TextInput extends Component {
    pressEnter = (event) => {
        if (event.keyCode === 13 && this.props.content !== "") {
            this.props.onAddCard();
        }
    }

    render() {
        return (
            <Input
                type="text"
                placeholder="Enter card title..."
                value={this.props.content}
                onChange={(event) => this.props.onChangeContent(event.target.value)}
                onKeyDown={this.pressEnter}/>
        );
    };
}

export default TextInput;