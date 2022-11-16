import React from "react";
import Blank from "components/templates/_blank/index";
import * as request from "redux/thunk";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const redux = useSelector((state) => state);

  // example for call redux
  // console.log(redux);

  React.useEffect(() => {
    dispatch(request.get({ url: "https://dummyjson.com/products" }));
  }, []);

  return (
    <div>
      <Blank />
    </div>
  );
}

// Page Config
// Home.disabledLayout = true;

// Data Fetching
export async function getServerSideProps(context) {
  return {
    props: {
      title: "Home",
      url: context?.resolvedUrl,
    }, // will be passed to the page component as props
  };
}
