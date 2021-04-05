const {  gql } = require('apollo-server');

const typeDefs = gql`
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

# This "Book" type defines the queryable fields for every book in our data source.
type Product {
  name: String
  description: String
  createdAt:String
}

type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }


# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
  getProducts: [Product]!
}

type UploadedFileResponse {
      filename: String!
      mimetype: String!
      encoding: String!
      url: String!
    }

type Mutation{
    addItem(
    name:String
    description:String
):Product!

singleUpload(file: Upload!): UploadedFileResponse!

}


  


`
module.exports = typeDefs