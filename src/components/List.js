import React from 'react';

const Table = ({items}) => {
  return (
    <ul>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
};

export default Table;
