import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {createNewBoard} from '../../../firebase/board';

const Button = styled.button`
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    font-family: 'Patrick Hand', cursive;
`

class ButtonCreateBoard extends Component {
    onClickButton = () => {
        createNewBoard(this.props.title, this.props.color);
        this.props.hiddenModal();
        this.props.resetModal();
    }

    render() {
        return (
            <Button
                style={this.props.title === "" ?
                    {color: "rgb(165, 172, 176)"} :
                    {background: "rgb(90, 172, 68)", color: "white"}}
                disabled={this.props.title === "" ? true : false}
                onClick={this.onClickButton}>
                Create Board
            </Button>
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
        hiddenModal: () => {
            dispatch({type: "HIDDEN_MODAL"})
        },
        resetModal: () => {
            dispatch({type: "RESET_MODAL"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCreateBoard)