import { GraphQLClient } from "graphql-request";

const URL = " https://graphql.us.fauna.com/graphql";
const graphqlClient = new GraphQLClient(URL, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_KEY}`,
  },
});

export default graphqlClient;
