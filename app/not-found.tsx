'use client'

import GoogleAnalytics from '@/components/GoogleAnalytics'
import Error from 'next/error'

export default function NotFound() {
	return (
		<html lang='en'>
			<GoogleAnalytics />
			<body>
				<Error statusCode={404} />
			</body>
		</html>
	)
}
