import React, { useEffect, useState } from "react";
import "./LocationCard.css";
import Location from "../assets/svg/Location";
import { db, auth } from "../firebase"; // Firestore instance
import { doc, updateDoc } from "firebase/firestore";
function LocationCard() {
  let [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const getLocation = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        const newLatitude = position.coords.latitude;
        const newLongitude = position.coords.longitude;

        setLocation((prev) => ({
          ...prev,
          latitude: newLatitude,
          longitude: newLongitude,
        }));

        // Call the function to update Firestore with the new location
        updateFirestoreLocation(newLatitude, newLongitude);
      },
      (error) => {
        console.log(error.message);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      }
    );
  };
  const updateFirestoreLocation = async (latitude, longitude) => {
    try {
      const user = auth.currentUser; // Get the current authenticated user
      if (user) {
        const userId = user.uid;
        const userDocRef = doc(db, "BOTS", userId);

        // Update Firestore with location data
        await updateDoc(userDocRef, {
          LOCATION: { LATITUDE: latitude, LONGITUDE: longitude },
        });
        console.log("Location updated in Firestore");
      } else {
        console.log("User not authenticated");
      }
    } catch (error) {
      console.log("Error updating Firestore location:", error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <div className="card">
      <div className="container-card bg-green-box">
        <Location />
        <p className="card-title">Location</p>

        <div className="d-flex justify-content-between">
          <p className="card-description">
            Latutude:{" "}
            <span className="glowing-text text-size-large">
              {location.latitude}
            </span>
          </p>
          <p className="card-description">
            Longitude:{" "}
            <span className="glowing-text text-size-large">
              {location.longitude}
            </span>
          </p>
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
