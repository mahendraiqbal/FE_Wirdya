module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost:3000"],
  },
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/",
      },
    ];
  },
}