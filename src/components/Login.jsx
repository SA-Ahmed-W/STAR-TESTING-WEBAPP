import React, { useState } from "react";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; // Firestore functions
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [register, setRegister] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(login);
    try {
      let res = await signInWithEmailAndPassword(
        auth,
        "TestUser." + login.email,
        login.password
      );
      // console.log(res);
      if (res) {
        navigate("/");
        console.log("user logged in");
      } else {
        console.log("user not logged in");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    // console.log(register);
    try {
      let res = await createUserWithEmailAndPassword(
        auth,
        "TestUser." + register.email,
        register.password
      );
      console.log(res);
      if (res) {
        console.log("user created");
        navigate("/");
        const userId = res.user.uid;
        const docRef = doc(db, "BOTS", userId);
        // Create an empty document
        await setDoc(docRef, {});

        console.log("Document created in BOTS collection for user:", userId);
      } else {
        console.log("user not created");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      /* From Uiverse.io by andrew-demchenk0 */
      <div className="wrapper">
        <div className="card-switch">
          <label className="switch">
            <input type="checkbox" className="toggle" />
            <span className="slider"></span>
            <span className="card-side"></span>
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <div className="title">Log in</div>
                <form
                  className="flip-card__form"
                  action=""
                  onSubmit={(e) => handleLogin(e)}
                >
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={login.email}
                    onChange={(e) =>
                      setLogin({ ...login, email: e.target.value })
                    }
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="text"
                    value={login.password}
                    onChange={(e) =>
                      setLogin({ ...login, password: e.target.value })
                    }
                  />
                  <button className="flip-card__btn" type="submit">
                    Let`s go!
                  </button>
                </form>
              </div>
              <div className="flip-card__back">
                <div className="title">Sign up</div>
                <form
                  className="flip-card__form"
                  action=""
                  onSubmit={(e) => handleRegister(e)}
                >
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={register.email}
                    onChange={(e) =>
                      setRegister({ ...register, email: e.target.value })
                    }
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="text"
                    value={register.password}
                    onChange={(e) =>
                      setRegister({ ...register, password: e.target.value })
                    }
                  />
                  <button className="flip-card__btn" type="submit">
                    Confirm!
                  </button>
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
      /
    </>
  );
}

export default Login;
