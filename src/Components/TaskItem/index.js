import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import PropTypes from 'prop-types';

class TaskItem extends Component {
  render() {
    return (
      <Card className={this.props.classes.card}>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item md={8}>
              <Typography component="h2">{this.props.task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              {this.props.status.label}
            </Grid>
          </Grid>
          <p>{this.props.task.description}</p>
        </CardContent>
        <CardActions className={this.props.classes.cardActions}>
          <Fab size="small" color="primary" aria-label="add" onClick={this.props.onClickEdit}>
            <CreateIcon size="small" />
          </Fab>
          <Fab size="small" color="secondary" aria-label="edit" onClick={this.props.onClickDelete}>
            <DeleteIcon size="small" />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

TaskItem.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  status: PropTypes.object,
  onClickEdit:PropTypes.func,
  onClickDelete:PropTypes.func,
}

export default withStyles(styles)(TaskItem);
