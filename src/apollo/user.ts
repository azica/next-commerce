import { gql, useMutation, useQuery } from "@apollo/client"

const CREATE_USER = gql`
  mutation ($name: String!, $email: String!, $password: String!, $avatar: String!) {
    addUser(data: { name: $name, email: $email, password: $password, avatar: $avatar }) {
      id
      name
      avatar
    }
  }
`

export const useCreateUser = () => {
  return useMutation<Model.User, Omit<Model.User, "id">>(CREATE_USER)
}

const MY_PROFILE = gql`
  query {
      myProfile {
      id
      name
      avatar
    }
  }
`

export const useGetMe = () => {
    return useQuery<{myProfile: Pick<Model.User, "id" | "name" | "avatar">}>(MY_PROFILE)
}
