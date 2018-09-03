import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import TextInput from '../inputs/inputTitleBoard';
import ListBox from '../lists/box-color/listColor';
import ButtonCreateBoard from '../buttons/buttonBoard/buttonCreateBoard';

const Modal = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`

const ModalContent = styled.div`
    margin: 5% auto;
    padding: 20px;
    width: 30%;
`

const Close = styled.span`
    color: black;
    float: right;
    margin-top: -10px;
    margin-right: -20px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;

    &:hover, &:focus {
        color: #ED213A;
    }
`

const Wrapper = styled.div`
    text-align: center;
`

class ModalCreateBoard extends Component {
    onHiddenModal = () => {
        this.props.hiddenModal();
        this.props.resetModal();
    }

    render() {
        return (
            <Modal style={{display: this.props.isShowing}}>
                <ModalContent>
                    <Close onClick={this.onHiddenModal}>
                        &times;
                    </Close>
                    <Wrapper>
                        <TextInput/>
                        <ListBox/>
                        <ButtonCreateBoard/>
                    </Wrapper>
                </ModalContent>
            </Modal>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        isShowing: state.board.isShowing
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateBoard);