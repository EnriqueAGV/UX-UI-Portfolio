import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old case study URL, kept alive so links already shared with recruiters still work.
      { source: "/projects/one", destination: "/projects/credit-card-onboarding", permanent: true },
    ];
  },
};

export default nextConfig;
