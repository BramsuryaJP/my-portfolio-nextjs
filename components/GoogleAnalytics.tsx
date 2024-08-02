'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

export function GoogleAnalytics({ gaId }: { gaId: string }) {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			window.gtag('config', gaId, {
				page_path: url,
			})
		}

		handleRouteChange(pathname + searchParams.toString())
	}, [pathname, searchParams, gaId])

	return (
		<>
			<Script
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
			/>
			<Script
				id='google-analytics'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
		</>
	)
}
