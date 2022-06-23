import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";
import Event from "./pages/Event";

function App() {
  // useEffect(() => {
  //   client
  //     .query({
  //       query: GET_LESSONS_QUERY,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // }, []);
  return <Event />;
}

export default App;
