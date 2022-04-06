import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => {
  return (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )
};

renderTextField.prototype = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default renderTextField;


