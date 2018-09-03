import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import FormCardDetails from '../forms/formCardDetails';

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
    border-radius: 5px;
    background: white;
`

const Close = styled.span`
    color: black;
    float: right;
    margin-top: -25px;
    margin-right: -10px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;

    &:hover, &:focus {
        color: #ED213A;
    }
`

class CardDetail extends Component {
    render() {
        return (
            <Modal style={{display: this.props.isShowing}}>
                <ModalContent>
                    <Close onClick={this.props.onHiddenModal}>
                        &times;
                    </Close>
                    <FormCardDetails/>
                </ModalContent>
            </Modal>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        isShowing: state.card.isShowing
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHiddenModal: () => {
            dispatch({type: "HIDDEN_DETAIL"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetail);