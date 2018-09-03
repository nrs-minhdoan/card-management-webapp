import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {iconCheck} from '../../../constants/logo';

const BoxColor = styled.div`
    float: left;
    width: 15%;
    height: 30px;
    margin: 9px;
    border-radius: 5px;
    cursor: pointer;
    padding-top: 3px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 3px;
`

const Image = styled.img`
    width: 20px;
    height: 20px;
    padding: auto;
`

class Box extends Component {
    render() {
        return (
            <BoxColor
                style={{background: this.props.bgColor}}
                onClick={() => this.props.onChangeColor(this.props.bgColor)}>
                {this.props.bgColor === this.props.color ? <Image src={iconCheck} alt=""/> : null}
            </BoxColor>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        color: state.board.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeColor: (color) => {
            dispatch({type: "CHANGE_COLOR", color})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Box);