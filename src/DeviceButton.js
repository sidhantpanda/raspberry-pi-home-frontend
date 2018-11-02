import React, { Component } from 'react';

import { Grid, Image, Button } from 'semantic-ui-react';

import { setStatus as setStatusApi } from './api/index';

class DeviceButton extends Component {
  state = {
    loading: false,
    error: false,
    showFromProps: true,
    buttonData: {
      status: false
    }
  }

  setStatus = (id, value) => () => {
    const { loading } = this.state;
    if (!loading) {
      this.setState({
        loading: true,
        error: false,
        showFromProps: true,
      });
      setStatusApi(id, value).then(res => {
        // console.log('res: ', JSON.stringify(res));
        this.setState({
          loading: false,
          showFromProps: false,
          error: false,
          buttonData: res
        });
      }).catch(err => {
        this.setState({
          loading: false,
          error: true,
        });

        setTimeout(() => {
          this.setState({ error: false });
        }, 1000)
      });
    }
  }

  render() {
    const {
      id, label, status, color
    } = this.props.data;

    const {
      loading, error, showFromProps, buttonData
    } = this.state;

    if (error) {
      return (
        <Button fluid negative> Error</Button>
      )
    }
    if (showFromProps) {
      return (
        <Button loading={loading} basic={!status} color={color} fluid onClick={this.setStatus(id, !status)}>
          {label}
        </Button>
      );
    } else {
      return (
        <Button loading={loading} basic={!buttonData.status} color={color} fluid onClick={this.setStatus(id, !buttonData.status)}>
          {label}
        </Button>
      );
    }
  }
}

export default DeviceButton;
