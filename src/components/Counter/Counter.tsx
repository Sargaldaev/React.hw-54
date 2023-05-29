import React from 'react';

interface IProps {
  count: number;
}

const Counter: React.FC<IProps> = ({ count }) => {
  return <div style={ { fontSize: '1.5rem' } }>Tries: {count}</div>;
};

export default Counter;