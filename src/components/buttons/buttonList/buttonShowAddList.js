import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import FormAddList from '../../forms/formAddList';

const Content = styled.button`
    width: 220px;
    height: 5%;
    border-radius: 5px;
    border: none;
    margin-left: 20px;
    margin-top: 20px;
    text-align: center;
    padding: 5px; 
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Patrick Hand', cursive;
    background: rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(237, 239, 240, 0.5);
    }
`

class AddList extends Component {
    render() {
        return (
            this.props.isAdd ?
                <FormAddList/> :
                <Content
                    onClick={this.props.changeStatus}>
                    Add Another List ...
                </Content>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        isAdd: state.list.isAdd
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeStatus: () => {
            dispatch({type: "HIDDEN_OR_SHOW"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddList);