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
      <div className="container">
        <div className="container__head d-flex justify-content-center align-items-center flex-column">
          <span className="container-title">
            {/* Smart Transport Automative System  */}
            <li>
              <Link to="/" className="navItem btn-shine text-bigger">
                Smart Transport Automative System
              </Link>
            </li>
            <li>
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
                    marginLeft: "-30px",
                  }}
                  className="navItem"
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" className="navItem">
                  Login
                </Link>
              )}
            </li>
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
