import React, {Component} from 'react';
import styled from 'styled-components';
import FormAddCard from '../../forms/formAddCard';

const Content = styled.div`
    width: 100%;
    float: left;
    border-radius: 0px 0px 5px 5px;
    border: none;
    cursor: pointer;
    margin-top: 30px;
    text-align: left;
    padding: 10px;
    font-weight: bold;
    font-size: 12px;
    
    &:hover {
        background: #cdd2d4;
        width: 91%;
    }
`

class CardAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAdd: false
        }
    }

    onAddorCancel = () => {
        this.setState({isAdd: !this.state.isAdd});
    }

    render() {
        return (
            this.state.isAdd ?
                <FormAddCard
                    onAddorCancel={this.onAddorCancel}
                    idList={this.props.idList}/> :
                <Content
                    onClick={this.onAddorCancel}>
                    + Add Another Card ...
                </Content>
        );
    };
}

export default CardAdd;