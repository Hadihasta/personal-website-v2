import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      fs: {
        browser: './empty.ts', // We recommend to fix code imports before using this method
      },
    },
  },
}
 
export default nextConfig