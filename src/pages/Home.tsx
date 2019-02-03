import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { GetStatus } from '../apis/controls';
import Button from '../models/Button';
import DeviceButton from '../components/DeviceButton';
import { Grid } from 'semantic-ui-react';

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
  state = {
    buttons: [] as Button[]
  }
  componentDidMount() {
    GetStatus().then(buttons => {
      if (buttons != null) {
        this.setState({ buttons: buttons });
      }
    })
  }

  render() {
    const { user } = this.props;
    const { buttons } = this.state;

    if (user == null) {
      return <Redirect to='/login' />
    }

    // const temp = buttons.filter(button => button.id === 'button1')

    const UiButtons: any = buttons.map((button, key) => {
      return (
        <Grid.Row key={key}>
          <Grid.Column width={10}>
            <DeviceButton key={key} button={button} />
          </Grid.Column>
        </Grid.Row>

      )
    });

    return (
      <div>
        <br />
        <br />
        <br />
        <Grid centered verticalAlign='middle' >
          {UiButtons}
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
