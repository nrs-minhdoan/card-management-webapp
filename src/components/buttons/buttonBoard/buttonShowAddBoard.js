import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const CreateBoard = styled.button`
    border-radius: 5px;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgba(237, 239, 240, 0.5);
    font-weight: bold;
    font-size: 16px;
    font-family: 'Patrick Hand', cursive;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 5px 5px 0px #888888;
        z-index: 1;
        background: rgb(237, 239, 240);
        text-decoration: underline;
    }
`

class CreateNewBoard extends Component {
    render() {
        return (
            <CreateBoard
                onClick={this.props.showModal}>
                Create new board ...
            </CreateBoard>
        );
    };
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        showModal: () => {
            dispatch({type: "SHOW_MODAL"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewBoard);