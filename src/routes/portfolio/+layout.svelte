<script lang="ts">
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();

	import { browser } from '$app/environment';
	import '$lib/utils/lightbox.css';

	if (browser) {
		import('$lib/utils/lightbox.js');
	}
</script>

{@render children()}

<dialog id="lightbox">
	<form method="dialog">
		<button>Close lightbox</button>
	</form>
</dialog>
