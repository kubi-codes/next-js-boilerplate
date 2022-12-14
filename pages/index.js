import React from "react";
import Blank from "components/templates/_blank/index";
import * as request from "redux/thunk";
import { useDispatch, useSelector } from "react-redux";
import { gql } from "@apollo/client";
import client from "utils/apollo";

export default function Home(props) {
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
  try {
    const { data } = await client.query({
      query: gql`
        query Countries {
          countrisses {
            code
            name
            emoji
          }
        }
      `,
    });

    return {
      props: {
        title: "Home",
        url: context?.resolvedUrl,
        data,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      props: {
        title: "Home",
        url: context?.resolvedUrl,
      }, // will be passed to the page component as props
    };
  }
}
