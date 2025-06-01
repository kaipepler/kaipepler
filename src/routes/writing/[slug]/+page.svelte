<script lang="ts">
	import { formatDate } from '$lib/utils/date';
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} - Writing - Kai Pepler</title>
	<meta name="description" content={data.meta.description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<section>
	<article>
		<h1>{data.meta.title}</h1>
		<small>Published {formatDate(data.meta.date)}</small>
		<svelte:component this={data.content} />
	</article>
</section>
