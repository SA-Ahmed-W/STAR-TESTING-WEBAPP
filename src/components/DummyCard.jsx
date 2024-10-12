import React from "react";
import "./DummyCard.css";
import { Link } from "react-router-dom";
function DummyCard() {
  return (
    <>
      <div className="dum__container">
        <div class="cookieCard">
          <p class="cookieHeading">Login Alert.</p>
          <p class="cookieDescription">To Use this webapp you need to login.</p>
          <Link to="/login" class="acceptButton">
            Understood
          </Link>
        </div>
      </div>
    </>
  );
}

export default DummyCard;
