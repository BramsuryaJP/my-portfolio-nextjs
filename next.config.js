// @ts-check

const withNextIntl = require('next-intl/plugin')('./i18n.ts')

/** @type {import('next').NextConfig} */
const config = {}

module.exports = withNextIntl(config)
