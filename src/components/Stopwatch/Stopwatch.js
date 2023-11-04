import styles from './Stopwatch.module.scss';

const Stopwatch = ({ time }) => {
  const formatTime = (centiseconds) => {
    let milliseconds = parseInt(centiseconds % 100);
    let seconds = parseInt((centiseconds / 100) % 60);
    let minutes = parseInt((centiseconds / (100 * 60)) % 60);
    let hours = parseInt((centiseconds / (100 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
  };

  return (
    <div className={styles.timer}>
      <span>{formatTime(time)}</span>
    </div>
  );
};

export default Stopwatch;
