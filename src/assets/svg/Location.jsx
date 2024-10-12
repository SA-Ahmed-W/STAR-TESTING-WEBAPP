import React from "react";

function Location() {
  return (
    <>
      <svg
        width="100"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="24"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2FCB89" stopOpacity="0.7"></stop>
            <stop offset="0.5" stopColor="#2FCB89" stopOpacity="0"></stop>
            <stop offset="1" stopColor="#2FCB89" stopOpacity="0.7"></stop>
          </linearGradient>
          <radialGradient
            id="paint1_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(12 12) rotate(96.8574) scale(24 30)"
          >
            <stop stopColor="#54E8A9"></stop>
            <stop offset="1" stopColor="#1A3E31" stopOpacity="0.2"></stop>
          </radialGradient>
        </defs>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C8.13 2 5 5.13 5 9C5 13.25 11.28 21.03 11.62 21.45C11.81 21.68 12.2 21.68 12.38 21.45C12.72 21.03 19 13.25 19 9C19 5.13 15.87 2 12 2ZM7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.78 13.47 17.19 12 19.09C10.53 17.19 7 11.78 7 9ZM12 11C10.9 11 10 10.1 10 9C10 7.9 10.9 7 12 7C13.1 7 14 7.9 14 9C14 10.1 13.1 11 12 11Z"
          fill="url(#paint0_linear)"
          stroke="url(#paint1_radial)"
          strokeWidth="0.5"
        />
      </svg>
    </>
  );
}

export default Location;
