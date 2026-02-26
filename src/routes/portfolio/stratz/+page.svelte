<svelte:head>
	<title>STRATZ - Portfolio - Kai Pepler</title>
	<meta name="description" content="Examples of art and design work" />
</svelte:head>
<section>
	<h1>STRATZ Case Study</h1>
</section>

<!-- <section>
	<h2>Description</h2>
	<p>STRATZ Esports is an advanced esports analytics platform for Dota 2.</p>
	<h3>Date</h3>
	<p>2019 – 2022</p>
	<h3>Medium</h3>
	<p>Web App, Video</p>
</section> -->

<section>
	<h2 class="visually-hidden">Overview</h2>
	<p>
		<a href="https://stratz.com">STRATZ Esports</a> is an advanced analytics platform for the
		popular esport <a href="https://www.dota2.com/home">Dota 2</a>, by Valve Software.
	</p>
	<p>
		In a small industry dominated by two primary competitors, I increased the STRATZ user count by
		300% over the course of a three-year intensive redesign.
	</p>
	<blockquote>
		I increased the STRATZ user count by 300% over the course of a three-year intensive redesign.
	</blockquote>
</section>

<section>
	<h2>Problem & Solution</h2>
	<p>
		STRATZ contains more data than any of their competitors, but the usability of that data was hurt
		by overburdened interfaces.
	</p>
	<p>
		Every page featured dozens of stats and buttons, making even the simplest screens challenging to
		read. This stifled adoption, especially when compared to the more approachable interfaces of
		competing products.
	</p>
	<p>
		To address this I defined a simple redesign strategy: Focus each screen on one specific use case
		at a time. Even if that meant less information available in a given view, the data that remains
		is now elevated in importance.
	</p>
	<p>
		This strategy, coupled with a fresh UI, allows users to find what they’re looking for faster.
	</p>
</section>

<section>
	<h2>Research</h2>
	<h3>Users</h3>
	<p>
		STRATZ was built for Dota players, and the visual cues in a game of Dota 2 are rich and
		plentiful. Players build up thousands of hours of split-second recognition of the hundreds of
		icons, thumbnails, and colors used throughout the game's interface.
	</p>
	<p>
		Therefore I attempted to use graphics and iconography directly from the game wherever possible,
		so that many fundamental data points can be immediately familiar and recognizable to the target
		audience.
	</p>
	<h3>Demographics</h3>
	<p>
		The majority of STRATZ traffic originates from outside the United States. Therefore localization
		needed to be a priority, especially with languages popular in the Dota scene such as Russian and
		Chinese.
	</p>
	<h3>Interviews</h3>
	<p>
		Over time, I conducted a number of interviews with STRATZ users, Dota 2 players, and content
		creators. Most interviews took place informally to get a sense of people’s opinions of the
		STRATZ brand, what users’ greatest pain points were, and what they prefer about competitors that
		kept them from using STRATZ instead.
	</p>
	<p>
		Many of the responses emphasized that the greatest pain point was the convoluted UI and its poor
		usability. As I continued to gather feedback corresponding with new feature releases, the
		responses have been overwhelmingly positive.
	</p>
	<h3>Competition</h3>

	<div class="mediaframe right">
		<table class="compact">
			<caption>Hero Page Functionality</caption>
			<thead>
				<tr>
					<th></th>
					<th scope="col">Dotabuff</th>
					<th scope="col">OpenDota</th>
					<th scope="col">STRATZ</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Overview</th>
					<td>✓</td>
					<td>✓</td>
					<td>✓</td>
				</tr>
				<tr>
					<th scope="row">Guides</th>
					<td>✓</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">Items</th>
					<td>✓</td>
					<td>✓</td>
					<td>✓</td>
				</tr>
				<tr>
					<th scope="row">Counters</th>
					<td>✓</td>
					<td></td>
					<td>✓</td>
				</tr>
				<tr>
					<th scope="row">Clips</th>
					<td>✓</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">Ability Builds</th>
					<td>✓</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">Abilities</th>
					<td>✓</td>
					<td>✓</td>
					<td>✓</td>
				</tr>
				<tr>
					<th scope="row">Trends</th>
					<td>✓</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">Top Players</th>
					<td>✓</td>
					<td></td>
					<td>✓</td>
				</tr>
				<tr>
					<th scope="row">Cosmetics</th>
					<td>✓</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">Benchmarks</th>
					<td></td>
					<td>✓</td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">Recent Matches</th>
					<td></td>
					<td>✓</td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">Durations</th>
					<td></td>
					<td>✓</td>
					<td></td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<th scope="row">Coverage</th>
					<td>83%</td>
					<td>50%</td>
					<td>42%</td>
				</tr>
			</tfoot>
		</table>
	</div>

	<p>
		STRATZ faces competition from two main platforms: <a href="https://www.dotabuff.com">Dotabuff</a
		>, and <a href="https://www.opendota.com">OpenDota</a>.
	</p>
	<p>
		While their designs differ, both platforms offer the ability to view Dota stats through
		web-based interfaces. Dotabuff has first-mover advantage and is the top name in Dota analytics,
		while OpenDota is an open-source community driven project.
	</p>
	<p>
		In order to be considered the pinnacle of esports analytics, STRATZ must achieve at minimum
		feature parity with these platforms, otherwise consumers with a particular use-case in mind will
		stay with the platform that they know serves their needs.
	</p>
	<p>
		As I progressed through redesigning the many sections on STRATZ, I conducted regular competitor
		research, to discover which key features in a given section are not available on STRATZ. This
		allowed me to guide the feature development towards addressing these gaps in our functionality.
	</p>
	<p>
		One of the largest gaps in feature parity I discovered was the inability for users to discover
		and learn from hero guides. Hero Guides are not available on OpenDota, meaning all users wanting
		guides will be driven directly to Dotabuff, STRATZ’s largest competitor.
	</p>
	<p>
		Upon learning this, I spearheaded a two-week design intensive to create our own Guides system,
		aiming to go even further in terms of functionality than what Dotabuff offers.
	</p>
	<p>
		The STRATZ hero guides have since gone on to become the 5<sup>th</sup> most popular feature on the
		site.
	</p>
</section>

<section>
	<h2>Information Architecture</h2>
	<p>
		For a project as large as STRATZ, there need to be systems in place to organize what needs to be
		done and when.
	</p>
	<h3>Site Map</h3>

	<div class="mediaframe right">
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-ia-sitemap.webp"
				alt="Range of color-coded cards showing key areas of the site, laid out in an isometric pattern."
				loading="lazy"
			/>
		</lightbox-image>
	</div>

	<p>
		For clarity, and ease of sharing goals with the rest of the team, I put together a color-coded
		site map, visualizing all the sections of STRATZ, which pieces had been completed, which were
		still in the design and ideation phase, and which features are currently missing from our
		roadmap. (The latter was assisted by the competitor research described above.) While this map is
		not presented in its entirety here for privacy reasons, it was a useful tool in being able to
		picture the full scope of the project as it developed.
	</p>
	<h3>User Task Flow</h3>

	<div class="mediaframe right">
		<iframe
			width="560"
			height="315"
			style="width:100%"
			src="https://www.youtube-nocookie.com/embed/vvM9Y1Dcrt0?si=LQyp9d72DmqAjw6g"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</div>

	<p>
		While much of the day-to-day focus of the STRATZ project was on the redesign and development of
		individual sections across the platform, I was also mindful of the overall user flows. How many
		clicks does it take to access a certain key page? How much time is spent waiting for pages to
		load? All of these factors add to (or detract from) the user experience, and I took care to
		refine these flows over time.
	</p>
	<p>
		I created this animation featuring an overhaul to the site navigation, where I put special
		attention on the user’s ability to reach any page in 4 clicks or fewer.
	</p>
</section>

<section>
	<h2>Wireframes</h2>

	<div class="mediaframe right">
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-wireframes.webp"
				class="invert subtle"
				alt="Hand-drawn sketch of a profile page. The top-left tile shows a message saying, “Welcome back, Fantôme!” alongside additional content blocks for Hero Advice, Meta Advice, and a Drafting Assistant. A section for recent matches is blocked out below, and the right side has additional unlabeled cards blocked out."
				loading="lazy"
			/>
		</lightbox-image>
	</div>

	<p>
		Much of the dynamic of the STRATZ team has required higher-fidelity prototypes. There are
		several reasons for this, chiefly among them the need to convince all relevant stakeholders of
		the direction.
	</p>
	<p>
		That said, for some of the larger page redesigns, I prepared several sketches and wireframes to
		plot out the direction in a flexible manner.
	</p>
