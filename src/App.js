import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { fetchCurrentStatus } from './api/index';

import { Grid, Image, Button } from 'semantic-ui-react';

import DeviceButton from './DeviceButton';

import { addButtonUpdateListener } from './socket';

class App extends Component {
  state = {
    loaded: false,
    loading: false,
    loadingError: false,
    buttons: []
  }



  componentDidMount() {
    addButtonUpdateListener(buttons => {
      this.setState({
        loaded: true,
        loading: false,
        loadingError: false,
        buttons: buttons
      });
    });

    if (!this.state.loaded && !this.state.loading) {
      this.setState({
        loaded: false,
        loading: true,
        loadingError: false,
      });
      fetchCurrentStatus().then(res => {
        this.setState({
          loaded: true,
          loading: false,
          loadingError: false,
          buttons: res
        });
      }).catch(err => {
        this.setState({
          loaded: false,
          loading: false,
          loadingError: true,
        });
      });
    }

  }


  render() {

    const buttons = this.state.buttons;

    const UiButtons = buttons.map((button, key) => {
      return (
        <Grid.Row key={key}>
          <Grid.Column width={10}>
            <DeviceButton data={button} fluid>Click Here</DeviceButton>
          </Grid.Column>
        </Grid.Row>
      )
    })

    return (
      <div className="App">
        <Grid centered verticalAlign='middle' >
          {UiButtons}
        </Grid>
      </div>
    );
  }
}

export default App;
