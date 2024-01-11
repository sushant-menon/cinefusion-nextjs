/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/Movies",
        destination: "/movies",
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      "cdn.iconscout.com",
      "png.pngtree.com",
      "cdn-icons-png.flaticon.com",
      "image.tmdb.org",
      "assets.nflxext.com",
    ],
  },
};

module.exports = nextConfig;
