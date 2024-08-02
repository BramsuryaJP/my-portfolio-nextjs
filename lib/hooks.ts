import { useCallback, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider'
import type { SectionName } from './types'

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
	const { ref, inView } = useInView({
		threshold,
	})
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionName)
		}
	}, [inView, setActiveSection, timeOfLastClick, sectionName])

	return { ref }
}

export function useGoogleAnalytics() {
	const trackEvent = useCallback(
		(action: string, category: string, label: string, value?: number) => {
			if (typeof window !== 'undefined' && window.gtag) {
				window.gtag('event', action, {
					event_category: category,
					event_label: label,
					value: value,
				})
			}
		},
		[],
	)

	return { trackEvent }
}
