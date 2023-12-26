export const schema = gql`
  type Student {
    id: String!
    email: String!
    name: String!
    course: String!
  }

  type Query {
    students: [Student!]! @requireAuth
    student(id: String!): Student @requireAuth
  }

  input CreateStudentInput {
    email: String!
    name: String!
    course: String!
  }

  input UpdateStudentInput {
    email: String
    name: String
    course: String
  }

  type Mutation {
    createStudent(input: CreateStudentInput!): Student! @requireAuth
    updateStudent(id: String!, input: UpdateStudentInput!): Student!
      @requireAuth
    deleteStudent(id: String!): Student! @requireAuth
    sendStudentEmail(id: String!): Student! @requireAuth
  }
`
