import React from "react";

function BatCharging(props) {
  return (
    <>
      <svg
        fill="#000000"
        width="100"
        height="80"
        viewBox="0 0 24 24"
        id="battery-charge-alert"
        data-name="Line Color"
        xmlns="http://www.w3.org/2000/svg"
        className="icon line-color"
        {...props}
      >
        <line
          id="secondary-upstroke"
          x1={16.95}
          y1={20.5}
          x2={17.05}
          y2={20.5}
          style={{
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            stroke: "rgb(44, 169, 188)",
          }}
        />
        <polyline
          id="secondary"
          points="12 15 13 13 11 13 12 11"
          style={{
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            stroke: "rgb(44, 169, 188)",
          }}
        />
        <path
          id="secondary-2"
          data-name="secondary"
          d="M17,13v3M14,3H10V5h4Z"
          style={{
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            stroke: "rgb(44, 169, 188)",
          }}
        />
        <path
          id="primary"
          d="M12,21H8a1,1,0,0,1-1-1V6A1,1,0,0,1,8,5h8a1,1,0,0,1,1,1V9"
          style={{
            fill: "none",
            stroke: "rgb(0, 0, 0)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        />
      </svg>
    </>
  );
}

export default BatCharging;
