import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TaskItem from '../TaskItem/index';
import PropTypes from 'prop-types';

class TaskList extends Component {
  render() {
    return (
      <Grid item md={4} xs={12} className={this.props.classes.status}>
        <Box mt={1} mb={1}> {this.props.status.label}</Box>
        <div className={this.props.classes.wrapperListTask}>
          {this.props.taskFilter.map((task, index) => {
            return (
              <TaskItem
                key={index}
                task={task}
                status={this.props.status}
                onClickEdit={() => this.props.onClickEdit(task)}
                onClickDelete={() => this.props.onClickDelete(task)}
              />
            )
          })}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  status: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
}

export default withStyles(styles)(TaskList);
