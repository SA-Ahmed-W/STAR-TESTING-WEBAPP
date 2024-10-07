import React from "react";
import LocationCard from "./LocationCard";
import BatteryCard from "./BatteryCard";

function CardContainer() {
  return (
    <div>
      <div className="gradient-cards">
        <LocationCard/>
        <BatteryCard/>
      </div>
    </div>
  );
}

export default CardContainer;
