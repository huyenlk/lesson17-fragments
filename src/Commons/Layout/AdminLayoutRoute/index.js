import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Dashboard from '../../../Components/Dashboard';

class AdminLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          return (
            <Dashboard {...remainProps}>
              <YourComponent {...routeProps} />
            </Dashboard>
          )
        }}
      />
    )
  }
}

AdminLayoutRoute.Prototype = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  name: PropTypes.string,
}

const mapStateToProps = state => {
  return {}
}

export default withStyles(styles)(connect(mapStateToProps, null)(AdminLayoutRoute));