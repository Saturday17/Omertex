import React, { Component } from 'react';
import { Input, Radio } from '@material-ui/core';

class DnsField extends Component {

  state = {
    isChecked: false,
    isInvalid: false
  };

  validateDns = e => {
    const regExp = /^[sap](([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;
    if (e.target.value.match(regExp)) {
      this.setState({
        isInvalid: false
      }, () => this.props.validDns(!this.state.isInvalid))
    } else {
      this.setState({
        isInvalid: true
      }, () => this.props.validDns(!this.state.isInvalid))
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
      <div className="dns">
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
          placeholder="DNS"
          onChange={ this.validateDns }
          disabled={ !isChecked ? true : false }
          error={ isInvalid ? true : false }
          inputProps={{
            'aria-label': 'description',
          }}
        />
      </div>
    );
  }
}

export default DnsField;