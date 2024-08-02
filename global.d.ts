// global.d.ts
interface Window {
	gtag: (command: string, action: string, params: object) => void
}
