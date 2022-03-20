import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Button from './styles';

function ButtonComponent({ onClick, text }) {
  return (
    <Button
      as={motion.button}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

ButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonComponent;
