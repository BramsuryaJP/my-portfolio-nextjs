'use server'

import React from 'react'
import { Resend } from 'resend'
import { getErrorMessage, validateString } from '@/lib/utils'
import ContactFormEmail from '@/email/ContactFormEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData.get('senderEmail')
	const message = formData.get('message')
	const recaptchaToken = formData.get('recaptchaToken')

	// Validate reCAPTCHA token
	const recaptchaResponse = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
		{ method: 'POST' },
	)
	const recaptchaResult = await recaptchaResponse.json()

	if (!recaptchaResult.success) {
		return {
			error: 'reCAPTCHA verification failed',
		}
	}

	// simple server-side validation
	if (!validateString(senderEmail, 500)) {
		return {
			error: 'Invalid sender email',
		}
	}
	if (!validateString(message, 5000)) {
		return {
			error: 'Invalid message',
		}
	}

	let data
	try {
		data = await resend.emails.send({
			from: 'Contact Form <onboarding@resend.dev>',
			to: 'bramsuryajohannespaulus.work@gmail.com',
			subject: 'Message from contact form',
			reply_to: senderEmail,
			react: React.createElement(ContactFormEmail, {
				message: message,
				sender: senderEmail,
			}),
		})
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		}
	}

	return {
		data,
	}
}
