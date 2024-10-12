import React from "react";

function BatFullP(props) {
  return (
    <>
      <svg
        fill="#000000"
       width="100"
        height="80"
        viewBox="0 0 24 24"
        id="battery-100-alert-2"
        data-name="Line Color"
        xmlns="http://www.w3.org/2000/svg"
        className="icon line-color"
        {...props}
      >
        <path
          id="secondary"
          d="M13,17H11m2-4H11m2-4H11m3-6H10V5h4Zm3,10v3"
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
          d="M17,9V6a1,1,0,0,0-1-1H8A1,1,0,0,0,7,6V20a1,1,0,0,0,1,1h4"
          style={{
            fill: "none",
            stroke: "rgb(0, 0, 0)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        />
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
      </svg>
    </>
  );
}

export default BatFullP;
