import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

class SearchBox extends Component {

  render() {
    return (
      <form className={this.props.classes.container} noValidate autoComplete="off">
        <TextField
          className={this.props.classes.textField}
          onChange={this.props.handleChange}
          margin="normal"
          placeholder="Nhap tu khoa"
        />
      </form>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func,
}

const mapStateToProps = null

const mapDispatchToProps = null

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SearchBox));
