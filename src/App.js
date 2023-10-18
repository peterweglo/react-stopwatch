import { useState } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
  const [stopwatch, setStopwatch] = useState(null);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
