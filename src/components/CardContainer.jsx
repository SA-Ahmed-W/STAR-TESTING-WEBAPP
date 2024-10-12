import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import BatteryCard from "./BatteryCard";
import Extra from "./Extra";
import Information from "./Information";
import { auth } from "../firebase";
import DummyCard from "./DummyCard";

function CardContainer() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    });
  }, [login]);

  if (!login) {
    return <DummyCard />;
  }

  return (
    <div className="gradient-cards">
      <div className="container__card__main">
        <LocationCard />
        <BatteryCard />
      </div>
      {/* <Extra/> */}
      <Information />
    </div>
  );
}

export default CardContainer;
