import React, { Component } from 'react';
import { Input, Radio } from '@material-ui/core';

class SubnetMaskField extends Component {
  state = {
    isChecked: false,
    isInvalid: false
  };

  validateSubnetMask = e => {
    const regExp = /^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/;
    if (e.target.value.match(regExp)) {
      this.setState({
        isInvalid: false
      }, () => this.props.validSubnetMask(!this.state.isInvalid))
    } else {
      this.setState({
        isInvalid: true
      }, () => this.props.validSubnetMask(!this.state.isInvalid))
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
      <div className="mask">
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
          placeholder="Subnet mask"
          onChange={ this.validateSubnetMask }
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

export default SubnetMaskField;