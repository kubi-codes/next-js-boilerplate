import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Blank from "components/templates/_blank/index";

export default function Home() {
  const dispatch = useDispatch();
  const redux = useSelector((state) => state);

  // example for call redux
  console.log(redux);

  return (
    <div>
      <Blank />
    </div>
  );
}

// Page Config
Home.useMainLayout = true;
Home.title = "Home";
