// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    recipes: [Recipe]
    friends: [User]
  }

  type Recipe {
    _id: ID
    recipeName: String
    recipeText: String
    createdAt: String
    username: String
    favoriteCount: Int
    favorites: [Reaction]
  }

  type Favorite {
    _id: ID
    createdAt: String
    username: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    Recipes(username: String): [Recipe]
    Recipe(_id: ID!): Recipe
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addRecipe(recipeText: String!): Recipe
    addReaction(RecipeId: ID!, reactionBody: String!): Recipe
    addFriend(friendId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;