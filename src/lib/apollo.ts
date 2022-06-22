import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q06lwb2ofk01xkhjdiapb1/master',
    cache: new InMemoryCache()
})