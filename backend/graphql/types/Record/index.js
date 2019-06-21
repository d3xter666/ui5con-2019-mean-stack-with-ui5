(function (global, module) {
module.exports = `
  type Record {
		id: Int!
		avatar: String
		title: String
		first_name: String
		last_name: String
		job_title: String
		email: String
		company: String
		department: String
		languages: [String!]
		university: String
		self_decription: String
		skills: [String!]
  }
  type Query {
    record(id: Int!): Record
    records: [Record]
  }
  type Mutation {
    addRecord(id: Int, avatar: String, title: String, first_name: String, last_name: String, job_title: String, email: String, company: String, department: String, languages: [String], university: String, self_decription: String, skills: [String]): Record
    editRecord(id: Int!, avatar: String, title: String, first_name: String, last_name: String, job_title: String, email: String, company: String, department: String, languages: [String], university: String, self_decription: String, skills: [String]): Record
    deleteRecord(id: Int!): Record
  }
`;
}(this, module));