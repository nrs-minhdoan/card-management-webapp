import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import {ScaleLoader} from 'react-spinners';
import {connect} from 'react-redux';
// import {userSignIn} from '../../redux/sagas/userSaga';
import {signIn} from '../../firebase/user';
import color from '../../constants/color';
import {logoLogin} from '../../constants/logo';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background: ${color[0]};
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    text-align: center;
    width: 100%;
`

const Logo = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50px;
    width: 100px;
    height: 100px;
    margin-bottom: 30px;
`

const changeColor = keyframes`
    from {background: white; color: #0072ff}
    to {background: #ED213A; color: white}
`

const SignIn = styled.button`
    display: block;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    padding: 5px 50px;
    color: #0072ff;
    font-family: 'Patrick Hand', cursive;
    font-size: 16px;
    font-weight: 900;
    background: white;

    &:hover {
        animation: ${changeColor} 0.6s linear;
        background: #ED213A;
        color: white;
    }
    &:active {
        background: #f37335;
        color: white;
    }
`

class Login extends Component {
    onSignIn = () => {
        this.props.signIn();
        signIn(this.props);
        // userSignIn(this.props);
    }

    render() {
        return (
            <Wrapper className="container-fluid">
                <Container>
                    <Logo src={logoLogin} alt=""/>
                    {
                        this.props.isSigningIn ?
                            <ScaleLoader
                                loaderStyle={{
                                    display: "flex",
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    borderColor: 'black'
                                }}
                                margin={"2px"}
                                width={3}
                                height={26}
                                radius={3}
                                color={'white'}
                                loading={this.props.isSigningIn}/>
                            :
                            <SignIn
                                onClick={this.onSignIn}>
                                Sign in
                            </SignIn>
                    }
                </Container>
            </Wrapper>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        isSigningIn: state.user.isSigningIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: () => {
            dispatch({type: "SIGN_IN"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);