import React from 'react';

import { SlotsProvider } from './Context'

export default class Provider extends React.Component {
  setStot = ({ value, slotName }) => {
    this.setState(() => ({ [slotName]: value }));
  };

  state = {
    setSlot: this.setStot
  };

  render() {
    return (
      <SlotsProvider value={this.state}>
        {this.props.children}
      </SlotsProvider>
    );
  }
}

