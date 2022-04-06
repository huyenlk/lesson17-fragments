import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Grid, MenuItem } from '@material-ui/core';
import renderTextField from '../../Components/FormHelper/TextField/index';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as modalAction from '../../Actions/modal';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import * as taskActions from '../../Actions/task';
import renderSelectField from '../../Components/FormHelper/Select/index';

class TaskForm extends Component {

  handleSubmitForm = (data) => {
    const { taskActionsCreator, taskEditing } = this.props;
    const { addTask, updateTask } = taskActionsCreator;
    const { title, description, status } = data;
    if (taskEditing && taskEditing.id) {
      updateTask(title, description, status);
    } else {
      addTask(title, description);
    }
    console.log(taskEditing.id)
  }

  renderStatusSelection = () => {
    let xhtml = null
    const { taskEditing, classes } = this.props;
    if (taskEditing && taskEditing.id) {
      xhtml = (
        <Field
          id='status'
          label='trang thai'
          className={classes.select}
          name='status'
          component={renderSelectField}
        >
          <MenuItem value={0}>Ready</MenuItem>
          <MenuItem value={1}>In Progress</MenuItem>
          <MenuItem value={2}>Completed</MenuItem>
        </Field>
      )
    }
    return xhtml;
  }

  render() {
    const { handleSubmit } = this.props;
    const { hideModal } = this.props.modalActionCreator
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            {/*<TextField
              id="standard-basic"
              label="Tieu de"
              className={this.props.classes.TextField}
              margin="normal"
            />*/}
            <Field
              id='title'
              label='tieu de'
              className={this.props.classes.TextField}
              margin='normal'
              name='title'
              component={renderTextField}
            />
          </Grid>

          <Grid item md={12}>
            {/*<TextField
              id="standard-multiline-flexible"
              label="Mo ta"
              multiline
              maxRows={4}
              className={this.props.classes.TextField}
              margin="normal"
            />*/}
            <Field
              id='description'
              label='Mo ta'
              multiline
              maxRows={4}
              className={this.props.classes.TextField}
              margin='normal'
              name='description'
              component={renderTextField}
            />
          </Grid>
          {this.renderStatusSelection()}
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={1}>
              <Button variant="contained" color="primary" type="submit" disabled={this.props.invalid || this.props.submitting}>
                Luu lai
              </Button>&nbsp;
              <Button variant="contained" color="secondary" onClick={hideModal}>Huy bo</Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionCreator: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  taskActionsCreator: PropTypes.shape({
    addTask: PropTypes.func,
    updateTask: PropTypes.func,
  }),
  taskEditing: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    taskEditing: state.task.taskEditing,
    initialValues: {
      title: state.task.taskEditing ? state.task.taskEditing.title : null,
      description: state.task.taskEditing ? state.task.taskEditing.description : null,
      status: state.task.taskEditing ? state.task.taskEditing.status : null,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreator: bindActionCreators(modalAction, dispatch),
    taskActionsCreator: bindActionCreators(taskActions, dispatch),
  }
}

const FORM_NAME = 'TASK_MANAGEMENT'

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: FORM_NAME, validate })(TaskForm)));
