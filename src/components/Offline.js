import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'center',
    backgroundColor: theme.palette.error.light
  }
});

function Offline(props) {
  return (
    !navigator.onLine && (
      <Paper className={props.classes.paper}>
        No Internet Connection, data loaded from cache.
      </Paper>
    )
  );
}

export default withStyles(styles)(Offline);
