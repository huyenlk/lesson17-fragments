import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import LoadingIcon from '../../Assets/Images/YCZH.gif';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class GlobalLoading extends Component {
  render() {
    let xhtml = null
    if (this.props.showLoading) {  
      xhtml = (
        <div className={this.props.classes.globalLoading}>
          <img src={LoadingIcon} alt='Tri bu dit to' className={this.props.classes.icon} />
        </div>
      )
    }
    return xhtml
  }
}

GlobalLoading.Prototype = {
  classes: PropTypes.object,
  showLoading:PropTypes.bool,
}

const mapStateToProps = state => {
  return {
    showLoading: state.ui.showLoading
  }
}

export default withStyles(styles)(connect(mapStateToProps, null)(GlobalLoading));
