import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {deleteList} from '../../../firebase/list';
import {iconDelete} from '../../../constants/logo';

const Button = styled.div`
    float: right;
    margin-top: -25px;
    margin-right: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 2px;
    cursor: pointer;
    
    &:hover, &:focus {
        background: rgba(0, 0, 0, 0.1);
    }
`

const Image = styled.img`
    width: 15px;
    display: block;
`

class ButtonRemoveList extends Component {
    onClickButton = () => {
        deleteList(this.props.id, this.props.idList);
    }

    render() {
        return (
            <Button onClick={this.onClickButton}>
                <Image src={iconDelete}/>
            </Button>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        id: state.list.id,
    }
}

export default connect(mapStateToProps)(ButtonRemoveList)