</section>

<section>
	<h2>Design System</h2>
	<p>
		Over the course of my time with STRATZ, I built out a design library, refining their existing UI
		elements, as well as adding new ones where necessary.
	</p>
	<h3>Iconography</h3>

	<div class="mediaframe right">
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-design-iconography-1.webp"
				alt="An isometric view of groups of colorful icons, each indicating different aspects of Dota 2 terminology."
				loading="lazy"
			/>
		</lightbox-image>

		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-design-iconography-2.webp"
				alt="A set of ranking medals from S-tier to F-tier, showing a transformation from stylized graphics to simple and consistent icons"
				loading="lazy"
			/>
		</lightbox-image>

		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-design-iconography-3.webp"
				alt="A set of icons showing that there are 10 possible combinations of role + lane icons, with an arrow indicating that all these combinations can be more cleanly represented by a set of 5 new position icons: Safe Lane, Mid Lane, Off Lane, Soft Support, and Hard Support."
				loading="lazy"
			/>
		</lightbox-image>
	</div>

	<p>
		Many icons and visuals are used within Dota 2. I built off of this foundation and refined the
		iconography across STRATZ to be visually consistent both with itself and with their in-game
		counterparts.
	</p>
	<h3>Typography</h3>

	<div class="mediaframe right">
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-design-type-1.webp"
				alt="Two pairings of text, both reading “Primary, Secondary.” In the first set, the text is almost the same size, with only slight dimming indicating the secondary nature of the second string. In the second set, the size difference between the text is much more pronounced, and the primary string is bolded, creating clear hierarchy."
				loading="lazy"
			/>
		</lightbox-image>

		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-design-type-2.webp"
				alt="Two pairings of text reading “Primary, Secondary,” with red lines behind them, indicating that the x-height for the new font is larger."
				loading="lazy"
			/>
		</lightbox-image>

		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-design-type-3.webp"
				alt="Three parings of text indicating how the font uses a consistent style for different languages. The text reads “Первичный Вторичный” for Russian, “基本的 中学” for Chinese, and “Primary Secondary” for English"
				loading="lazy"
			/>
		</lightbox-image>
	</div>

	<p>
		The type systems used across the site originally had several legibility concerns. They were too
		thin, and there was not enough variance in size, weight, and color to make key points stand out.
		Additionally, many pieces of content were rendered in all-caps, which while not fundamentally an
		issue, added additional noise to an already overwhelmed experience.
	</p>
	<p>
		I defined a new set of sizes and weights for all our type styles, paying careful attention to
		contrast at all times. Additionally, I switched the main typeface family to Noto Sans, which
		allowed for increased legibility as well as visually-consistent localization across all our
		supported languages.
	</p>
	<h3>Color</h3>

	<div class="mediaframe right">
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-design-color-1.webp"
				alt="A color wheel with the STRATZ logo in the center and 360 rays of color radiating out to form a circle. A label below the wheel reads “360° Palette Update, and a gold STRATZ wordmark sits in the corner.”"
				loading="lazy"
			/>
		</lightbox-image>
	</div>

	<p>
		The color palette of STRATZ already trended towards blue tones because of the logo, so I leaned
		into that, creating sets of blue gradients for the background colors of our promo material. The
		dark blue highlight color currently in use didn’t render well on the dark backgrounds of the
		interface, so I switched that to a bright gold.
	</p>
	<p>
		I also made minor and major adjustments to the hundreds of other colors used across the site, to
		improve contrast and comply with WCAG guidelines.
	</p>
	<h3>Accessibility</h3>

	<div class="mediaframe right">
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-design-a11y-1.webp"
				alt="A hero stats page slashed down one side, with one part showing default coloring, and the second showcasing alternate colors. A title above the page reads“Introducing Colorblind Mode.”"
				loading="lazy"
			/>
		</lightbox-image>
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-design-a11y-2.webp"
				alt="Two hero stats tables, simulating the effects of colorblindness."
				loading="lazy"
			/>
		</lightbox-image>
	</div>

	<p>
		Accessibility and universal design are concepts I hold close in every project I undertake. For
		STRATZ, in addition to the color adjustments described above, I also championed several
		accessibility-minded features:
	</p>
	<p>
		I supported the creation of a three-tone theming system, allowing users to select between
		“Midnight” (black background), “Twilight” (dark gray background), and “Daylight” (white
		background) themes, so users can select a theme that works best for their personal contrast
		comfort thresholds.
	</p>
	<p>
		I also created a “Colorblind” mode for the site, which adjusts the site palette, targeting
		colors frequently confused by people with colorblindness.
	</p>
