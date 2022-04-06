import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form>
                <div className='text-xs-center pb-xs'>
                  <Typography variant="caption">
                    Dang nhap de tiep tuc
                  </Typography>
                </div>
                <TextField
                  id="email"
                  label="email"
                  className={classes.textField}
                  fullWidth
                  margin='normal'
                />
                <TextField
                  id="password"
                  label="password"
                  className={classes.textField}
                  type='password'
                  fullWidth
                  margin='normal'
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type='submit'
                >
                  Login
                </Button>
                <div className='pt-1 text-md-center'>
                  <Link to='/signup'>
                    <Button>Dang ky tai khoan</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}

LoginPage.Prototype = {
  classes: PropTypes.object,
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
  }
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect, withStyles(styles),)(LoginPage);