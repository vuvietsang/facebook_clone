import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "", // Hex color value
    logo: "", // Absolute URL to logo image
  },
});
