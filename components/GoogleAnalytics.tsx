'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { GoogleTagManager } from '@next/third-parties/google'

export function GoogleAnalytics({ gaId }: { gaId: string }) {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		const url = pathname + searchParams.toString()
		window.gtag('config', gaId, {
			page_path: url,
		})
	}, [pathname, searchParams, gaId])

	return <GoogleTagManager gtmId={gaId} />
}
