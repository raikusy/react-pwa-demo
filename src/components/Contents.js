import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import PreCode from './PreCode';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: 0,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      tabOne: {},
      tabTwo: {},
      tabThree: {}
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(res => this.setState({ tabOne: res }));
    fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(res => res.json())
      .then(res => this.setState({ tabTwo: res }));
    fetch('https://jsonplaceholder.typicode.com/todos/3')
      .then(res => res.json())
      .then(res => this.setState({ tabThree: res }));
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value, tabOne, tabTwo, tabThree } = this.state;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="One" />
            <Tab label="Two" />
            <Tab label="Three" />
          </Tabs>
          {value === 0 && <PreCode>{`${JSON.stringify(tabOne)}`}</PreCode>}
          {value === 1 && <PreCode>{`${JSON.stringify(tabTwo)}`}</PreCode>}
          {value === 2 && <PreCode>{`${JSON.stringify(tabThree)}`}</PreCode>}
        </Paper>
      </div>
    );
  }
}

Contents.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contents);
