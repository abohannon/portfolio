import React from 'react';

const Container = ({ children, style }) => (
  <div style={{ ...{ width: '96rem' }, ...style }}>
    {children}
  </div>
);

export { Container };

