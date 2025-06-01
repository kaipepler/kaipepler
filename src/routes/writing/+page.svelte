<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Writing - Kai Pepler</title>
	<meta name="description" content="My assorted writings" />
</svelte:head>

<section>
	<h1>Writing</h1>

	<p>
		One of the things I love most about design is that there are endless opportunities to learn. The
		field touches so many other disciplines: Color science. Typograpy. Data visualization.
		Psychology. Writing. Accessibility. Animation. Programming. Motion graphics. These are just a
		few of the fields to which you could easily devote your whole life.
	</p>
	<p>
		Over the years I’ve learned from the work of of brilliant people who have shared their content
		with the world. This page is a place where I write articles to reference those works, and put my
		own learnings back into the community.
	</p>
</section>
<!-- <section>
	<h2>Featured</h2>
	<p>Coming soon</p>
</section> -->
<section>
	<h2>All Articles</h2>
	<ul>
		{#each data.articles as article}
			<li>
				<a href={`/writing/${article.slug}`}>{article.title}</a>
			</li>
		{/each}
	</ul>
</section>

<section>
	<hr />
	<h2 class="visually-hidden">RSS Feed</h2>
	<p>
		If you prefer to process content through your own feed reader, you can find the link to my RSS
		feed below:
	</p>

	<p><a href="/rss.xml" class="button">RSS Feed</a></p>
</section>

<style>
	a[href='/rss.xml']::before {
		content: '';
		overflow: hidden;
		display: inline-block;
		margin-right: 0.2em;
		width: 1em;
		height: 0.75em;
		top: -0.1rem;
		background-color: currentColor;
		mask-image: url('/rss-icon.svg');
		mask-repeat: no-repeat;
		/* Add these properties to prevent layout shift */
		vertical-align: middle;
		flex-shrink: 0;
		position: relative;
	}

	/* Add this to create a more stable layout */
	a[href='/rss.xml'] {
		display: inline-flex;
		align-items: center;
	}
</style>
