
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      react: require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
      canvas: false,
    };
    return config;
  },
};

export default nextConfig;