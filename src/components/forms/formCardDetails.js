import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {editCard} from '../../firebase/card';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.input`
    border: none;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
    font-size: 23px;
    font-weight: bold;
    font-family: 'Patrick Hand', cursive;
`

const Span = styled.span`
    margin-top: 10px;
    margin-bottom: -20px;
    font-size: 15px;
`

const Description = styled.textarea`
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    font-family: 'Patrick Hand', cursive;
`

const Save = styled.button`
    margin-top: 20px;
    width: 20%;
    border-radius: 5px;
    background: black;
    color: white;
    font-size: 16px;
    font-family: 'Patrick Hand', cursive;
    cursor: pointer;
`

class FormCardDetails extends Component {
    clickButtonSave = () => {
        editCard(this.props.idBoard, this.props.idList, this.props.id, this.props.content, this.props.description, this.props.index);
        this.props.onHiddenModal();
    }

    pressEnter = (event) => {
        if(event.keyCode === 13 && this.props.content !== "") {
            this.clickButtonSave();
        }
    }

    render() {
        return (
            <Wrapper>
                <Title
                    style={{color: this.props.color}}
                    value={this.props.content}
                    onChange={(event) => this.props.changeContent(event.target.value)}
                    onKeyDown={this.pressEnter}/>
                <Span>Description:</Span><br/>
                <Description
                    value={this.props.description}
                    onChange={(event) => this.props.changeDescription(event.target.value)}>
                </Description>
                <Save
                    style={this.props.content === "" ? null : {background: "rgb(90, 172, 68)"}}
                    disabled={this.props.content === ""}
                    onClick={this.clickButtonSave}>
                    Save
                </Save>
            </Wrapper>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        id: state.card.id,
        content: state.card.content,
        description: state.card.description,
        index: state.card.index,
        idList: state.card.idList,
        idBoard: state.list.id,
        color: state.board.color,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHiddenModal: () => {
            dispatch({type: "HIDDEN_DETAIL"})
        },
        changeContent: (content) => {
            dispatch({type: "CHANGE_CONTENT", content})
        },
        changeDescription: (description) => {
            dispatch({type: "CHANGE_DESCRIPTION", description})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCardDetails)