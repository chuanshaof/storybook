import React from 'react';

import PropTypes from 'prop-types';

import './button.css';
import { Button as MuiButton } from '@mui/material';

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'small',
  label,
  className = "navi-button",
  ...props // Intended for stuff like data-testid, etc
}) => {
  return (
    <MuiButton
      type="button"
      className={className}
      {...props}
    >
      {label}
    </MuiButton>
  );
};

Button.propTypes = {
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
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional className */
  className: PropTypes.string,
  /** Optional click handler */
  onClick: PropTypes.func,
};