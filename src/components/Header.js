import React, { Component } from 'react';
import Container from './Container';

import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Container>
          <div className="menu">
            <div className="sub-menu-left">
              <span className="icon logo">Logo</span>
            </div>
            <div className="sub-menu-right">
              <div className="page-menu">
                <div>
                  <a href="#">Profile</a>
                </div>
                <div className="divider">
                  <a href="#">Home</a>
                </div>
                <div className="divider">
                  <a href="#">Create</a>
                </div>
              </div>
              <div className="action-menu divider">
                <div>
                  <a href="#">
                    <span className="icon friends">Hello</span>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon messenger">Hello</span>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon notification">Hello</span>
                  </a>
                </div>
              </div>
              <div className="settings-menu divider">
                <div>
                  <a href="#">
                    <span className="icon help">Hello</span>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon logout logout-white">Hello</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
