import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const onClick = (props, history) => {
  if (props.target.indexOf('http') >= 0) {
    const newWindow = window.open();
    newWindow.opener = null;
    newWindow.referrer = null;
    newWindow.location = props.target;
    newWindow.location.href = props.target;
  } else {
    return history.push(props.target);
  }
};

const Button = props => {
  return (
    <Route
      render={({ history }) => (
        <button
          {...props}
          className={'u-btn ' + props.className}
          onClick={() => onClick(props, history)}
        >
          <span>{props.value}</span>
        </button>
      )}
    />
  );
};

Button.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string,
};

export default Button;