</section>

<section>
	<h2>Stakeholder Presentations</h2>

	<div class="mediaframe right">
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-stakeholders-1.webp"
				alt="String of text reading “Troll Warlord played core in the safe lane, and won an immortal-tier comeback. He had high game impact, and was the match MVP.”"
				loading="lazy"
			/>
		</lightbox-image>
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-stakeholders-2.webp"
				alt="The same string of text is now highlighted by word, with key concepts (Troll Warlord, core, safe lane, won, immortal-tier, comeback, high game impact, and MVP) matched to graphics and icons to visually communicate the narrative."
				loading="lazy"
			/>
		</lightbox-image>
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-stakeholders-3.webp"
				alt="The graphics and icons are now all arranged in a table row, showing the same narrative visually."
				loading="lazy"
			/>
		</lightbox-image>
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-stakeholders-4.webp"
				alt="A set of the table rows, indicating a set of match performances."
				loading="lazy"
			/>
		</lightbox-image>
	</div>

	<p>
		After building a new or redesigned page, I would prepare a presentation to introduce the new
		concepts to the rest of the team.
	</p>
	<p>
		As a small team, every member functioned as a stakeholder in the final product, so it was
		important to get everyone as close to aligned with the vision as possible before a feature could
		be shipped. (Of course no group can agree in 100% of circumstances, but it is important to the
		company culture and team health that everyone has a voice in the product direction.)
	</p>
	<p>
		The example shown here is an excerpt of one of the first pitch decks I prepared for the team. In
		it, I demonstrate how the strategy for a hero match row can be abstracted from a sentence-based
		structure into icon and visual form. Therefore, when all the icons are arranged in a table, they
		can read fluidly across both the X and Y axes.
	</p>
</section>

<section>
	<h2>Revisions</h2>

	<div class="mediaframe right">
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-revisions-1.webp"
				alt="A marked up set of hero table rows, with color-coded boxes and arrows indicating key takeaways: 1. Repetition is bad, 2. Related ideas need to be better associated, 3. IMP Meter can be rendered better, 4. We need party/solo indicators, and 5. Text density can be further refined."
				loading="lazy"
			/>
		</lightbox-image>
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-revisions-2.webp"
				alt="A comparison of old versus new designs titled, “Repetition is bad,” showing how match tier and game type can be combined into a new icon."
				loading="lazy"
			/>
		</lightbox-image>
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-revisions-3.webp"
				alt="A comparison of old versus new designs titled, Related ideas need to be better associated,” showing how match outcome and match intensity can be combined into a new combined tag."
				loading="lazy"
			/>
		</lightbox-image>
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-revisions-4.webp"
				alt="A comparison of old versus new designs titled, “IMP Meter can be rendered better,” showing a simplified set of purple bars to represent IMP."
				loading="lazy"
			/>
		</lightbox-image>
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-revisions-5.webp"
				alt="A comparison of old versus new designs titled, “We need party/solo indicators,” showing the addition of new icons to represent party status."
				loading="lazy"
			/>
		</lightbox-image>
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-revisions-6.webp"
				alt="A comparison of old versus new designs titled, “Text density can be further refined,” showing how groupings of words can be simplified down to single labels."
				loading="lazy"
			/>
		</lightbox-image>
	</div>

	<p>
		After a team review, I went through a secondary design phase, parsing the feedback, and updating
		the design in relevant places. This multi-phase approach allowed for a much higher-quality final
		product to be prepared before reaching the main site.
	</p>
</section>

