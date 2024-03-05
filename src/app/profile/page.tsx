import { getServerSession } from "next-auth"
import { authConfig } from "@/configs/auth.config"
const Profile = async () => {
  const session = await getServerSession(authConfig)

  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && <img src={session.user.image} alt={session.user.name!} width={200} height={400} />}
    </div>
  )
}

export default Profile
