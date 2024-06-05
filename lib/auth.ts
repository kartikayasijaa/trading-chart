import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    secret: process.env.SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID! ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET! ?? ""
        })
    ],
    // pages: {
    //     signIn: "/auth"
    // }
};
