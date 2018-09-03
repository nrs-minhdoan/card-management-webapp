import React, {Component} from 'react';
import styled from 'styled-components';
import {Draggable, Droppable} from "react-beautiful-dnd";
import {connect} from 'react-redux';
import {itemRef} from '../../../firebase/config';
import Item from './itemCard';

const List = styled.div`
    margin-top: 10px;
`

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    padding: 2,
});

class ListCard extends Component {
    constructor(props) {
        super(props);

        this.state = {cards: []}

        this.itemChildCard = itemRef.child(this.props.id).child("lists").child(this.props.idList).child("cards");
    }

    componentDidMount() {
        this.itemChildCard.on("value", (snapshot) => {
            let data = snapshot.val() || {};
            let cards = Object.keys(data).map((key) => data[key]);
            cards.sort((a, b) => a.index - b.index);
            this.setState({cards});
        })
    }

    componentWillUnmount() {
        this.itemChildCard.off("value");
    }

    render() {
        return (
            <List>
                <Droppable droppableId={this.props.idList || ""} type="card">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                            {...provided.droppableProps}>
                            {
                                this.state.cards.map((item, index) => (
                                    <Draggable
                                        key={item.idCard || ""}
                                        draggableId={item.idCard || ""}
                                        index={index}>
                                        {(dragProvided, dragSnapshot) => (
                                            <div
                                                ref={dragProvided.innerRef}
                                                style={getItemStyle(
                                                    dragSnapshot.isDragging,
                                                    dragProvided.draggableProps.style)}
                                                {...dragProvided.draggableProps}
                                                {...dragProvided.dragHandleProps}>
                                                <Item
                                                    idCard={item.idCard}
                                                    idList={this.props.idList}
                                                    content={item.content}
                                                    description={item.description}
                                                    index={item.index}/>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </List>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        id: state.list.id
    }
}

export default connect(mapStateToProps)(ListCard);
