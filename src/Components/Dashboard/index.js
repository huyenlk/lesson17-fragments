import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header/index';
import Sidebar from './Sidebar';
import * as uiActions from '../../Actions/ui';
import { bindActionCreators, compose } from 'redux';
import cn from 'classnames';

class Dashboard extends Component {

  handleSidebar = (value) => {
    const { uiActionCreators } = this.props;
    const { showSidebar, hideSidebar } = uiActionCreators;
    if (value === true) {
      showSidebar();
    } else {
      hideSidebar();
    }
  }

  render() {
    const { children, classes, name, showSidebar } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header name={name} showSidebar={showSidebar} onToggleSidebar={this.handleSidebar} />
        <div className={classes.wrapper}>
          <Sidebar
            showSidebar={showSidebar}
            onToggleSidebar={this.handleSidebar}
          />
          <div className={cn(classes.wrapperContent, { [classes.shipLeft]: showSidebar === false })}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.Prototype = {
  classes: PropTypes.object,
  children: PropTypes.object,
  name: PropTypes.string,
  showSidebar: PropTypes.bool,
  uiActionCreators: PropTypes.shape({
    showSidebar: PropTypes.func,
    hideSidebar: PropTypes.func,
  })
}

const mapStateToProps = state => {
  return {
    showSidebar: state.ui.showSidebar,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    uiActionCreators: bindActionCreators(uiActions, dispatch)
  }
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect, withStyles(styles),)(Dashboard);