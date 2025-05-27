---
title: Design Systems
description: Diving into the world’s top design systems
date: '2025-5-26’
categories:
  - designsystems
  - color
published: true
---

# Design Systems

Design systems are beautiful. They combine many facets of design practice into one entity. Color. Typography. Language.
Code. Motion. All blending to create one unique identity.

While the benefit of allowing many people to communicate in a single voice is obvious, one of the best functions of design systems is how they facilitate knowledge transfer across the industry. Many of the world’s top brands have made their design systems public, and in doing, have allowed other designers (even ones outside their company,) to grow from their experience and research.

Even if your goal is not to design in the style of Adobe, their [Spectrum design system](https://spectrum.adobe.com/) offers research into building color scales backed by the science of how we perceive color.

Even if you’re not designing for the Android ecosystem, Google’s [Material Design](https://m3.material.io) demonstrates how to organize design tokens that scale to situations of near infinite size and complexity.

In addition, Design systems have a significant impact on accessibility. A great number of WCAG violations occur at the design stage, and while no design system can guarantee accessibility on its own, when a design system takes an intentional approach to color, animation, fonts, touch target size, and (if included,) toolkit components, it offers a massive jump towards creating accessible content.

Many of the systems I link to in this article feature dedicated accessibility policies which is excellent. Unfortunately the style guide sites themselves tend to feature many WCAG violations and accessibility barriers. While this is disappointing coming from companies with the size and influence of the ones mentioned, it does highlight how important it is to push for accessible design and implementation regardless of the size of your business.

Even if the implementations of these style guides have problems, I’ve learned a lot from poring over these systems’ documentation over the years. I’ve included a few of my favorites below, in no particular order:

## Top Design Systems

**Note:** This is **not** an endorsement of the companies who own design systems on this list. This article is meant solely as a celebration of the shared knowledge design systems offer the community.

---

### [Carbon Design System](https://carbondesignsystem.com/)

IBM’s Carbon Design system is an amazing source of guidance on everything from layout with their beautiful and structured [2x Grid system](https://carbondesignsystem.com/elements/2x-grid/overview/)), to theming built on the logical and consistent [Carbon Color System](https://carbondesignsystem.com/elements/color/overview/). I also appreciate the video introductions they have to foundational elements like color, grids, and motion.

The entire design system is based on the [IBM Design Language](https://www.ibm.com/design/language/) which has its own website and is worth a read thanks to the fantastic documentation on decisions that led to their color, spacing, and typography.

In addition, their design team has written a number of blog posts about process. You can find them by digging through the archives of the [Carbon Design System Medium Publication](https://medium.com/carbondesign), but if you want a place to start, I’d recommend reading these three articles by **Shixie**, their design lead:

1. [Because, colors are beautiful](https://medium.com/carbondesign/because-colors-are-beautiful-52dd4cc39f09) (talking about the process of updating their color strategy and the decisions that need to go into building effective palettes)
2. [The Power to Serve](https://medium.com/carbondesign/the-power-to-serve-fb84387deef8) (discussing the process and workflows of an effective design systems team)
3. [Color palettes and accessibility features for data visualization](https://medium.com/carbondesign/color-palettes-and-accessibility-features-for-data-visualization-7869f4874fca) (covering the special considerations required when defining colors and patterns for data visualization)

## As a final plus, there is a dedicated section of the guide on [Carbon’s approach to accessibility](https://carbondesignsystem.com/guidelines/accessibility/overview/), and an accessibility tab on component pages outlining accessibility functions, testing, and best practices. This guidance is sound, and although the site is not without issues, it is one of the more accessibly-built guides on this list.

### [Spectrum](spectrum.adobe.com)

Adobe’s Spectrum design system does an amazing job of distilling an incredible about of complicated information down into clean and easy-to-reference documentation.

Like the IBM team behind Carbon, Adobe writes a lot about design. They have their own dedicated site for it, adobe.design. Unfortunately, that site leans more into corporate promotion of their app design than an exploration into the essence of design concepts. For that, you’d need to dig deeper.

[Nate Baldwin](https://natebaldw.in) is a senior staff designer at Adobe, and he’s responsible for many amazing projects including Leading Spectrum’s design token development, [Leonardo](https://leonardocolor.io/#) (a fantastic tool for generating and analyzing responsive color systems), and [Color & Contrast](https://colorandcontrast.com/#/) (an interactive reference book on color science and perception).

[Baldwin’s Medium blog](https://medium.com/@NateBaldwin) contains over two dozen posts detailing his approach to designing Spectrum, Leonardo, and other systems at scale. As a starting point, read his three-part series on developing adaptive color systems:

1. [Adaptive Color in Design Systems](https://medium.com/thinking-design/adaptive-color-in-design-systems-7bcd2e664fa0)
2. [Introducing Adaptive Color Palettes](https://medium.com/thinking-design/introducing-adaptive-color-palettes-111b5842fc88)
3. [Adaptive Color in Spectrum, Adobe’s Design System](https://medium.com/thinking-design/adaptive-color-in-spectrum-adobes-design-system-feeeec89a2c7)

In terms of accessibility, there is a dedicated page documenting [Spectrum Inclusive Design](https://spectrum.adobe.com/page/inclusive-design/) practices, and components contain design checklists outlining whether each one passes certain WCAG criteria. In my own testing with Apple VoiceOver, Spectrum’s navigation is problematic to use, but the pages themselves tend to be structured in an efficient way, and their many example images are coupled with clear and descriptive alt text.

---

### [Material Design](https://m3.material.io)

Google’s Material Design is one of the most influential design systems around. Design systems tend to be built around the idea of establishing a specific brand identity, making any app or service that uses the system feel similar. This used to be a common criticism of Material, but in recent releases they’ve been working to include ways to personalize the essence of any Material project, while keeping the benefits of working within their toolkit.

Material documents accessibility as one of its core principles on the [Accessibility & Material Design ](https://m3.material.io/foundations/overview/principles) page. They include multiple pages of guidance on how to build and utilize components in an accessible way.

Like Spectrum, I’ve run into difficulties navigating the site with a screen reader. The auto-expanding menus can make it challenging to explore, but the pages themselves have decent structure and contain high quality guidance.

**Bonus:** While not directly related to Material, Google maintains a dedicated design site, design.google. Like material’s site, it’s not without its accessibility issues, but here Google’s designers write a lot about interesting topics such as color theory, typography, and UX.

---

### [Ant Design](https://ant.design)

Speaking of systems designed to take on a massive amount of content, next up is Alibaba’s Ant Design. One thing that is striking about Ant Design is the sheer scope of the project. They not only supply toolkits for a wide range of platforms, but they also develop <a href="https://antv.antgroup.com/en/" target="_blank">AntV</a>, an entire network of solutions for handling complex data visualization scenarios.

Digging deeper, one of Ant’s designers **Shan'er** wrote a fascinating blog post in 2019 explaining how they approached building a effective palettes for data visualization: [数据可视化设计体系中的搭建（下）](https://zhuanlan.zhihu.com/p/70121039).

Data visualization, and data visualization color palettes are tricky to get right, since you need to formulate a set of colors that will render harmoniously with one another when shown against one another in a wide range of sizes and proportions. The task is made even harder when you take into account different types of color blindness, since color is a primary characteristic in many charts and graphs.

The data visualization blog post, like much of the design system itself, is written in Chinese, and not every page has an official translation. It’s worth exploring though, even if you have to run through a translator, since it’s beneficial to see the world of design outside a western perspective.

In terms of accessibility, I could not find any specific guidance regarding designing with accessibility in mind, and the complexity of their site leads to a number of WCAG violations. While the other systems on this list may be more useful when designing from an accessibility perspective, I’d still recommend exploring Ant if you can. They have so much content, you’re almost guaranteed to discover something beneficial for your own work along the way.

---

### Special Mention: [Radix Colors](https://www.radix-ui.com/colors)

While not a full design system in the typical sense, WorkOS’s Radix UI platform offers a great set of tools to handle common design-related tasks. Radix Primitives is a great set of headless UI components, and Radix Icons are a nice and consistent set of UI icons. But what I want to focus on is the Radix Color System.

Radix Colors stands out from other color systems through its superb documentation. The site lays out in perfect detail what purpose each step in the scale serves, and includes examples of the colors layered on top their own [Radix Primitives](https://www.radix-ui.com/primitives).

In earlier versions of Radix Colors, there was a page dedicated to showcasing contrast tests across all the colors. It appears that this page has been removed from version 3.0.0. In its place, selecting a given color swatch on the landing page will open a modal describing which colors and text types that color can pair with. My only issue with this is that they provide contrast calculations solely in APCA, and not in the legally-binding WCAG formula.

<aside>While APCA offers a number of advantages over the current flawed algorithm, it’s not ready for production use and must be cross-checked against the WCAG 2.2 formula to be compliant. For this reason, if design systems include APCA, they should also reference. This however is a topic for another article.</aside>

---

## Wrapping Up

There are many other amazing design systems out there beyond what I featured in this article. I combed through dozens of systems to come up with this short a list, but this naturally means many great systems got left out. I may update this article in future to document additional systems with unique benefits, like [TRMNL’s Framework](https://usetrmnl.com/framework), a design system built for e-ink displays.

If you’d like to explore more about design systems, the following three sites are great hubs to dig into more components and systems.

- [The Component Gallery](https://component.gallery/components/button/)
- [Adele by UXPin](https://adele.uxpin.com)
- [Design Systems Repo](https://designsystemsrepo.com)
- [Design Systems Surf](https://designsystems.surf)

And for posterity, here are 6 more design systems that I didn’t see sourced in the hubs above:

- [GE Ethos Design System](https://ethosdesignsystem.com)
- [SAP Fiori](https://experience.sap.com/fiori-design/)
- [Liferay Design](https://liferay.design/lexicon/)
- [Mineral UI](https://mineral-ui.netlify.app/)
- [Rakuten Design](https://www.rakuten.design)
- [LINE Design System](https://designsystem.line.me)
