import gql from "graphql-tag";

export const LocalStateSDL = gql`
  extend type Query {
    isMenuRightSidebarOpen: Boolean!
  }

  extend type Mutation {
    toggleMenuRightSidebar(newStatus: Boolean!): Boolean 
  }
`;