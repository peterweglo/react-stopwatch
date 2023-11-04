import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import Stopwatch from './components/Stopwatch/Stopwatch';
import Container from './components/Container/Container';

const App = () => {
  const [time, setTime] = useState(0);
  const [stopwatch, setStopwatch] = useState(null);

  useEffect(() => {
    return () => {
      if (stopwatch) clearInterval(stopwatch);
    };
  }, [stopwatch]);

  const startStopwatch = () => {
    setStopwatch(
      setInterval(() => {
        setTime((prevValue) => prevValue + 1);
      }, 10)
    );
  };

  const stopStopwatch = () => {
    clearInterval(stopwatch);
  };

  const resetStopwatch = () => {
    clearInterval(stopwatch);
    setStopwatch(null);
    setTime(0);
  };

  return (
    <Container>
      <Stopwatch time={time} />
      <Button onClick={startStopwatch}>Start</Button>
      <Button onClick={stopStopwatch}>Stop</Button>
      <Button onClick={resetStopwatch}>Reset</Button>
    </Container>
  );
};

export default App;
