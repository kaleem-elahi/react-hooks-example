// @flow
import React from 'react';

export default (props) => (
      <div className="ak-field-group">
        <label htmlFor="username">Username</label>
        {props.children}
        {console.log(props.children)}
      </div>
);
