<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
          <link rel="stylesheet" href="src/lib/styles/colors.css" />
          <link rel="stylesheet" href="src/lib/styles/typography.css" />
          <link rel="stylesheet" href="src/lib/styles/global.css" />

        <style type="text/css">
          body {
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.5;
            background:var(--gray-5);
            padding:2rem;
            padding-bottom:0;
          }

          main {
            background:var(--gray-1);
            border: 1px solid var(--gray-7);
            min-height:100%;
            padding:2rem;
            box-shadow: 0 0.5rem 1rem var(--gray-7);
            border-radius: 0.5rem 0.5rem 0 0;
          }

          .date {
            font-size: var(--step--1);
            color: var(--text-secondary);
            font-weight: 500;
          }

          .back {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: var(--step--1);
            border-bottom:none;
            transition: color 0.3s ease;
            padding: 0.25rem;
          }

          .back::before {
            content: "← " / "";
          }

          .back:hover {
              color: var(--text-primary);
            }

            	h1::before {
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
	h1 {
		align-items: baseline;
	}
        </style>
      </head>
      <body>
        <main>
          <section>
           <a href="/writing" class="back">Back to Writing</a>
            <h1><xsl:value-of select="/rss/channel/title"/> RSS</h1>
        <div class="description">Point your RSS reader to this page to read my articles in a more customizable environment.</div>
        <hr/>
        <xsl:for-each select="/rss/channel/item">
          <h2><a href="{link}"><xsl:value-of select="title"/></a></h2>
          <div class="date">
            <xsl:variable name="month" select="substring(pubDate, 9, 3)"/>
            <xsl:variable name="day" select="substring(pubDate, 6, 2)"/>
            <xsl:variable name="year" select="substring(pubDate, 13, 4)"/>
            <xsl:choose>
              <xsl:when test="$month='Jan'">January</xsl:when>
              <xsl:when test="$month='Feb'">February</xsl:when>
              <xsl:when test="$month='Mar'">March</xsl:when>
              <xsl:when test="$month='Apr'">April</xsl:when>
              <xsl:when test="$month='May'">May</xsl:when>
              <xsl:when test="$month='Jun'">June</xsl:when>
              <xsl:when test="$month='Jul'">July</xsl:when>
              <xsl:when test="$month='Aug'">August</xsl:when>
              <xsl:when test="$month='Sep'">September</xsl:when>
              <xsl:when test="$month='Oct'">October</xsl:when>
              <xsl:when test="$month='Nov'">November</xsl:when>
              <xsl:when test="$month='Dec'">December</xsl:when>
            </xsl:choose>
            <xsl:text> </xsl:text>
            <xsl:value-of select="number($day)"/>
            <xsl:text>, </xsl:text>
            <xsl:value-of select="$year"/>
          </div>
          <p><xsl:value-of select="description"/></p>
        </xsl:for-each>
          </section>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>