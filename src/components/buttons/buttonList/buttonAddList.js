import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

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
    render() {
        return (
            <Button
                style={this.props.name === "" ?
                    {background: "rgb(165, 172, 176)", color: "black"} :
                    {background: "rgb(90, 172, 68)", color: "white"}}
                disabled={this.props.name === "" ? true : false}
                onClick={this.props.onAddList}>
                Add List
            </Button>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        name: state.list.name,
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