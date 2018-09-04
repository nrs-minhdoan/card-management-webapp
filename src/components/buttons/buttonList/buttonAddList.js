import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {createNewList} from '../../../firebase/list';

const Button = styled.button`
    padding-top: 2px;
    margin-top: 5px;    
    float: left;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    font-family: 'Patrick Hand', cursive;
    cursor: pointer;
    text-align: center;
`

class ButtonAddList extends Component {
    onClickButton = () => {
        const index = this.props.lists.length;
        createNewList(this.props.id, this.props.name, index);
        this.props.resetAddList();
        this.props.changeStatus();
    }

    render() {
        return (
            <Button
                style={this.props.name === "" ?
                    {background: "rgb(165, 172, 176)", color: "black"} :
                    {background: "rgb(90, 172, 68)", color: "white"}}
                disabled={this.props.name === "" ? true : false}
                onClick={this.onClickButton}>
                Add List
            </Button>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        name: state.list.name,
        index: state.list.index,
        id: state.list.id,
        lists: state.list.lists,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetAddList: () => {
            dispatch({type: "RESET_ADD_LIST"})
        },
        changeStatus: () => {
            dispatch({type: "HIDDEN_OR_SHOW"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAddList)