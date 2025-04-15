<svelte:head>
	<title>Site Details | Kai Pepler</title>
	<meta name="description" content="Details about this site" />
</svelte:head>

<h1>Site Details</h1>

<p>
	This site is written in Svelte and compiled using SvelteKit. Content is hosted in GitHub and
	published to Cloudflare Pages.
</p>

<hr />
<section>
	<h2 id="accessibility-statement">Accessibility Statement</h2>
	<p>
		I’ve designed this site to respect as many accessibility accomodations as possible. Once more of
		the site is built out I will document the featues here.
	</p>
	<p>
		If you have any issues using this site, encounter WCAG violations, or for any other reason have
		feedback that would improve usability, please contact me. I really appreciate all feedback!
	</p>
</section>
<hr />
<section>
	<h2 id="privacy-policy">Privacy Policy</h2>
	<p>
		I don't collect any user data from this site. The site and its domain are hosted on Cloudflare,
		and as such basic analytics such as unique visitor count are included there in aggregate.
	</p>
	<p>
		If I do add improved analytics in future, it will be some form of privacy-oriented system such
		as Matomo, it will respect browser Do Not Track requests, and I will document its usage here on
		this page.
	</p>
</section>

<style>
	li {
		font-size: var(--step-0);
		line-height: 25px;
		margin-bottom: 12px;
	}

	hr {
		border: none;
		border-top: 1px solid var(--gray-100);
	}

	p {
		line-height: 2rem;
	}
</style>
