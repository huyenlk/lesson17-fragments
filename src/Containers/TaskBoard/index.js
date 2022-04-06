import { styles } from './styles';
import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../Constants/index';
import TaskList from '../../Components/TaskList/index';
import TaskForm from '../TaskForm/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskAction from '../../Actions/task';
import PropTypes from 'prop-types';
import SearchBox from '../../Components/SearchBox/index';
import * as modalAction from '../../Actions/modal';
import Box from '@material-ui/core/Box';

/*const listTask = [
  {
    id: 1,
    title: "Read hook",
    description: "Read material ui book",
    status: 0
  },
  {
    id: 2,
    title: "Play football",
    description: "with my friend",
    status: 2
  },
  {
    id: 3,
    title: "Play game",
    description: "",
    status: 1
  },
]*/

class TaskBoard extends Component {

  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  openForm = () => {
    const { modalActionCreator, taskActionCreators } = this.props;
    const { setTaskEditing } = taskActionCreators;
    setTaskEditing(null);
    const { showModal, changeModalContent, changeModalTitle } = modalActionCreator;
    showModal();
    changeModalTitle('Them moi cong viec');
    changeModalContent(<TaskForm />)
  }

  loadData = () => {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  handleFilter = (e) => {
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  }

  renderSearchBox() {
    let xhtml = null;
    xhtml = (<SearchBox handleChange={this.handleFilter} />);
    return xhtml;
  }

  handleEditTask = (task) => {
    const { taskActionCreators } = this.props;
    const { setTaskEditing } = taskActionCreators;
    setTaskEditing(task);
    const { showModal, changeModalContent, changeModalTitle } = this.props.modalActionCreator;
    showModal();
    changeModalTitle('Cap nhat cong viec');
    changeModalContent(<TaskForm />)
  }

  showModalDeleteTask = (task) => {
    const { taskActionCreators, classes } = this.props;
    const { showModal, changeModalContent, changeModalTitle, hideModal } = this.props.modalActionCreator;
    showModal();
    changeModalTitle('Xoa cong viec');
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
          Ban co chac muon xoa {``}<span className={classes.modalConfirmTextBold}>{task.title}</span>?
        </div>
        <Box display='flex' flexDirection='row-reverse' mt={2}>
          <Box ml={1}>
            <Button variant='contained' color="secondary" onClick={hideModal}>
              Huy bo
            </Button>
          </Box>
          <Box>
            <Button variant='contained' color='primary' onClick={() => this.handleDeleteTask(task)}>
              Dong y
            </Button>
          </Box>

        </Box>
      </div>
    )
  }

  handleDeleteTask = (task) => {
    const { id } = task;
    const { taskActionCreators } = this.props;
    const { deleteTask } = taskActionCreators;
    deleteTask(id);
  }

  render() {
    return (
      <div className={this.props.classes.taskBoard}>
        <Button onClick={this.loadData} variant="contained" color="primary" style={{ marginRight: 20 }}>
          Load Data
        </Button>
        <Button onClick={this.openForm} variant="contained" color="primary">
          <span className="material-icons">
            add
          </span>
          Them moi cong viec
        </Button>
        {this.renderSearchBox()}
        <Grid container spacing={2}>
          {STATUSES.map((status, index) => {
            const taskFilter = this.props.listTask.filter(task => task.status === status.value)
            return <TaskList
              key={index}
              taskFilter={taskFilter}
              status={status}
              index={index}
              onClickEdit={this.handleEditTask}
              onClickDelete={this.showModalDeleteTask}
            />
          })}
        </Grid>
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
  }),
  listTask: PropTypes.array,
  modalActionCreator: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
    setTaskEditing: PropTypes.func,
  })
}

const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    taskActionCreators: bindActionCreators(taskAction, dispatch),
    modalActionCreator: bindActionCreators(modalAction, dispatch),
  }
}


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));
