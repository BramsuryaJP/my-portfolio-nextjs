import { links } from './data'

export type SectionName = (typeof links)[number]['name']
export type PageName = (typeof links)[number]['hash']
