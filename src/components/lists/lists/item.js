import React, {Component} from 'react';
import styled from 'styled-components';
import {Draggable} from "react-beautiful-dnd";
import ButtonRemoveList from '../../buttons/buttonList/buttonRemoveList';
import ListCards from '../cards/listCard';
import AddCard from '../../buttons/buttonCard/buttonShowAddCard';

const Title = styled.h5` 
    padding: 5px 30px 5px 20px;
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
`

const Wrapper = styled.div`
    margin-left: 20px;
    margin-top: 20px;
    float: left;
    width: 220px;
    max-height: 100%;
    border-radius: 5px;
    border: none;
    text-align: center;
    font-size: 20px;
    font-family: 'Patrick Hand', cursive;
    background: rgb(226, 228, 230);
`

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    ...draggableStyle,
});

export default class Item extends Component {
    render() {
        return (
            <Draggable key={this.props.idList || ""} draggableId={this.props.idList || ""} index={this.props.index}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style)}>
                        <Wrapper>
                            <div
                                {...provided.dragHandleProps}>
                                <Title>{this.props.name}</Title>
                            </div>
                            <ButtonRemoveList idList={this.props.idList}/>
                            <ListCards idList={this.props.idList}/>
                            <AddCard idList={this.props.idList}/>
                        </Wrapper>
                    </div>
                )}
            </Draggable>
        );
    };
}