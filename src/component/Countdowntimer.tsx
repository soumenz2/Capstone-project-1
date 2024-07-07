import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const initialTime = 5 * 60 * 60 + 9 * 60; // Initial time in seconds
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const radius = 60; // Decreased radius
  const stroke = 5;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (time / initialTime) * circumference;

  return (
    <div className="flex flex-col items-center bg-indigo-800 text-white p-6 rounded-lg text-center w-64">
      <div className="relative">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="white"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="transition-strokeDashoffset duration-1000 ease-linear"
          />
          <circle
            stroke="rgba(255, 255, 255, 0.1)"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
          {formatTime(time)}
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={() => setIsRunning(true)}
          className="bg-green-500 px-4 py-2 rounded mr-2"
        >
          Start
        </button>
        <button
          onClick={() => setIsRunning(false)}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
