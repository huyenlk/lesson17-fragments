import PropTypes from 'prop-types';
import React from 'react';
import { Select, FormControl, InputLabel, FormHelperText } from '@material-ui/core';
import styles from './styles';
import { withStyles } from '@material-ui/styles';

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return null;
  }
  return <FormHelperText>{touched && error}</FormHelperText>
};

const renderSelectField = (props) => {
  const {
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  } = props
  return (
    <FormControl error={touched && error} className={props.classes.formControl}>
      <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
      <Select
        {...input}
        {...custom}
        inputProps={{
          name: input.name,
          id: 'color-native-simple'
        }}
        value={input.value}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  )
}

renderFromHelper.prototype = {
  touched: PropTypes.bool,
  error: PropTypes.bool,
}

renderSelectField.prototype = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  children: PropTypes.array,
  classes: PropTypes.object
};

export default withStyles(styles)(renderSelectField);
