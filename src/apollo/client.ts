"use client"

import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { API_URL } from "./contstants";
import { getRefreshToken } from "@/shared/helpers/utils";
import { getSession } from "next-auth/react";

const httpLink = new HttpLink({
  uri: `${API_URL}/graphql`,
  credentials: "same-origin",
});

const authMiddleware = setContext(async (_, { headers }) => {
  let accessToken = "";
  try {
    const session = await getSession();
    const expiresIn = parseInt(session?.expires ?? "0", 10);
    accessToken = session?.user?.access_token ?? "";

    if (accessToken && expiresIn) {
      const currentTime = Math.floor(Date.now() / 1000);
      if (expiresIn < currentTime) {
        const { access_token } = await getRefreshToken(session?.user?.refresh_token!);
        accessToken = access_token;
      }
    }
  } catch (error) {
    console.error("Error fetching session:", error);
  }
  
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

const client = new ApolloClient({
   ssrMode: typeof window === 'undefined',
  cache: new InMemoryCache(),
  link: from([authMiddleware, httpLink])
});

export default client;