<section>
	<h2>External Feedback</h2>

	<div class="mediaframe right">
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-external-feedback.webp"
				class="subtle"
				alt="A set of 5 promotional graphics highlighting the releases of different features. The cards read “Match Overview,” “Match Graphics Part 2,” “Introducing Breakdown,” “Introducing the STRATZ.com 2020 Battle Pass Card,” and “Introducing Trends.”"
				loading="lazy"
			/>
		</lightbox-image>
	</div>

	<p>
		Once a new design is complete, I feature the new functionality in a series of promotional
		graphics, and it gets announced in a company blog post going into more detail.
	</p>
	<p>
		Now that the feature is in the hands of the users, I continue to monitor relevant media
		channels, collecting feedback to take into account for future updates.
	</p>
</section>

<section>
	<h2>Future</h2>
	<p>
		I’m happy with how STRATZ has evolved over the course of my work there. As of 2022, the site has
		grown by 300% in terms of user count, and is continuing its upward trajectory. The design
		language of the company is refined and matured to the point where many new pages and features
		can be imagined efficiently and in high-fidelity using our component library. Our users continue
		to share praise and positive feedback on the site direction.
	</p>
	<p>
		I’ve also been able to learn a lot about efficient design methodologies, revision processes, and
		feature prioritization over the course of my time on this project. Design skill is a lifelong
		pursuit, and I will take these lessons with me into all future projects I undertake.
	</p>

	<p><a class="button primary" href="https://stratz.com">Visit STRATZ</a></p>

	<aside aria-labelledby="external">
		<strong aria-hidden="true"><span id="external">Note</span>:</strong> Since my departure, STRATZ has
		made choices that deviate from my design direction, notably the addition of sports betting advertisements.
	</aside>
</section>

<section>
	<h2 class="visually-hidden">Additional Images</h2>

	<div class="mediaframe fullsize">
		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-finalthoughts-1.webp"
				alt="An isometric view of a player overview page, with 6 sections highlighted to show improvements: Time Filter, Visual Match Count, Visual Win Rate, Most Played Heroes, Activity Chart, and Teammates."
				loading="lazy"
			/>
		</lightbox-image>

		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-finalthoughts-2.webp"
				alt="Two New Views for Match Overview pages, promoting a Card View and a List View"
				loading="lazy"
			/>
		</lightbox-image>

		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-finalthoughts-3.webp"
				alt="Stability Update June 2022, showing six improvements: Translation Progress, New Filters, TypeScript Conversion, Speed Improvements, Guilds Design Updates, and Apollo Fixes."
				loading="lazy"
			/>
		</lightbox-image>

		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-finalthoughts-4.webp"
				alt="A promotional graphic for a new quick swicher for page sections, demonstrating how easy it is to swap between hero pages."
				loading="lazy"
			/>
		</lightbox-image>

		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-finalthoughts-5.webp"
				alt="August Update, showing a fan of promotional cards, highlighting improvements to Match Pages, IMP, Icons, & More"
				loading="lazy"
			/>
		</lightbox-image>

		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-finalthoughts-6.webp"
				alt="A map of the world with gold pins connecting in a web across different countries. The title reads “STRATZ Global highlights for Dota 2.”"
				loading="lazy"
			/>
		</lightbox-image>

		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-finalthoughts-7.webp"
				alt="A table showing a new Dota Plus Player Heroes page."
				loading="lazy"
			/>
		</lightbox-image>

		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-finalthoughts-8.webp"
				alt="STRATZ.com Top Heores by Win Rate, with a set of heroes paired with their win rates, top counters, and best pairings."
				loading="lazy"
			/>
		</lightbox-image>

		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-finalthoughts-9.webp"
				alt="STRATZ Dedicated TI Support, highlighting The International 10, alongside a cascade of previous International promotional cards."
				loading="lazy"
			/>
		</lightbox-image>

		<lightbox-image dialog-id="lightbox">
			<img
				src="/portfolio/stratz/stratz-finalthoughts-10.webp"
				alt="STRATZ 2021, A Year in Review with an isometric layout of promotional update cards from the year."
				loading="lazy"
			/>
		</lightbox-image>
	</div>
</section>

<style>
	table {
		thead th {
			text-align: center;
		}

		td {
			text-align: center;
		}

		tbody {
			td:not(:empty) {
				background: var(--green-5);
			}
		}
	}
</style>
