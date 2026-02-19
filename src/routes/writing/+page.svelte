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
		Over the years I’ve learned from so many wonderful people who have chosen to share their work
		with the world. This page is a place where I write articles to reference those works, and put my
		own learnings back into the community.
	</p>
	<p>
		Topics include color theory, typography, coding, data visualization, accessibility, animation,
		and more.
	</p>
</section>
<!-- <section>
	<h2>Featured</h2>
	<p>Coming soon</p>
</section> -->
<section>
	<h2>All Articles</h2>
	{#if data.articles.length > 0}
		<ul>
			{#each data.articles as article}
				<li>
					<a href={`/writing/${article.slug}`}>{article.title}</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No articles are currently available.</p>
	{/if}
</section>

<section>
	<hr />
	<h2 class="visually-hidden">RSS Feed</h2>
	<p>
		If you prefer to take in content through your own feed reader, you can find my RSS feed here:
	</p>

	<p><a href="/feed.xml" class="button">RSS Feed</a></p>
</section>

<section>
	<hr />
	<h2>No Revisionist History</h2>
	<p>I regularly review my content for accuracy and to prune/update broken links.</p>
	<p>
		When I’m wrong, I’ll update my statements so that any advice or learning I share reflects that
		new information. You can check the published and last edited dates at the top of every article.
	</p>
	<p>
		In addition, I host this entire site in a <a href="https://github.com/kaipepler/kaipepler"
			>public GitHub repository</a
		>, so every change — down to granular lines of code — is documented and freely available for
		anyone who wishes to review.
	</p>
</section>

<style>
	a[href$='xml']::before {
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
	a[href$='xml'] {
		display: inline-flex;
		align-items: center;
	}
</style>
