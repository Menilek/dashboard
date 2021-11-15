import React from 'react';
import { Spinner } from 'reactstrap';

const Loader = () => {
  return (
    <div>
      <Spinner animation="border" role="status" />
    </div>
  );
};

export default Loader;
