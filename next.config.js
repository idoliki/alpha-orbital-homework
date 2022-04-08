/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: ['www.alpha-orbital.com'],
   },
   reactStrictMode: true,

   // SVGR
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/i,
         issuer: /\.[jt]sx?$/,
         use: [
            {
               loader: '@svgr/webpack',
               options: {
                  typescript: true,
                  icon: true,
               },
            },
         ],
      });

      return config;
   },
};

module.exports = nextConfig;
