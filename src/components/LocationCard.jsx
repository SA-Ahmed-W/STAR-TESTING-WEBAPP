import React, { useEffect, useState } from "react";
import "./LocationCard.css";

function LocationCard() {
  let [locationBeignShared, setLocationBeignShared] = useState(false);
  let [GetLocationIntervalID, setGetLocationIntervalID] = useState(0);
  let [showLocationPermissionTextClass, setShowLocationPermissionTextClass] =
    useState(true);
  let [showAskPermission, setShowAskPermission] = useState(true);
  let [showShareLocationPermission, setShowShareLocationPermission] =
    useState(false);
  let [showStopShareLocation, setStopShowShareLocation] = useState(true);
  let [showLocationPermissionText, setShowLocationPermissionText] = useState(
    "Please Enable/allow location permission"
  );
  let [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setShowLocationPermissionTextClass(false);
        setShowShareLocationPermission(true);
        setShowAskPermission(false);
        // console.log(position.coords.latitude, position.coords.longitude);
        setLocation((prev) => {
          return {
            ...prev,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
        });
        console.log(location);
      },
      (error) => {
        console.log(error.message);
        setShowLocationPermissionText(error.message);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      }
    );
  };
  const hanldeBtnShareLocation = () => {
    console.log("SHARE");
    if (!GetLocationIntervalID) {
      const id = setInterval(getLocation, 1000 * 10);
      setGetLocationIntervalID(id);
    }
    // setGetLocationIntervalID = setInterval(getLocation, 1000 * 10);
    setStopShowShareLocation(false);
    setLocationBeignShared(true);
  };
  // let setGetLocationIntervalID = setInterval(getLocation,1000*10)
  const stopShareLocation = () => {
    console.log("STOPPED SHARING");
    if (GetLocationIntervalID) {
      clearInterval(GetLocationIntervalID);
      setGetLocationIntervalID(0);
    }
    setStopShowShareLocation(true);
    setShowShareLocationPermission(false);
    setShowAskPermission(true);
    setShowLocationPermissionTextClass(true);
    setLocationBeignShared(false);
  };

  useEffect(() => {
    return () => {
      clearInterval(GetLocationIntervalID);
    };
  }, [GetLocationIntervalID]);

  useEffect(() => {
    getLocation();
  }, []);
  const hanldeBtnAskLocationPermission = () => {
    console.log("ASK PERMISSION");

    if (navigator.geolocation) {
      getLocation();
    } else {
      console.log("Geolocation is not supported by this browser.");
      alert("Geolocation is not supported by this browser.");
      return false;
    }
  };
  return (
    <div className="card">
      <div className="container-card bg-green-box">
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
        <p className="card-title">Location</p>

          <div className="d-flex justify-content-between">
            {/* <p className="card-description glowing-text">{`Latitude: ${location.latitude}`}</p> */}
            <p className="card-description">Latutude: <span className="glowing-text text-size-large">{location.latitude}</span></p>
            <p className="card-description">Longitude: <span className="glowing-text text-size-large">{location.longitude}</span></p>
          </div>
          <div className="copyLocationContainer">
          {/* <CopyBtn
            latitude={location.latitude}
            longitude={location.longitude}
          /> */}
          </div>
        </div>
    </div>
  );
}

export default LocationCard;
