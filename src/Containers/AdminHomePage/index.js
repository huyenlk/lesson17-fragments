//import styles from './styles';
//import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';

class AdminHomePage extends Component {
  render() {
    return (
      <div>
        AdminHomePage
      </div>
    )
  }
}

AdminHomePage.Prototype = {
  classes: PropTypes.object,
}

//const mapStateToProps = state => {

//}

export default AdminHomePage; /*withStyles(styles)(connect(mapStateToProps, null)(AdminHomePage))*/;