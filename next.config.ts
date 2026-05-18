/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NextConfig } from "next";
//@ts-ignore
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

const nextConfig: NextConfig = {
    crossOrigin: 'anonymous',
    allowedDevOrigins: ['192.168.1.4:3000','192.168.1.4'],
  images: {
    remotePatterns: [
      {
        hostname: "phoenix-lms.fly.storage.tigris.dev",
        // //marshallms
        port: "",
        protocol: "https",
      },
    ],
  },

  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     config.plugins = [...config.plugins, new PrismaPlugin()];
  //   }
  turbopack:   {
  },
};

export default nextConfig;
