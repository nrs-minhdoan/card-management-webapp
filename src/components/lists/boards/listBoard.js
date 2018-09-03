import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {itemRef} from '../../../firebase/config';
import Loading from '../../modals/modalLoading';
import Board from "./itemBoard";


export default class ListBoards extends Component {
    constructor(props) {
        super(props);

        this.state = {boards: [], isLoading: true}
    }

    componentDidMount() {
        itemRef.on("value", (snapshot) => {
            let data = snapshot.val() || {};
            let boards = Object.keys(data).map((key) => data[key]);
            this.setState({boards, isLoading: false});
        })
    }

    componentWillUnmount() {
        itemRef.off("value");
    }

    render() {
        return (
            this.state.isLoading ? <Loading isLoading={this.state.isLoading}/> :
                this.state.boards.map((item) => {
                    return (
                        <Link
                            style={{textDecoration: "none"}}
                            to={`/insideboard/${item.idBoard}`}
                            key={item.idBoard}>
                            <Board
                                title={item.title}
                                color={item.color}/>
                        </Link>
                    );
                })
        );
    };
}