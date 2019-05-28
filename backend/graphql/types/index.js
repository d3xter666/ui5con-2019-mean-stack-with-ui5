import { mergeTypes } from "merge-graphql-schemas";
import Record from "./Record/";

const typeDefs = [Record];

export default mergeTypes(typeDefs, { all: true });