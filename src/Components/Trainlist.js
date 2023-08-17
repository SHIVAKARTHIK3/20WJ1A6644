import React, { useEffect, useState } from 'react';
import { fetchTrains } from '../api';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        const trainData = await fetchTrains('http://20.244.56.144/train/auth/');
        setTrains(trainData);
      } catch (error) {
        // Handle error
      }
    };

    
  }, []);

  return (
    <div>
      <h2>All Trains</h2>
      <ul>
        {trains.map(train => (
          <li key={train.id}>
            <span>{train.name}</span>
            <span>Departure Time: {train.departureTime}</span>
            {/* Display other train details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;