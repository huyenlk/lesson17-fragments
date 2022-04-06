import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import { ADMIN_ROUTER } from '../../../Constants/index';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

class Sidebar extends Component {

  toggleDrawer = (value) => {
    const { onToggleSidebar } = this.props;
    if (onToggleSidebar) {
      onToggleSidebar(value)
    }
  }

  renderList() {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component='div'>
          {ADMIN_ROUTER.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
                activeClassName={classes.menuLinkActive}
                key={item.path}
              >
                <ListItem
                  key={index}
                  className={classes.menuItem}
                  button
                >
                  {item.name}
                </ListItem>
              </NavLink>
            )
          })}
          {/*ADMIN_ROUTER.map(item => {
            return (
              <ListItem key={item.path} className={classes.menuItem}>
                {item.name}
              </ListItem>
            );
          })*/}
        </List>
      </div>
    );
    return xhtml;
  }

  render() {
    const { classes, showSidebar } = this.props;
    return (
      <Drawer
        classes={{ paper: classes.drawerPaper, }}
        open={showSidebar}
        onClose={() => this.toggleDrawer(false)}
        variant='persistent'
      >
        {this.renderList()}
      </Drawer>
    )
  }
}

Sidebar.Prototype = {
  classes: PropTypes.object,
  showSidebar: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
}

const mapStateToProps = state => {
  return {}
}

export default withStyles(styles)(connect(mapStateToProps, null)(Sidebar));