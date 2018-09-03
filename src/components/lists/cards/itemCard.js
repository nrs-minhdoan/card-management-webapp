import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import ButtonRemoveCard from '../../buttons/buttonCard/buttonRemoveCard';
import CardDetail from "../../modals/modalCardDetails";

const Wrapper = styled.div`
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Content = styled.div`
    width: 90%;
    border-radius: 5px;
    cursor: pointer;
    background: white;
    
    &:hover ,&:focus {
        background: rgb(255, 255, 255, 0.6);
    }
`

const Title = styled.div`
    float: left;
    width: 80%;
`

const Context = styled.p`
    text-align: left;
    padding-left: 10px;
    word-break: break-all;
    margin: 0px;
`

class Item extends Component {
    onClickTitle = () => {
        this.props.getDetail(this.props.idCard, this.props.content, this.props.description, this.props.index, this.props.idList);
        this.props.onShowModal();
    }

    render() {
        return (
            <div>
                <Wrapper>
                    <Content>
                        <Title onClick={this.onClickTitle}>
                            <Context>{this.props.content}</Context>
                        </Title>
                        <ButtonRemoveCard
                            idCard={this.props.idCard}
                            idList={this.props.idList}/>
                    </Content>
                </Wrapper>
                <CardDetail/>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onShowModal: () => {
            dispatch({type: "SHOW_DETAIL"})
        },
        getDetail: (id, content, description, index, idList) => {
            dispatch({type: "GET_DETAIL", id, content, description, index, idList})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);

