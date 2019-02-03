import React, { Component } from 'react';
import { Grid, Image, Button, SemanticCOLORS } from 'semantic-ui-react';
import { SetStatus } from '../apis/controls';
import ButtonModel from '../models/Button';

interface ButtonProps {
  button: ButtonModel
}

export default class DeviceButton extends Component<ButtonProps> {
  state = {
    loading: false,
    error: false,
    showFromProps: true,
    buttonData: null as ButtonModel | null
  }

  setStatus = (id: string, value: boolean) => async () => {

  }

  toggleStatus = async () => {
    const { loading, buttonData } = this.state;
    const id = this.props.button.id;
    let status = buttonData ? buttonData.status : this.props.button.status;
    status = !status;

    if (!loading) {
      console.log('setting', id, 'to', status);
      this.setState({
        loading: true,
        error: false,
        showFromProps: false,
      });
      const button = await SetStatus(id, status);
      if (button == null) {
        this.setState({
          loading: false,
          error: true,
          showFromProps: false,
        });

        setTimeout(() => {
          this.setState({ error: false });
        }, 1000)
      } else {
        this.setState({
          loading: false,
          showFromProps: false,
          error: false,
          buttonData: button
        });
      }

    }
  }

  render() {
    const { button } = this.props;
    const { loading, error, buttonData } = this.state;

    const color = button.color;
    const status = buttonData ? buttonData.status : button.status;

    if (error) {
      return (
        <Button fluid negative> Error</Button>
      )
    }

    return (
      <Button loading={loading} basic={!status} color={color} fluid onClick={this.toggleStatus}>
        {button.label}
      </Button>
    )

  }
}