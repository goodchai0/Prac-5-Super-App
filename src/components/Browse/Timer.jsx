import up from "../../assets/up.png";
import down from "../../assets/down.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { useState } from "react";
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [playing, setPlaying] = useState(false);
  const increaseSecond = () => {
    if (seconds == 59) {
      return;
    }
    setSeconds((sec) => sec + 1);
  };
  const increaseMinute = () => {
    if (minutes == 59) {
      return;
    }
    setMinutes((min) => min + 1);
  };
  const increaseHour = () => {
    setHours((hours) => hours + 1);
  };
  const decreaseSecond = () => {
    if (seconds == 0) {
      return;
    }
    setSeconds((sec) => sec - 1);
  };
  const decreaseMinute = () => {
    if (minutes == 0) {
      return;
    }
    setMinutes((min) => min - 1);
  };
  const decreaseHour = () => {
    if (hours == 0) {
      return;
    }
    setHours((hours) => hours - 1);
  };

  function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div
      style={{
        width: "66vw",
        height: "25vh",
        background: "#1E2343",
        position: "absolute",
        borderRadius: "12px",
        marginTop: "6px",
        display: "flex",
        boxSizing: "border-box",
        padding: "20px",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <div style={{ padding: "1rem" }}>
          <CountdownCircleTimer
            isPlaying={playing}
            duration={seconds + minutes * 60 + hours * 60 * 60}
            colors={["#FF6A6A"]}
            style={{ width: "50px", height: "50px" }}
          >
            {({ remainingTime }) => (
              <span style={{ color: "white", fontSize: "2rem" }}>
                {toHoursAndMinutes(remainingTime)}
              </span>
            )}
          </CountdownCircleTimer>
        </div>
      </div>
      <div style={{ width: "35vw", textAlign: "center" }}>
        <div
          style={{
            color: "white",
            display: "flex",
            fontSize: "1.5rem",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "6px",
              marginBottom: "12px",
            }}
          >
            <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Hours</p>
            <img
              style={{ width: "15px", height: "15px" }}
              onClick={increaseHour}
              src={up}
            />
            <p style={{ fontSize: "1.2rem", marginBottom: "0rem" }}>{hours}</p>
            <img
              style={{ width: "15px", height: "15px" }}
              onClick={decreaseHour}
              src={down}
            />
          </div>
          <div style={{ textAlign: "center", padding: "6px" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Minutes</p>
            <img
              style={{ width: "15px", height: "15px" }}
              onClick={increaseMinute}
              src={up}
            />
            <p style={{ fontSize: "1.2rem", marginBottom: "0rem" }}>
              {minutes}
            </p>
            <img
              style={{ width: "15px", height: "15px" }}
              onClick={decreaseMinute}
              src={down}
            />
          </div>
          <div style={{ textAlign: "center", padding: "6px" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Seconds</p>
            <img
              style={{ width: "15px", height: "15px" }}
              onClick={increaseSecond}
              src={up}
            />
            <p style={{ fontSize: "1.2rem", marginBottom: "0rem" }}>
              {seconds}
            </p>
            <img
              style={{ width: "15px", height: "15px" }}
              onClick={decreaseSecond}
              src={down}
            />
          </div>
        </div>
        <div
          onClick={() => setPlaying((prev) => !prev)}
          style={{
            background: "#FF6A6A",
            borderRadius: "12px",
            padding: "8px",
            color: "white",
            textAlign: "center",
          }}
        >
          {playing ? <p>Pause</p> : <p>Start</p>}
        </div>
      </div>
    </div>
  );
};
export default Timer;
