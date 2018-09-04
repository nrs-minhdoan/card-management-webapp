import React, {Component} from 'react';
import styled from 'styled-components';
import {Draggable} from "react-beautiful-dnd";
import {connect} from 'react-redux';
import {itemRef} from '../../../firebase/config';
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

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            indexAdd: 0,
            cards: []}

        this.itemChildCard = itemRef.child(this.props.id).child("lists").child(this.props.idList).child("cards");
    }

    componentDidMount() {
        this.itemChildCard.on("value",(snapshot) => {
            const data = snapshot.val() || {};
            let cards = Object.keys(data).map((key) => data[key]);
            cards.sort((a, b) => a.index - b.index);
            const array = cards === [] ? [{index: -1}] : cards;
            const indexAdd = array.reduce((i, item) => (i = item.index + 1), 0);
            console.log(indexAdd);
            this.setState({cards, indexAdd});
        })  
    }

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
                            <ListCards 
                                idList={this.props.idList}
                                cards={this.state.cards}/>
                            <AddCard 
                                idList={this.props.idList}
                                indexAdd={this.state.indexAdd}/>
                        </Wrapper>
                    </div>
                )}
            </Draggable>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        id: state.list.id
    }
}

export default connect(mapStateToProps)(Item);