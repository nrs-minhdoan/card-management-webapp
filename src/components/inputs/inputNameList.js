import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {createNewList} from '../../firebase/list';

const Input = styled.input`
    width: 90%;
    padding: 3px;
    font-size: 14px;
    font-family: 'Patrick Hand', cursive;
`

class TextInput extends Component {
    onChangeName = (event) => {
        this.props.changeName(event.target.value);
    }

    pressEnter = (event) => {
        if (event.keyCode === 13 && this.props.name !== "") {
            createNewList(this.props.id, this.props.name);
            this.props.resetAddList();
            this.props.changeStatus();
        }
    }

    render() {
        return (
            <Input
                type="text"
                placeholder="Enter list title..."
                value={this.props.name}
                onChange={this.onChangeName}
                onKeyDown={this.pressEnter}/>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        name: state.list.name,
        index: state.list.index,
        id: state.list.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (name) => {
            dispatch({type: "CHANGE_NAME", name})
        },
        resetAddList: () => {
            dispatch({type: "RESET_ADD_LIST"})
        },
        changeStatus: () => {
            dispatch({type: "HIDDEN_OR_SHOW"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);