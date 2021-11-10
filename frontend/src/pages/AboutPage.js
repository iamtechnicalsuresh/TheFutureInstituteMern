import React from "react";
import { useDispatch } from "react-redux";
import { setStickyNav } from "../redux/navbarSlices/navbarSlice";

const AboutPage = () => {
  const dispatch = useDispatch();
  dispatch(setStickyNav(true));

  return (
    <div>
      <h1>About pages</h1>
    </div>
  );
};

export default AboutPage;
