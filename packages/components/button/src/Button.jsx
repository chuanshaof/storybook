import React from 'react';

import PropTypes from 'prop-types';

import './button.css';
import { Button as MuiButton } from '@mui/material';

/** Primary UI component for user interaction */
export const Button = ({
  label,
  type = 'primary',
  size = 'small',
  className = "navi-button",
  onClick,
  ...props // Intended for stuff like data-testid, etc
}) => {
  return (
    <MuiButton
      type="button"
      className={className}
      onClick={onClick}
      {...props}
    >
      {label}
    </MuiButton>
  );
};

Button.propTypes = {
  /** Button contents */
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'primary',
    'primary-reversed',
    'secondary',
    'secondary-reversed',
    'tertiary',
    'ghost',
    'ghost-reversed',
    'ghost-danger',
    'danger',
    'text',
    'icon-with-words',
    'icon',
  ]),
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'large']),
  /** Optional className */
  className: PropTypes.string,
  /** Optional click handler */
  onClick: PropTypes.func,
};