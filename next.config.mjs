/** @type {import('next').NextConfig} */

const pathTokens = 'src/styles/tokens';

const nextConfig = {
  sassOptions: {
    additionalData: `
      @import "${pathTokens}/colors.scss";
      @import "${pathTokens}/sizes.scss";
    `
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mks-sistemas.nyc3.digitaloceanspaces.com',
        port: '',
        pathname: '/products/**',
      },
    ],
  },
};

export default nextConfig;
