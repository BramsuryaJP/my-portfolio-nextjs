import { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'id'] as const

export const pathnames = {
	'/': '/',
  '/blog/[blogId]': '/blog/[blogId]',
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
