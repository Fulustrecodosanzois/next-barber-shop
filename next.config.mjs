// /** @type {import('next').NextConfig} */

// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 hostname: "utfs.io",
//             },
//         ],
//     },
// }

// export default nextConfig


/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
                pathname: '/f/**',
            },
        ],
    },
}

export default nextConfig
