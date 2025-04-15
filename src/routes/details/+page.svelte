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
		I’ve designed this site to respect as many accessibility accomodations as possible. Below are a
		range of the features provided: I want this site to offer a good experience to all users, and as
		such I’m working to incorporate as many accessibility features as possible. Below is a list of
		the features I’m working on, alongside their rough state of completion:
	</p>
	<ul>
		<li>
			If you’re on macOS, the site will respect OS-level Increase Contrast mode, heighting the
			distinction between colors and outlining click targets across all pages. <em
				>In development, not yet available.</em
			>
		</li>
		<li>
			The site respects OS-level Reduce Motion requests, eliminating all animations except gentle
			fades. <em>In development, not yet available.</em>
		</li>
		<li>
			If you're on windows, the site will respect Windows Forced Colors Mode, overriding all styling
			to the colors you select in your OS settings. <em>Planned.</em>
		</li>
		<li>
			The site is fully navigable using only a keyboard. In addition, all content is optimized for
			screen readers. <em>Mostly complete. Needs additional testing.</em>
		</li>
		<li>
			The site automatically adopts your system theme to minimize eye strain. in addition, colors
			are tuned across both themes to provide sufficient contrast for comfortable viewing. <em
				>Mostly complete. Colors need a bit more tuning, especially on dark mode.</em
			>
		</li>
		<li>
			Text is defined relative to your browser’s root font size, so depending on how you’ve
			configured your browser, text will reflow to match your desired reading size. <em
				>Mostly complete. Font scales need a bit more tuning.</em
			>
		</li>
		<li>
			Typography is balanced with additional line height and kerning to improve readability. <em
				>Mostly complete, but needs more tuning in the fine details.</em
			>
		</li>
		<li>
			Text across the site supports resizing to at least 200%, either through browser zoom or by
			increasing base font size. <em>Complete, but needs additional testing.</em>
		</li>
		<li>
			Text-based pages (such as those in the Writings section) are optimized for Reader modes,
			allowing further user customization for a comfortable reading environment. <em
				>Complete, but needs additional testing.</em
			>
		</li>
	</ul>
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
		line-height: 2;
		margin-bottom: 12px;
		max-width: 800px;
	}

	hr {
		border: none;
		border-top: 1px solid var(--gray-100);
	}
</style>
