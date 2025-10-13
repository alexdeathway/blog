/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["visitor-badge.glitch.me"],
		// remotePatterns: [
		// 	{
		// 	  protocol: 'https',
		// 	  hostname: 'visitor-badge.glitch.me',
		// 	  port: '',
		// 	  pathname: '/**',
		// 	},
		// ],
	},
}

module.exports = nextConfig
