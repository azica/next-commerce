import { gql, useMutation } from "@apollo/client"

type LoginRequest = {
  email: string;
  password: string;
};

const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`
export const useLogin = () => {
  return useMutation<Response.Tokens, LoginRequest>(LOGIN)
}
