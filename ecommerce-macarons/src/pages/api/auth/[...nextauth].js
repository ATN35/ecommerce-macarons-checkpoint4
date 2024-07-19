// src/pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'; // Import spécifique au fournisseur
import CredentialsProvider from 'next-auth/providers/credentials'; // Import spécifique au fournisseur

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      // Configuration des fournisseurs d'identifiants
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Logique d'authentification
        const user = { id: 1, name: "User", email: "user@example.com" };
        return user ? Promise.resolve(user) : Promise.resolve(null);
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newAccount: '/auth/new-account'
  },
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    }
  },
  // Autres configurations NextAuth
});
