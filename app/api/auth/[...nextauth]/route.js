import NextAuth,{NextAuthOptions} from "next-auth"
import {authOptions} from './auathoptions'


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }