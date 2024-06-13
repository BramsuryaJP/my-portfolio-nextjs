'use client'

import React, { createContext, useContext, useState } from 'react'
import type { PageName } from '@/lib/types'

type ActivePageContextProviderProps = {
	children: React.ReactNode
}

type ActivePageContextType = {
	activePage: PageName
	setActivePage: React.Dispatch<React.SetStateAction<PageName>>
	timeOfLastClick: number
	setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

const ActivePageCpntext = createContext<ActivePageContextType | null>(null)

export default function ActivePageContextProvider({
	children,
}: ActivePageContextProviderProps) {
	const [activePage, setActivePage] = useState<PageName>('/blog')
	const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)

	return (
		<ActivePageCpntext.Provider
			value={{
				activePage,
				setActivePage,
				timeOfLastClick,
				setTimeOfLastClick,
			}}
		>
			{children}
		</ActivePageCpntext.Provider>
	)
}

export function useActivePageContext() {
	const context = useContext(ActivePageCpntext)

	if (context === null) {
		throw new Error(
			'UseActivePageContext must be used within a ActivePageContextProvider',
		)
	}

	return context
}
