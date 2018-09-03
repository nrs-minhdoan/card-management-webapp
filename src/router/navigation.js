import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './screens/login';
import Boards from './screens/boards';
import InsideBoard from './screens/insideBoard';

class Navigation extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/boards" component={Boards}/>
                <Route exact path="/insideboard/:idBoard" component={InsideBoard}/>
            </Switch>
        );
    }
}

export default Navigation;