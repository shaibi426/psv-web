import { withAuth } from "next-auth/middleware"
import CredentialsProvider from "next-auth/providers/credentials"
// const users= [{name:'ateeq',pwd:'123',role:"admin"},{name:'ahsan',pwd:'123',role:"user"}]
import axios from "axios"

const authOptions = {

  providers: [
    CredentialsProvider({

      name: 'Credentials',

      credentials: {
        username: { label: "Username", type: "text", placeholder: "user" },
        // role: { label: "role", type: "text", placeholder: "role" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.username || !credentials.password)
          return null
        const users = await axios.get(`http://203.99.61.134:7077/users/getUser/${credentials.username}`)

        const user = users.data.find((item) => item.userCnic === credentials.username)
        if (user?.userPwd === credentials.password) {

          
          return user

        }
        return null
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user){
       token.role = user.role
       token.userName = user.userName
       token.rank = user.rank
       token.beltNo = user.beltNo
       token.region = user.region
       token.zoneId = user.zoneId
       token.sectorId = user.sectorId
       token.beatId = user.beatId
       token.status = user.status
       token.webrole = user.webrole
      }  
      return token
    },
    session({ session, token }) {
      session.user.role = token.role
      session.user.userName = token.userName
      session.user.rank = token.rank
      session.user.beltNo = token.beltNo
      session.user.region = token.region
      session.user.zoneId = token.zoneId
      session.user.sectorId = token.sectorId
      session.user.beatId = token.beatId
      session.user.status = token.status
      session.user.webrole = token.webrole


      return session
    }
  },



  pages: {
    signIn: "/auth/signIn",
    signOut: "/auth/signOut"
  },

  secret: process.env.NEXTAUTH_SECRET
}

export { authOptions }