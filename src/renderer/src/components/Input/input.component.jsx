import React from 'react';
import PropTypes from 'prop-types';
import Input from './styles';

function InputComponent({ onChange, placeholder, type }) {
  return (
    <Input
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
}

InputComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

InputComponent.defaultProps = {
  placeholder: '',
  type: '',
};

export default InputComponent;
