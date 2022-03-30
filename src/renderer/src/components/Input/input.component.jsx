import React from 'react';
import PropTypes from 'prop-types';
import Input from './styles';

function InputComponent({
  onChange,
  placeholder,
  type,
  onKeyDown,
}) {
  return (
    <Input
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      onKeyDown={onKeyDown}
    />
  );
}

InputComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

InputComponent.defaultProps = {
  placeholder: '',
  type: '',
  onKeyDown: () => {},
};

export default InputComponent;
