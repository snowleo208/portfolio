import React from 'react';
import { Route } from 'react-router-dom';

const Button = props => {
  return (
    <Route
      render={({ history }) => (
        <button
          {...props}
          className={'u-btn ' + props.className}
          onClick={() => {
            history.push(props.target);
          }}
        >
          {props.value}
        </button>
      )}
    />
  );
};

export default Button;
