import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color: black;
    padding-top: 3px;
    margin-top: 5px; 
    margin-left: 0px;   
    float: left;
    font-size: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Patrick Hand', cursive;
    text-align: center;
`

export default class ButtonAddCard extends Component {
    render() {
        return (
            <Button
                style={this.props.content === "" ? null : {color: "white", background: "rgb(90, 172, 68)"}}
                disabled={this.props.content === ""}
                onClick={this.props.onAddCard}>
                Add Card
            </Button>
        );
    };
}
