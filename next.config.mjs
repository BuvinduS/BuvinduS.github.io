/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // disables next/image optimization so images work on static hosts
  },
};

export default nextConfig;
