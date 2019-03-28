import React from 'react';
import Container from './Container';
import Icon from './Icon';
import MenuLink from './MenuLink';

import './Header.css';

export default function Header() {
  return (
    <div className="Header">
      <Container>
        <div className="menu">
          <div className="sub-menu-left">
            <span className="icon logo">Logo</span>
          </div>
          <div className="sub-menu-right">
            <div className="page-menu">
              <MenuLink link="/">Profile</MenuLink>
              <MenuLink link="/" className="divider">
                Home
              </MenuLink>
              <MenuLink link="/" className="divider">
                Create
              </MenuLink>
            </div>
            <div className="action-menu divider">
              <Icon name="friends" />
              <Icon name="messenger" />
              <Icon name="notification" />
            </div>
            <div className="settings-menu divider">
              <Icon name="help" />
              <Icon name="logout" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
