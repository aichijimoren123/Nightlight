import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        // Fetch user from your database
        // This is a placeholder. Replace with actual database query
        const user = {
          id: "1",
          name: "User",
          email: "user@example.com",
          password: "$2a$10$...", // Hashed password
        };

        if (!user) {
          return null;
        }

        // Compare the hashed password
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Custom sign-in logic
      // You can add additional checks or logging here if needed
      return true;
    },

    async redirect({ url, baseUrl }) {
      // Custom redirect logic
      // You can implement custom redirect rules here
      // For example, redirecting to a specific page after sign-in
      if (url.startsWith(baseUrl)) {
        return url;
      } else if (url.startsWith("/")) {
        return new URL(url, baseUrl).toString();
      }
      return baseUrl;
    },
    async session({ session, user }) {
      // Custom session logic
      // You can add additional user information to the session here
      if (session?.user) {
        session.user.id = user.id;
        // Add any other custom fields you want to include in the session
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // Custom JWT logic
      // You can add additional claims to the token here
      if (user) {
        token.id = user.id;
        // Add any other custom claims you want to include in the token
      }
      return token;
    },
  },
});
