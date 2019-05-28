export default `
  type Record {
    id: String!
    name: String!
    email: String!
  }
  type Query {
    record(id: String!): Record
    records: [Record]
  }
  type Mutation {
    addRecord(id: String!, name: String!, email: String!): Record
    editRecord(id: String, name: String, email: String): Record
    deleteRecord(id: String, name: String, email: String): Record
  }
`;