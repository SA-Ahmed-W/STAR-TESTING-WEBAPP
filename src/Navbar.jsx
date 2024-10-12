import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

function Navbar() {
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

  return (
    <>
      <div className="nav__container d-flex flex-column">
        <li className="">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Link to="/" className="btn-shine text-bigger">
              Smart Transport Automative System
            </Link>
          </div>
        </li>
        <li>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {login ? (
              <button
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "40px",
                  width: "300px",
                }}
                className=""
                onClick={() => {
                  auth.signOut();
                }}
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "40px",
                  width: "300px",
                  color: "rgb(137, 104, 255)",
                }}
              >
                Login
              </Link>
            )}
          </div>
        </li>
      </div>
    </>
  );
}

export default Navbar;
