import { Component } from 'react';

export default class ComponentLifecycle extends Component {
  componentDidMount() {
    if (this.props.componentDidMount) {
      this.props.componentDidMount();
    }
  }

  componentWillUnmount() {
    if (this.props.componentWillUnmount) {
      this.props.componentWillUnmount();
    }
  }

  render() {
    return null;
  }
}
