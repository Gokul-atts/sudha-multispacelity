/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/karur",
        destination: "/multispecialty-hospital-karur",
        permanent: true,
      },
      {
        source: "/branch/karur",
        destination: "/multispecialty-hospital-karur",
        permanent: true,
      },
    ];
  },

    experimental: {
    optimizePackageImports: [
      "react-icons",
      "lucide-react",
    ],
  },

};

export default nextConfig;
