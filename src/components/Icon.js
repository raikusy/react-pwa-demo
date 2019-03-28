import React, { Component } from 'react';

export default class Icon extends Component {
  state = {
    toggle: false
  };
  toggleIcon = e => {
    e.preventDefault();
    this.setState(pState => ({ toggle: !pState.toggle }));
  };
  render() {
    return (
      <div>
        <a href="/" className="icon-link" onClick={this.toggleIcon}>
          <span
            className={`icon ${this.props.name} ${
              this.state.toggle ? this.props.name + '-white' : ''
            }`}
          >
            {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
          </span>
        </a>
      </div>
    );
  }
}
