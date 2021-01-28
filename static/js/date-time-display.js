import {
  html,
  useState,
  useEffect,
} from "https://unpkg.com/htm/preact/standalone.module.js";

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const updateCurrentTime = () => {
    setCurrentTime(new Date());
  };

  useEffect(() => {
    setInterval(updateCurrentTime, 1000);

    return () => {
      clearInterval(updateCurrentTime);
    };
  });

  const date = currentTime.toDateString().toUpperCase().slice(0, -5);
  const time = currentTime.toLocaleTimeString();

  return html`
    <span class="datetime">
      <span class="date">${date}</span>
      <span class="time">${time}</span>
    </span>
  `;
};

export default DateTimeDisplay;
