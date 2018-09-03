import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {deleteBoard} from '../../../firebase/board';
import {iconTrash} from '../../../constants/logo';

const Button = styled.div`
    float: right;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    padding: 5px 5px 0px;
    margin-right: 20px;
    cursor: pointer;
    
    &:hover {
        background: rgba(255, 255, 255, 0.8);
    }
        
    &:active {
        background: rgba(255, 255, 255, 1);
    }
`

const Image = styled.img`
    width: 30px;
    height: 30px;
`

class ButtonRemoveBoard extends Component {
    deleteBoard = () => {
        deleteBoard(this.props.id);
        this.props.goDashBoard();
    }

    render() {
        return (
            <Button onClick={this.deleteBoard}>
                <Image className="img-responsive" src={iconTrash}/>
            </Button>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        id: state.list.id
    }
}

export default connect(mapStateToProps)(ButtonRemoveBoard)