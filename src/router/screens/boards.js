import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../../components/header';
import Body from '../../components/body';


class Boards extends Component {
    render() {
        return (
            <div>
                <Header props={this.props}/>
                <Body/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: (props) => {
            dispatch({type: "SIGN_OUT", props})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Boards);