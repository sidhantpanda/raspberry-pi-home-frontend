import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapDispatchToProps = (dispatch: Function) => ({
  // loginUser: (user: any) => dispatch(loginUser(user))
});

const mapStateToProps = (state: any) => ({
  ...state,
  user: state.authReducer.user
});

interface HomePageProps {
  user: any
}
class HomePage extends Component<HomePageProps> {

  render() {
    const { user } = this.props;
    if (user == null) {
      return <Redirect to='/login' />
    }

    return (
      <div>
        Home
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
