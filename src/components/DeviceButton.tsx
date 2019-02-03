import React, { Component } from 'react';
import { Grid, Image, Button, SemanticCOLORS } from 'semantic-ui-react';
import { GetStatus } from '../apis/controls';
import ButtonModel from '../models/Button';

interface ButtonProps {
  button: ButtonModel
}

export default class DeviceButton extends Component<ButtonProps> {
  state = {
    loading: false,
    error: false,
    showFromProps: true,
    buttonData: {
      status: false
    }
  }

  setStatus = (id: string, value: boolean) => () => {
    // const { loading } = this.state;
    // if (!loading) {
    //   this.setState({
    //     loading: true,
    //     error: false,
    //     showFromProps: true,
    //   });
    //   setStatusApi(id, value).then(res => {
    //     // console.log('res: ', JSON.stringify(res));
    //     this.setState({
    //       loading: false,
    //       showFromProps: false,
    //       error: false,
    //       buttonData: res
    //     });
    //   }).catch(err => {
    //     this.setState({
    //       loading: false,
    //       error: true,
    //     });

    //     setTimeout(() => {
    //       this.setState({ error: false });
    //     }, 1000)
    //   });
    // }
  }

  render() {
    const { button } = this.props;

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
        <Button loading={loading} basic={!status} color={button.color} fluid onClick={this.setStatus(button.id, !status)}>
          {button.label}
        </Button>
      );
    } else {
      return (
        <Button loading={loading} basic={!buttonData.status} color={button.color} fluid onClick={this.setStatus(button.id, !buttonData.status)}>
          {button.label}
        </Button>
      );
    }
  }
}