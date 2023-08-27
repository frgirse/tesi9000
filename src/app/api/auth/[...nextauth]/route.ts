import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import { NextAuthOptions } from "next-auth";
import prisma from "prisma";

const authOptions : NextAuthOptions = {
    providers:[

        CredentialsProvider({
            name: "credentials",
            credentials: {
                name: { label: "Name", type: "text", placeholder: "Donald" },
                email: { label: "Email", type: "text", placeholder: "donald@gmx.de" },
                password: { label: "Password", type: "password" },
                
            },
                       async authorize(credentials, req) {
        if( !credentials || !credentials.email || credentials.password )
        return null;
        const user = users.find((item) => item.email === credentials.email ) 
                            if(user?.password === credentials.password )
                            {return user};
return null;
        
                   },
                }),
            ],
secret: process.env.NEXAUTH_SECRET,
        };
    
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };