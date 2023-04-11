import React from 'react';
import './App.css';
import {getPictureOfTheDay} from "./api";

function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('use effect');

    const getPicture = async () => {
      const response = await getPictureOfTheDay();
      console.log('response: ' + response);
    }
    getPicture();

  }, []);

  React.useEffect(() => {
    console.log('use effect from count change');
  }, [count]);

  return (
    <div className="App">
      <button
        onClick={() => setCount(count + 1)}>Increase Count</button>
      <h1>NASA Astronomy Picture of the Day</h1>
      <img src={''}/>
    </div>
  );
}

export default App;
