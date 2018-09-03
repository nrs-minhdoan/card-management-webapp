import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {createNewBoard} from '../../firebase/board';

const AddTitleBoard = styled.div`
    padding: 25px 20px; 
    border-radius: 5px;
`

const Input = styled.input`
    width: 85%;
    padding: 10px 3px;
    border: none;
    border-radius: 5px;
    background: transparent;
    color: white;
    font-weight: bold;
    font-size: 18px;
    font-family: 'Patrick Hand', cursive;

    &::-webkit-input-placeholder { color:#fff; }

    &:hover, &:focus {
        background: rgba(255, 255, 255, 0.15);
    }
`

class TextInput extends Component {
    changeTitle = (event) => {
        this.props.onChangeTitle(event.target.value);
    }

    pressEnter = (event) => {
        if (event.keyCode === 13 && this.props.title !== "") {
            createNewBoard(this.props.title, this.props.color);
            this.props.hiddenModal();
            this.props.resetModal();
        }
    }

    render() {
        return (
            <AddTitleBoard style={{background: this.props.color}}>
                <Input
                    type="text"
                    placeholder="Add Title Board..."
                    value={this.props.title}
                    onChange={this.changeTitle}
                    onKeyDown={this.pressEnter}/>
            </AddTitleBoard>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        title: state.board.title,
        color: state.board.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeTitle: (title) => {
            dispatch({type: "CHANGE_TITLE", title})
        },
        hiddenModal: () => {
            dispatch({type: "HIDDEN_MODAL"})
        },
        resetModal: () => {
            dispatch({type: "RESET_MODAL"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);