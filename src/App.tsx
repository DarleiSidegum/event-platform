import { ApolloProvider, gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import Event from "./pages/Event";
import { Router } from "./Router";

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
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
