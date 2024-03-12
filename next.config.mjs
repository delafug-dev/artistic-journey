/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'lh5.ggpht.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.ggpht.com',
            },
            {
                protocol: 'https',
                hostname: 'lh6.ggpht.com',
            },
            {
                protocol: 'https',
                hostname: 'lh4.ggpht.com',
            }
        ]
    },
    env: {
      KEY_API: process.env.KEY_API,
    },
};

export default nextConfig;
