// src/api.js
const API_BASE_URL = 'https://api.johndoerailways.com';

export const fetchTrains = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/trains`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching train data:', error);
    throw error;
  }
};

// src/components/TrainList.js



import React from 'react';
import TrainList from './Components/Trainlist'; '.src/components/TrainList';
import SingleTrain from '.src/components/SingleTrain';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TrainList} />
        <Route path="/train/:id" component={SingleTrain} />
      </Switch>
    </Router>
  );
};

export default App;
