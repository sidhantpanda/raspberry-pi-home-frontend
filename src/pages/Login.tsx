import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { GoogleLogin } from 'react-google-login';
import { Grid, Header, Loader } from 'semantic-ui-react';
import { GoogleAuthConfig } from '../config';
import { LoginWithGoogle } from '../apis/auth/';
import { loginUser } from '../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapDispatchToProps = (dispatch: Function) => ({
  loginUser: (user: any) => dispatch(loginUser(user))
});

const mapStateToProps = (state: any) => ({
  ...state,
  user: state.authReducer.user
});

interface LoginProps {
  loginUser: Function,
  user: any
}

class LoginPage extends Component<LoginProps> {
  state = {
    isUserFetched: false,
    isUserFetchingFromServer: false,
    isUserFetchingFromServerSuccess: false,
    isUserFetchingFromServerError: false
  }

  onSignInSuccess = async (googleUser: any) => {
    try {
      console.log('User logged in: ', googleUser);
      this.setState({
        isUserFetchingFromServer: true,
        isUserFetchingFromServerSuccess: false,
        isUserFetchingFromServerError: false
      });
      const user = await LoginWithGoogle(googleUser.tokenId);
      this.setState({
        isUserFetchingFromServer: false,
        isUserFetchingFromServerSuccess: true,
        isUserFetchingFromServerError: false
      });
      this.props.loginUser(user);
    } catch (err) {
      console.error('Error logging in user', err);
      this.setState({
        isUserFetchingFromServer: false,
        isUserFetchingFromServerSuccess: false,
        isUserFetchingFromServerError: true
      });
    }
  }

  onSignInError = (error: any) => {
    console.error('Error logging in ', error);
  }

  componentDidUpdate() {

  }

  render() {
    const { user } = this.props;
    console.log('render user', user);
    if (user != null) {
      return <Redirect to='/' />
    }

    const { isUserFetchingFromServer } = this.state;

    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <Grid centered>

          <Grid.Column width={3} textAlign='center'>
            <Header>RaspHome</Header>
            {isUserFetchingFromServer &&
              <Loader active inline='centered' />
            }
            {!isUserFetchingFromServer &&
              <GoogleLogin
                clientId={GoogleAuthConfig.clientId}
                buttonText="Login with Google"
                onSuccess={this.onSignInSuccess}
                onFailure={this.onSignInError}
              />
            }

          </Grid.Column>

        </Grid>

      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
