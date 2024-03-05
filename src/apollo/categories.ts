import { gql, useQuery } from "@apollo/client"

const ALL_CATEGORIES = gql`
  query {
    categories {
      id
      name
    }
  }
`

export const useCategories = () => {
  return useQuery(ALL_CATEGORIES)
}
