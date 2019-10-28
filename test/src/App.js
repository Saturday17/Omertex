import React, { Component } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import IpField from './components/IpField';
import SubnetMaskField from './components/SubnetMaskField';
import DnsField from './components/DnsField';

class App extends Component {

  state = {
    isValidIp: false,
    isValidSubnetMask: false,
    isValidDns: false
  };

  submit = () => {
    if (this.state.isValidIp && this.state.isValidSubnetMask && this.state.isValidDns) {
      alert('Хорошего дня.')
    }
  }

  validIp = valid => {
    this.setState({
      isValidIp: valid
    })
  }

  validSubnetMask = valid => {
    this.setState({
      isValidSubnetMask: valid
    })
  }

  validDns = valid => {
    this.setState({
      isValidDns: valid
    })
  }

  render() {

    return (
      <div className="App">
        <form action="" className="form">
          <IpField validIp={ this.validIp } />
          <SubnetMaskField validSubnetMask={ this.validSubnetMask } />
          <DnsField validDns={ this.validDns } />
          <div className="submit">
            <Button variant="contained" color="primary" onClick={ this.submit }>
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
