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
import { Checkbox, FormControlLabel } from '@material-ui/core';

class SignupPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.signup}>
          <Card>
            <CardContent>
              <form>
                <div className='text-xs-center pb-xs'>
                  <Typography variant="caption">
                    Dang ky tai khoan
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
                <TextField
                  id="cpassword"
                  label="confirm password"
                  className={classes.textField}
                  type='password'
                  fullWidth
                  margin='normal'
                />
                <FormControlLabel
                  control={<Checkbox value='agree' />}
                  label='Toi da doc chinh sach va dong y dieu khoan'
                  className={classes.fullWidth}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type='submit'
                >
                  Signup
                </Button>
                <div className='pt-1 text-md-center'>
                  <Link to='/login'>
                    <Button>Da co tai khoan?</Button>
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

SignupPage.Prototype = {
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

export default compose(withConnect, withStyles(styles),)(SignupPage);