'use client'

import Error from 'next/error'
import React, { Suspense } from 'react'

const NotFound = () => {
	return (
		<Suspense fallback={null}>
			<html lang='en'>
				<body>
					<Error statusCode={404} />
				</body>
			</html>
		</Suspense>
	)
}

export default NotFound
