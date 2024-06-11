// @ts-check

const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const config = {}

module.exports = withNextIntl(config)
