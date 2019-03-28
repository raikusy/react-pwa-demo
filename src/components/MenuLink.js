import React from 'react';

const linkClick = e => {
  e.preventDefault();
};
export default function MenuLink(props) {
  return (
    <div className={props.className}>
      <a href={props.link} className="menu-link" onClick={linkClick}>
        {props.children}
      </a>
    </div>
  );
}
