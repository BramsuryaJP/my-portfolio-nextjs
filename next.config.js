// @ts-check

const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

const hostnames = ['media.dev.to']

/** @type {import('next').NextConfig} */
const config = {
	images: {
		remotePatterns: hostnames.map((hostname) => ({
			protocol: 'https',
			hostname,
		})),
	},
	experimental: {
		staleTimes: {
			dynamic: 120,
			static: 120,
		},
	},
}

module.exports = withNextIntl(config)
