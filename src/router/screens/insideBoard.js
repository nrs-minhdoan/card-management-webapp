import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {itemRef} from '../../firebase/config';
import Loading from '../../components/modals/modalLoading';
import Header from '../../components/header';
import ButtonRemoveBoard from '../../components/buttons/buttonBoard/buttonRemoveBoard';
import Lists from '../../components/lists/lists/list';

const Body = styled.div`
    height: 93vh;
`

const Title = styled.div`
    width: 97.5%;
    padding-right: 15px;
    padding-left: 15px;
    color: white;
    text-align: center;
    position: absolute;
    top: 60px;
    font-size: 18px;
    font-family: 'Patrick Hand', cursive;
`

const Context = styled.h4`
    word-break: break-word;
    text-align: left;
    padding: 10px 25px;
    margin: 15px 15px 15px 15px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    cursor: pointer;
    
    &:hover {
        background: rgba(255, 255, 255, 0.6);
    }
`

const Wrapper = styled.div`
    padding-top: 110px;
    height: 77vh;
    overflow-x: auto;
    overflow-y: hidden;
`

class InsideBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "",
            title: "",
            isLoading: true,
            list: [],
        }

        this.id = this.props.match.params.idBoard.toString()
    }

    componentDidMount() {
        this.props.changeId(this.id);
        itemRef.child(this.id).on("value", (snapshot) => {
            let data = snapshot.val();
            if (data)
                this.setState({
                    title: data.title,
                    color: data.color,
                    isLoading: false
                });
            else
                this.setState({isLoading: false});
        });
    }

    componentWillUnmount() {
        itemRef.child(this.id).off("value");
    }

    goDashBoard = () => {
        this.props.history.replace(`/boards`);
    }

    render() {
        return (
            <div className="container-fluid">
                <Header
                    bgcolor={this.state.color}
                    goBack={this.goDashBoard}
                    props={this.props}/>
                {
                    this.state.isLoading ?
                        <Loading isLoading={this.state.isLoading}/> :
                        <Body style={{background: this.state.color}}>
                        <Title>
                            <Context>{this.state.title}</Context>
                            <ButtonRemoveBoard
                                goDashBoard={this.goDashBoard}/>
                        </Title>
                        <Wrapper>
                            <Lists/>
                        </Wrapper>
                        </Body>
                }
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeId: (id) => {
            dispatch({type: "CHANGE_ID", id})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InsideBoard);