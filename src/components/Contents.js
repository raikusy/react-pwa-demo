import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CircularProgress from '@material-ui/core/CircularProgress';

import PreCode from './PreCode';
import fetchData from '../utils/fetchData';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: 0,
    paddingBottom: theme.spacing.unit * 2
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      tabOne: {},
      tabTwo: {},
      tabThree: {},
      loading: false
    };
  }

  componentDidMount() {
    this.setState(prevState => ({ loading: !prevState.loading }));
    fetchData('1').then(res => this.setState({ tabOne: res }));
    fetchData('2').then(res => this.setState({ tabTwo: res }));
    fetchData('3').then(res =>
      this.setState(prevState => ({
        tabThree: res,
        loading: !prevState.loading
      }))
    );
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value, tabOne, tabTwo, tabThree, loading } = this.state;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            variant="fullWidth"
          >
            <Tab label="One" />
            <Tab label="Two" />
            <Tab label="Three" />
          </Tabs>
          {loading && (
            <PreCode>
              <div className={classes.loading}>
                <CircularProgress
                  className={classes.progress}
                  color="secondary"
                />
              </div>
            </PreCode>
          )}
          {!loading && value === 0 && (
            <PreCode>{JSON.stringify(tabOne, null, '\t')}</PreCode>
          )}
          {!loading && value === 1 && (
            <PreCode>{JSON.stringify(tabTwo, null, '\t')}</PreCode>
          )}
          {!loading && value === 2 && (
            <PreCode>{JSON.stringify(tabThree, null, '\t')}</PreCode>
          )}
        </Paper>
      </div>
    );
  }
}

Contents.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contents);
