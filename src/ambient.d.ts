// Squelch warnings of image imports from your assets dir
declare module '$lib/assets/*' {
	// eslint-disable-next-line @typescript-eslint/ban-types
	const meta: Object[];
	export default meta;
}
