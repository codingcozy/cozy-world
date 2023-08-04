/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
        i18n: {
          locales: ["en", "ko", "ja"],
          defaultLocale: "en",
        },
      },
    ];
  },
};

module.exports = nextConfig;
