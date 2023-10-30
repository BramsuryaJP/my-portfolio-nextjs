import React from 'react'
import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/components'

type ContactFormEmailProps = {
	message: string
	sender: string
}

export default function ContactFormEmail({
	message,
	sender,
}: ContactFormEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>New message from your portfolio site</Preview>
			<Tailwind>
				<Body className='bg-gray-100 '>
					<Container>
						<Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
							<Heading className='leading-tight !text-black'>
								You received the following message from the contact form
							</Heading>
							<Text className='!text-black'>{message}</Text>
							<Hr />
							<Text className='!text-black'>
								The sender's email is: {sender}
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	)
}
