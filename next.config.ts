import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bouxlfsjqkjoctdvqdtx.supabase.co",
        // might want to add a pathname pattern if you want to restrict
        // which paths on that hostname are allowed. For Supabase Storage,
        pathname: "/storage/v1/object/public/haven-images/**",
      },
    ],
  },
};

export default nextConfig;
