import React, { useEffect, useState } from "react";
import "./BatteryCard.css";
import BatDead from "../assets/svg/BatDead";
import { db, auth } from "../firebase"; // Firestore instance
import { doc, updateDoc } from "firebase/firestore"; // Firestore functions

function BatteryCard() {
  const [userID, setUserId] = useState(null);
  const [batteryInfo, setBatteryInfo] = useState({
    level: 0,
    charging: false,
    temperature: 0,
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      }
    });
  }, []);

  // Function to update battery info in Firestore
  const updateBatteryInfoInFirestore = async (batteryData) => {
    try {
      const docRef = doc(db, "BOTS", userID);

      // Update only the battery field inside the document
      await updateDoc(docRef, {
        BATTERY: {
          PERCENTAGE: batteryData.level,
          TEMPERATURE: batteryData.temperature,
          IS_CHARGING: batteryData.charging,
        },
      });
    } catch (error) {
      console.error("Error updating battery info:", error);
    }
  };

  // Get battery information and listen for changes
  const getBatteryInfo = () => {
    navigator.getBattery().then((battery) => {
      const updateBatteryLevel = () => {
        const updatedInfo = {
          level: Math.round(battery.level * 100),
          charging: battery.charging,
          temperature: Math.floor(Math.random() * (40 - 20 + 1)) + 20, // Simulated temperature
        };
        setBatteryInfo(updatedInfo);
        updateBatteryInfoInFirestore(updatedInfo); // Update Firestore with the new battery data
      };

      battery.addEventListener("levelchange", updateBatteryLevel);
      battery.addEventListener("chargingchange", updateBatteryLevel);

      // Initial setting of battery info
      updateBatteryLevel();
    });
  };

  useEffect(() => {
    getBatteryInfo(); // Fetch initial battery info
  }, []);

  return (
    <div className="card">
      <div
        className={
          batteryInfo.level < 20
            ? "batteryIndicator batteryIndicator-low-charging-battery"
            : batteryInfo.charging
            ? "batteryIndicator batteryIndicator-charging-battery"
            : "batteryIndicator batteryIndicator-idle-battery"
        }
      ></div>
      <div className="container-card bg-white-box ">
        <BatDead />
        <p className="card-title">Battery</p>
        <div className="card-description">
          <p className={batteryInfo.charging ? "d-block" : "d-none"}>
            Charging
          </p>
          <p>
            Battery Level:
            <span className="glowing-text text-size-large">
              {batteryInfo.level}
            </span>
            %
          </p>
          <p>
            Battery Temperature:
            <span className="glowing-text text-size-large">
              {batteryInfo.temperature}°C
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BatteryCard;
