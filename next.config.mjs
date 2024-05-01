/** @type {import('next').NextConfig} */

const pathTokens = 'src/styles/tokens';

const nextConfig = {
  sassOptions: {
    additionalData: `
      @import "${pathTokens}/colors.scss";
      @import "${pathTokens}/sizes.scss";
    `
  }
};

export default nextConfig;
