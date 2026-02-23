/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codia-f2c.s3.us-west-1.amazonaws.com",
        pathname: "/image/**",
      },
    ],
  },
};

module.exports = nextConfig;
