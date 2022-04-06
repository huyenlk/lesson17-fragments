import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../Commons/Theme';
import { Provider } from 'react-redux';
import configureStore from "../../Redux/configureStore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../Components/GlobalLoading/';
import Modal from '../../Components/Modal/index';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ADMIN_ROUTER } from '../../Constants';
import AdminLayoutRoute from '../../Commons/Layout/AdminLayoutRoute/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import { styles } from './styles';
import { ROUTES } from '../../Constants';
import DefaultLayoutRoute from '../../Commons/Layout/DefaultLayoutRoute/index'

const store = configureStore();

class App extends Component {
  renderAdminRoutes = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTER.map((route, index) => {
      return <AdminLayoutRoute
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
        name={route.name}
      />
    })
    return xhtml;
  }

  renderDefaultRoutes = () => {
    let xhtml = null;
    xhtml = ROUTES.map((route, index) => {
      return <DefaultLayoutRoute
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
        name={route.name}
      />
    })
    return xhtml;
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <GlobalLoading />
            <Modal />
            <Switch>
              {this.renderAdminRoutes()}
              {this.renderDefaultRoutes()}
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
