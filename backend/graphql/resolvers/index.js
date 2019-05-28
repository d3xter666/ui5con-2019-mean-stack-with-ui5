import { mergeResolvers } from "merge-graphql-schemas";

import Record from "./Record/";

const resolvers = [Record];

export default mergeResolvers(resolvers);