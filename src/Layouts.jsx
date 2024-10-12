// Layout.js
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layouts = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This is where different page components will render */}
    </>
  );
};

export default Layouts;
