import React, { Component } from 'react';

export default class MenuLink extends Component {
  linkClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className={this.props.className}>
        <a
          href={this.props.link}
          className="menu-link"
          onClick={this.linkClick}
        >
          {this.props.children}
        </a>
      </div>
    );
  }
}
