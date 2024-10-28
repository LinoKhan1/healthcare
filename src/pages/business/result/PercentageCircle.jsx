import React from "react";
import './PercentageCircle.scss';

const PercentageCircle = ({ percentage, color, label }) => {
    const circleRadius = 50;
    const circumference = 2 * Math.PI * circleRadius;
    const offset = circumference - (percentage / 100) * circumference;
  
    return (
      <div className="text-center">
        <svg width="120" height="120" className="circle-svg">
          <circle
            cx="60"
            cy="60"
            r={circleRadius}
            stroke="#ddd"
            strokeWidth="15"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r={circleRadius}
            stroke={color}
            strokeWidth="15"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
          <text x="60" y="65" className="circle-text" textAnchor="middle" fontSize="1.4rem" fill="#333">
            {percentage}%
          </text>
        </svg>
        <p className="circle-label mt-2">{label}</p>
      </div>
    );
  };
  
  export default PercentageCircle;