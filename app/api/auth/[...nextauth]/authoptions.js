import { withAuth } from "next-auth/middleware"
import CredentialsProvider from "next-auth/providers/credentials"
const users= [{name:'ateeq',pwd:'123',role:"admin"},{name:'ahsan',pwd:'123',role:"user"}]

 const authOptions ={
  
    providers: [
      CredentialsProvider({
          
          name: 'Credentials',
          
          credentials: {
            username: { label: "Username", type: "text", placeholder: "user" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {








              if(!credentials || !credentials.username|| ! credentials.password)
              return null
            const user = users.find((item)=>item.name === credentials.username)
            if(user?.pwd === credentials.password ){
              console.log(user)
            return user
            }
             return null
          }
        })
      ],
    callbacks:{
      async jwt({user,token}){
        if (user){
          token.role = user.role
          return token
        }
      },

      async session({session,token}){
        if(session.user){
          session.user.role = token.role
          return session
        }
      }
    },



      pages:{
        signIn:"/auth/signIn",
        signOut:"/auth/signOut"
      },

      secret :process.env.NEXTAUTH_SECRET
 }

 export {authOptions}


