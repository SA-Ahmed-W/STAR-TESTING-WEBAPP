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

  // Update battery info in Firestore
  const updateBatteryInfoInFirestore = (batteryData) =>
    userID &&
    updateDoc(
      doc(db, "BOTS", userID),
      {
        "BATTERY.PERCENTAGE": batteryData.level,
        "BATTERY.TEMPERATURE": batteryData.temperature,
        "BATTERY.IS_CHARGING": batteryData.charging,
      },
      { merge: true }
    ).catch(console.error);

  // Get battery information and listen for changes
  const getBatteryInfo = () => {
    let prevInfo = null;
    const updateBatteryLevel = (battery) => {
      const { charging, level } = battery;
      const updatedInfo = {
        level: Math.round(level * 100),
        charging,
        temperature: Math.floor(Math.random() * (40 - 20 + 1)) + 20, // Simulated temperature
      };

      if (
        prevInfo === null ||
        prevInfo.level !== updatedInfo.level ||
        prevInfo.charging !== updatedInfo.charging
      ) {
        setBatteryInfo(updatedInfo);
        updateBatteryInfoInFirestore(updatedInfo); // Update Firestore with the new battery data
        prevInfo = updatedInfo;
      }
    };

    navigator.getBattery().then((battery) => {
      updateBatteryLevel(battery);
      battery.addEventListener("levelchange", () =>
        updateBatteryLevel(battery)
      );
      battery.addEventListener("chargingchange", () =>
        updateBatteryLevel(battery)
      );
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
