import React from 'react';
import { useParams } from 'react-router-dom';

const SingleTrain = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Single Train Details</h2>
      <p>Train ID: {id}</p>
      {/* Display train details */}
    </div>
  );
};

export default SingleTrain;