import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {deleteCard} from '../../../firebase/card';
import {iconRemove} from '../../../constants/logo';

const Button = styled.div`
    float: right;
    cursor: pointer;
    margin-right: 5px;
    margin-top: 6px;
    margin-left: -18px;
`

const Image = styled.img`
    width: 15px;
    display: block;
`

class ButtonRemoveCard extends Component {
    onClickButton = () => {
        deleteCard(this.props.id, this.props.idList, this.props.idCard);
    }

    render() {
        return (
            <Button onClick={this.onClickButton}>
                <Image src={iconRemove}/>
            </Button>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        id: state.list.id
    }
}

export default connect(mapStateToProps)(ButtonRemoveCard);