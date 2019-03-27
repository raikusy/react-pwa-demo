import React, { Component } from 'react';
import Prism from 'prismjs';

export default class PreCode extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  componentDidUpdate(prevProps) {
    if (this.props.children !== prevProps.children) {
      Prism.highlightAll();
    }
  }
  render() {
    return (
      <pre>
        <code className="language-javascript">{this.props.children}</code>
      </pre>
    );
  }
}
