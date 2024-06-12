// @ts-check

const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

const hostnames = ['media.dev.to']

/** @type {import('next').NextConfig} */
const config = {
	images: {
		remotePatterns: hostnames.map(hostname => ({ protocol: 'https', hostname }))
	},
}

module.exports = withNextIntl(config)
