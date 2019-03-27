import React from 'react';

function PreCode(props) {
  return (
    <pre>
      <code>{props.children}</code>
    </pre>
  );
}

export default PreCode;
