import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Button from './styles';

function ButtonComponent({
  onClick, text, color, textColor,
}) {
  return (
    <Button
      as={motion.button}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        ...(textColor && { color: textColor }),
        ...(color && { backgroundColor: color }),
      }}
      type="button"
    >
      {text}
    </Button>
  );
}

ButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  color: PropTypes.string,
};

ButtonComponent.defaultProps = {
  textColor: null,
  color: null,
};

export default ButtonComponent;
