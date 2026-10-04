// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        root: process.cwd(),
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;