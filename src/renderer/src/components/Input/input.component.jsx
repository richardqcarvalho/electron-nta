import React from 'react';
import PropTypes from 'prop-types';
import Input from './styles';

function InputComponent({ onChange, placeholder }) {
  return (
    <Input
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

InputComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

InputComponent.defaultProps = {
  placeholder: '',
};

export default InputComponent;
