'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import React from 'react'

const RecaptchaProvider = ({ children }: { children: React.ReactNode }) => {
	try {
		return (
			<GoogleReCaptchaProvider
				reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
				scriptProps={{
					async: false,
					defer: false,
					appendTo: 'body',
					nonce: undefined,
				}}
			>
				{children}
			</GoogleReCaptchaProvider>
		)
	} catch (error) {
		console.log({ error })

		return null
	}
}

export default RecaptchaProvider
