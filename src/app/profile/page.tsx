
import { getServerSession } from "next-auth/next";

import Container from "@/components/layout/Container";
import { authConfig } from "@/configs/auth.config";

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <Container>
      <h1>Profile of {session?.user?.name}</h1>
      {/* {session?.user?.image && <img src={session.user.image} alt="" />} */}
    </Container>
  );
}