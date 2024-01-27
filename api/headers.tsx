import { GraphQLClient } from "graphql-request";

const hygraph = new GraphQLClient(process.env.GRAPHQL_API);

export default hygraph;
