import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {createNewList} from '../../firebase/list';
import TextInput from '../inputs/inputNameList';
import ButtonAddList from '../buttons/buttonList/buttonAddList';

const Add = styled.div`
    height: 60px;
    width: 210px;
    border-radius: 5px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    padding: 5px;
    margin-top: 20px;
    margin-left: 20px;
    background: rgb(226, 228, 230);
`

const Column = styled.div`
    width: 93%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

const Close = styled.span`
    color: black;
    float: left;
    margin-top: 3px;
    margin-left: 10px;
    font-size: 23px;
    cursor: pointer;

    &:hover, &:focus {
        color: #ED213A;
    }
`

class FormAddList extends Component {
    onClose = () => {
        this.props.changeStatus();
        this.props.resetAddList();
    }

    onAddList = () => {
        const array = this.props.lists === [] ? [{index: -1}] : this.props.lists;
        const index = array.reduce((i, item) => (i = item.index + 1), 0);
        createNewList(this.props.id, this.props.name, index);
        this.props.resetAddList();
        this.props.changeStatus();
    }

    render() {
        return (
            <Add>
                <TextInput onAddList={this.onAddList}/>
                <Column>
                    <ButtonAddList onAddList={this.onAddList}/>
                    <Close onClick={this.onClose}>
                        &times;
                    </Close>
                </Column>
            </Add>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        id: state.list.id,
        name: state.list.name,
        lists: state.list.lists,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeStatus: () => {
            dispatch({type: "HIDDEN_OR_SHOW"})
        },
        resetAddList: () => {
            dispatch({type: "RESET_ADD_LIST"})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddList);