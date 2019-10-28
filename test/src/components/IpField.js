import React, { Component } from 'react';
import { Input, Radio } from '@material-ui/core';

class IpField extends Component {

  state = {
    isChecked: false,
    isInvalid: false
  };

  validateIpAddress = e => {
    const regExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (e.target.value.match(regExp)) {
      this.setState({
        isInvalid: false
      }, () => this.props.validIp(!this.state.isInvalid))
    } else {
      this.setState({
        isInvalid: true
      }, () => this.props.validIp(!this.state.isInvalid))
    }
  }

  render() {
    const { isChecked, isInvalid } = this.state;
    
    const handleChange = () => {
      this.setState({
        isChecked: !isChecked
      });
    };

    return (
      <div className="id">
        <Radio
          checked={ !isChecked }
          onChange={ handleChange }
          value="a"
        />
        <Radio
          color="primary"
          checked={ isChecked }
          onChange={ handleChange }
          value="b"
        />
        <sup>*</sup>
        <Input
          placeholder="IP"
          disabled={ !isChecked ? true : false }
          onChange={ this.validateIpAddress }
          error={ isInvalid ? true : false }
          inputProps={{
            'aria-label': 'description',
          }}
        />
      </div>
    );
  }
}

export default IpField;