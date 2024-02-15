import { NextApiRequest, NextApiResponse } from "next";
import { CredentialsProvider } from "next-auth/providers/credentials";


const AuthHandler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" }, // Corrected type to "email"
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: { email: string; password: string }, req: NextApiRequest) {
        // Assuming you have a function named yourAuthenticationFunction for user authentication
        const { email, password } = credentials;
        const user: User | null = await yourAuthenticationFunction(email, password);
        if (user) {
          return Promise.resolve(user);
        } else {
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
});

export default AuthHandler;
function yourAuthenticationFunction(email: string, password: string): any {
    throw new Error("Function not implemented.");
}

