import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://newsapi.org/v2/everything', () => {
    return HttpResponse.json({
      status: 'ok',
      totalResults: 1,
      articles: [
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "Microsoft Bans 'Microslop' On Its Discord, Then Locks the Server",
            "description": "Over the weekend, Windows Latest noticed that Microsoft's official Copilot Discord server began automatically blocking the term \"Microslop.\" As shown in a screenshot, any message containing the word is automatically prevented from posting, and users receive a…",
            "url": "https://tech.slashdot.org/story/26/03/02/1847201/microsoft-bans-microslop-on-its-discord-then-locks-the-server",
            "urlToImage": "https://a.fsdn.com/sd/topics/windows_64.png",
            "publishedAt": "2026-03-02T20:00:00Z",
            "content": "Windows Latest found that sending a message with the word \"Microslop\" inside the official Copilot Discord server immediately triggers an automated moderation response. The message does not appear pub… [+961 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Verge Staff",
            "title": "We asked experts how to build a resume for the AI hiring era",
            "description": "With AI-backed hiring on the rise, tips for \"hacking\" your resume are all over social media. As job search companies increasingly rely on artificial intelligence to sort through applications, job seekers wonder how to best position themselves with those filte…",
            "url": "https://www.theverge.com/featured-video/884368/we-asked-experts-how-to-build-a-resume-for-the-ai-hiring-era",
            "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2026/02/AI_Resume_Site_Art.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
            "publishedAt": "2026-02-26T15:08:53Z",
            "content": "<ul><li></li><li></li></ul>\r\nHacking the AI filters probably wont get you the job.\r\nHacking the AI filters probably wont get you the job.\r\nby\r\nVerge StaffClose\r\nPosts from this author will be added t… [+2725 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Niketpatel.com"
            },
            "author": "Niket Patel",
            "title": "Why Go Can't Try",
            "description": "Go's refusal to add a try keyword isn't about loving boilerplate.",
            "url": "https://niketpatel.com/essays/why-go-cant-try",
            "urlToImage": null,
            "publishedAt": "2026-03-02T14:03:53Z",
            "content": "Every Go developer has written this code thousands of times:\r\ndata, err := os.ReadFile(path)\r\nif err != nil {\r\n return nil, err\r\n}\r\nAnd every Go developer has at some point looked at Zig or Rust and … [+6893 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "AJ Dellinger",
            "title": "Gemini Is Now Your Permanent Passenger in Google Maps",
            "description": "Hopefully it doesn't hallucinate directions.",
            "url": "https://gizmodo.com/gemini-is-now-your-permanent-passenger-in-google-maps-2000732868",
            "urlToImage": "https://gizmodo.com/app/uploads/2026/03/GoogleMapsGemini-1200x675.jpg",
            "publishedAt": "2026-03-12T18:20:45Z",
            "content": "Get ready to start seeing “Gemini is my copilot” bumper stickers. On Thursday, Google announced that it is reconfiguring its Maps app around its AI assistant Gemini, which will now be able to answer … [+2847 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Brooke Osmundson",
            "title": "What SMEC’s Data Reveals About AI Max Performance via @sejournal, @brookeosmundson",
            "description": "New SMEC study analyzes AI Max in Google Ads Search campaigns, showing a 13% conversion value lift but higher CPA and unpredictable ROAS results.\nThe post What SMEC’s Data Reveals About AI Max Performance appeared first on Search Engine Journal.",
            "url": "https://www.searchenginejournal.com/what-smecs-data-reveals-about-ai-max-performance/568866/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/03/shutterstock_2268272553-477.jpg",
            "publishedAt": "2026-03-05T18:36:51Z",
            "content": "Since Google introduced AI Max for Search campaigns, most of the discussion has focused on Google’s own benchmarks.\r\nThose benchmarks suggest advertisers can expect meaningful conversion growth witho… [+6068 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Javacodegeeks.com"
            },
            "author": "Yatin Batra",
            "title": "Elasticsearch keyword vs text",
            "description": "This article explores Elasticsearch field types and how to choose between text and keyword for effective search and indexing. 1. Introduction to Elasticsearch Elasticsearch is a distributed, RESTful search and analytics engine that can store, search, and anal…",
            "url": "https://www.javacodegeeks.com/elasticsearch-keyword-vs-text.html",
            "urlToImage": "https://www.javacodegeeks.com/wp-content/uploads/2012/10/software-development-2-logo.jpg",
            "publishedAt": "2026-03-20T16:49:26Z",
            "content": "This article explores Elasticsearch field types and how to choose between text and keyword for effective search and indexing.\r\n1. Introduction to Elasticsearch\r\nElasticsearch is a distributed, RESTfu… [+13767 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "sanujb6@gmail.com (Sanuj Bhatia) , Sanuj Bhatia",
            "title": "Qualcomm's new Snapdragon Wear Elite wants to make AI wearables actually smart",
            "description": "Qualcomm's Snapdragon Wear Elite brings powerful on-device AI, faster performance, and improved battery life to next-gen smartwatches and wearables.",
            "url": "https://www.androidcentral.com/phones/qualcomm/qualcomm-unveils-snapdragon-wear-elite",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/e4VBCrFpnY5AfmsTy8csaZ-2560-80.jpg",
            "publishedAt": "2026-03-02T07:00:00Z",
            "content": "What you need to know\r\n<ul><li>Qualcomm unveiled Snapdragon Wear Elite to bring flagship-level AI and performance to wearables.</li><li>The new chipset supports on-device AI with a Hexagon NPU handli… [+3889 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "nickodiaz@sbcglobal.net (Nickolas Diaz) , Nickolas Diaz",
            "title": "Gemini 3.1 Flash-Lite is the fast help you need if you're a dev with complex data",
            "description": "Google announced Gemini 3.1 Flash-Lite, a speedy, customizable AI model for developers with complex data.",
            "url": "https://www.androidcentral.com/apps-software/ai/gemini-3-1-flash-lite-is-the-fast-help-you-need-if-youre-a-dev-with-complex-data",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/2rQNYJHrKxDYxykQhyAaJR-1200-80.jpg",
            "publishedAt": "2026-03-03T19:32:56Z",
            "content": "What you need to know\r\n<ul><li>Google revealed Gemini 3.1 Flash-Lite, it's newest model that's capable of assisting developers with complex, \"high\" workloads.</li><li>Seeing as it aims to handle high… [+3879 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Techmeme.com"
            },
            "author": null,
            "title": "Google rolls out Gemini in Chrome to India, New Zealand, and Canada, and adds support for over 50 additional languages, including Hindi, French, and Spanish (Charmaine D'Silva/The Keyword)",
            "description": "Charmaine D'Silva / The Keyword:\nGoogle rolls out Gemini in Chrome to India, New Zealand, and Canada, and adds support for over 50 additional languages, including Hindi, French, and Spanish  —  We're bringing Chrome's powerful AI features to more regions and …",
            "url": "https://www.techmeme.com/260311/p2",
            "urlToImage": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Chrome_SocialShare.width-1300.png",
            "publishedAt": "2026-03-11T04:55:01Z",
            "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 1:05 AM ET, March 11, 2026.\r\nThe most current version of the site as always is available at our home page.\r\nTo vie… [+68 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Github.com"
            },
            "author": "xodn348",
            "title": "Show HN: Han – A Korean programming language written in Rust",
            "description": "A compiled programming language with Korean keywords, written in Rust - xodn348/han",
            "url": "https://github.com/xodn348/han",
            "urlToImage": "https://opengraph.githubassets.com/121c43a769195f9722a260dcebeefe553339307a5b6a1ca0a27bd758e8c0183e/xodn348/han",
            "publishedAt": "2026-03-14T21:27:33Z",
            "content": "A general-purpose compiled language with Korean keywords written in Rust\r\n· · · · Write code in one of the world's most beautifully designed writing systems.\r\nHan is a statically-typed, compiled prog… [+11463 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digiday"
            },
            "author": "Seb Joseph",
            "title": "‘Brand safety is moving from fear to curiosity’: Zefr’s Raddon on content-level accreditation – and what it exposes about the industry",
            "description": "TAI breaks that model. he threat is no longer a discrete piece of bad content that a keyword list or a domain block can catch. Its volume.",
            "url": "http://digiday.com/marketing/brand-safety-is-moving-from-fear-to-curiosity-zefrs-raddon-on-mrcs-new-content-level-accreditation-and-what-it-exposes-about-the-industry/",
            "urlToImage": "https://digiday.com/wp-content/uploads/sites/3/2024/11/brand-safety-revenue-digiday.jpg",
            "publishedAt": "2026-03-09T04:01:00Z",
            "content": "For years, brand safety was a fear business. The pitch was simple: something terrible could appear next to your ad, and without the right protection, your brand would pay the price. It worked, becaus… [+5817 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Techmeme.com"
            },
            "author": null,
            "title": "Google launches Gemini 3.1 Flash Live, an audio model with improved tonal understanding and lower latency for real-time dialogue, watermarked with SynthID (Valeria Wu/The Keyword)",
            "description": "Valeria Wu / The Keyword:\nGoogle launches Gemini 3.1 Flash Live, an audio model with improved tonal understanding and lower latency for real-time dialogue, watermarked with SynthID  —  Our latest voice model has improved precision and lower latency to make vo…",
            "url": "https://www.techmeme.com/260326/p26",
            "urlToImage": "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/gemini_flash_live__complexfuncbench__eval__light_Web.gif",
            "publishedAt": "2026-03-26T15:35:00Z",
            "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 11:35 AM ET, March 26, 2026.\r\nThe most current version of the site as always is available at our home page.\r\nTo vi… [+193 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Brooke Osmundson",
            "title": "7 Google Ads Shortcuts Every PPC Manager Should Be Using via @sejournal, @brookeosmundson",
            "description": "Save time in Google Ads using seven practical shortcuts that simplify workflows and highlight optimization opportunities.\nThe post 7 Google Ads Shortcuts Every PPC Manager Should Be Using appeared first on Search Engine Journal.",
            "url": "https://www.searchenginejournal.com/google-ads-shortcuts-every-ppc-manager-should-be-using/568045/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/03/google-ads-shortcut-50.jpg",
            "publishedAt": "2026-03-23T12:00:05Z",
            "content": "Managing PPC accounts is already time-consuming, especially when attention gets pulled toward tasks that don’t meaningfully impact performance.\r\nOver time, accounts accumulate extra keywords, inconsi… [+11449 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Corey Morris",
            "title": "How To Use AI To Streamline Time-Consuming SEO Tasks via @sejournal, @coreydmorris",
            "description": "How SEO teams can reclaim time and budget by streamlining labor-intensive tasks with human-guided automation.\nThe post How To Use AI To Streamline Time-Consuming SEO Tasks appeared first on Search Engine Journal.",
            "url": "https://www.searchenginejournal.com/how-to-use-ai-to-streamline-time-consuming-seo-tasks/566499/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/02/ai-tasks-262.jpg",
            "publishedAt": "2026-03-18T12:00:20Z",
            "content": "SEO, like most organic and non-advertising or paid channels in digital marketing, is labor-intensive. Yes, there are software suites, analytics platforms, research tools, and a number of other things… [+12322 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Brooke Osmundson",
            "title": "PPC Automation Layering: How Smart Advertisers Combine Automation With Strategy via @sejournal, @brookeosmundson",
            "description": "See how PPC automation layering helps marketers shape automated campaign performance instead of relying on a single feature.\nThe post PPC Automation Layering: How Smart Advertisers Combine Automation With Strategy appeared first on Search Engine Journal.",
            "url": "https://www.searchenginejournal.com/ppc-automation-layering-how-smart-advertisers-combine-automation-with-strategy/568043/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/03/ppc-automation-746.jpg",
            "publishedAt": "2026-03-17T12:00:24Z",
            "content": "Automation has been part of PPC management for longer than many marketers realize.\r\nBid adjustments, keyword expansion, and audience targeting have been guided by machine learning inside platforms li… [+12725 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Roger Montti",
            "title": "Google Answers Questions About Search Console’s Branded Queries Filter via @sejournal, @martinibuster",
            "description": "Google announced that Search Console's brand queries filter is open to all eligible sites, spurring questions about the feature.\nThe post Google Answers Questions About Search Console’s Branded Queries Filter appeared first on Search Engine Journal.",
            "url": "https://www.searchenginejournal.com/google-answers-questions-about-search-consoles-branded-queries-filter/569549/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/03/google-brand-query-filter-69.jpg",
            "publishedAt": "2026-03-12T09:17:16Z",
            "content": "Google Search Central announced that Search Console’s branded queries filter is now available to all eligible sites, causing many SEOs to ask questions about it and Google’s John Mueller stepped in t… [+6332 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Matt G. Southern",
            "title": "Bing Adds GEO To Official Guidelines, Expands AI Abuse Definitions via @sejournal, @MattGSouthern",
            "description": "Bing rewrote its webmaster guidelines to cover Copilot grounding, meta directive controls for AI answers, and a softened stance on AI-generated content. \nThe post Bing Adds GEO To Official Guidelines, Expands AI Abuse Definitions appeared first on Search Engi…",
            "url": "https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/02/12bcfb31-964c-4454-b527-ebf15b2f6a8b-8.jpeg",
            "publishedAt": "2026-02-27T19:51:47Z",
            "content": "Microsoft has rewritten the Bing Webmaster Guidelines to cover how content appears in both traditional search results and Copilot’s AI-generated answers.\r\nThe previous version focused on how Bing ind… [+4944 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Matt G. Southern",
            "title": "Google AI Overviews Cut Germany’s Top Organic CTR By 59% via @sejournal, @MattGSouthern",
            "description": "SISTRIX analyzed over 100 million German keywords and found AI Overviews reduce the position one click rate from 27% to 11%. Impact varies by industry.\nThe post Google AI Overviews Cut Germany’s Top Organic CTR By 59% appeared first on Search Engine Journal.",
            "url": "https://www.searchenginejournal.com/google-ai-overviews-cut-germanys-top-organic-ctr-by-59/569954/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/03/c97801f1-9281-42a6-bda2-0fc64bd033e6-886.jpeg",
            "publishedAt": "2026-03-17T23:19:03Z",
            "content": "AI Overviews cut the click-through rate on Germany’s top organic position by 59%, according to a SISTRIX analysis of more than 100 million keywords.\r\nThe data, published by founder Johannes Beus, put… [+3594 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Github.io"
            },
            "author": null,
            "title": "A Preview of Coalton 0.2",
            "description": "By Robert Smith\nCoalton is a statically typed functional programming language that lives inside Common Lisp. It has had an exciting few years. It is being used for industrial purposes, being put to its limits as a production language to build good, reliable, …",
            "url": "https://coalton-lang.github.io/20260312-coalton0p2/",
            "urlToImage": null,
            "publishedAt": "2026-03-14T21:36:51Z",
            "content": "By Robert Smith\r\nCoalton is a statically typed functional programming language that lives inside Common Lisp. It has had an exciting few years. It is being used for industrial purposes, being put to … [+20931 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Abduzeedo.com"
            },
            "author": "jeff",
            "title": "Seedream 5.0: ByteDance Brings Photographic Knowledge to AI Image Generation",
            "description": "Seedream 5.0: ByteDance Brings Photographic Knowledge to AI Image Generation\n\n \n\n\n jeff\n March 18, 2026\n\n\n Seedream 5.0 by ByteDance is an AI image generation model with built-in photographic knowledge, example-based editing, and multi-step reasoning for desi…",
            "url": "https://abduzeedo.com/node/89120",
            "urlToImage": null,
            "publishedAt": "2026-03-18T16:21:15Z",
            "content": "Seedream 5.0 by ByteDance is an AI image generation model with built-in photographic knowledge, example-based editing, and multi-step reasoning for designers.\r\nMost AI image generators respond to key… [+2897 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Brooke Osmundson",
            "title": "Google’s Asset Guidance & Ad Scheduling Updates, Microsoft Negatives – PPC Pulse via @sejournal, @brookeosmundson",
            "description": "This week's PPC Pulse recaps Google’s evolving Search asset guidance, revised budget pacing behavior, and Microsoft’s rollout of self-serve negative lists for PMax.\nThe post Google’s Asset Guidance & Ad Scheduling Updates, Microsoft Negatives – PPC Pulse appe…",
            "url": "https://www.searchenginejournal.com/ppc-pulse-googles-asset-guidance-ad-scheduling-updates-microsoft-negatives/568271/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/02/ppc-pulse-ads-574.png",
            "publishedAt": "2026-02-27T12:00:13Z",
            "content": "Welcome to PPC Pulse weekly news review. This week’s focus includes asset guidance, budget pacing, and search controls across Google and Microsoft Ads.\r\nGoogle reinforced the importance of asset vari… [+8739 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Css-tricks.com"
            },
            "author": "Daniel Schwarz",
            "title": "Experimenting With Scroll-Driven corner-shape Animations",
            "description": "The new CSS corner-shape() property is mathematical, so it’s easily animated. Author Daniel Schwarz pokes at animating the property for interesting UI effects.\n\nExperimenting With Scroll-Driven corner-shape Animations originally published on CSS-Tricks, which…",
            "url": "https://css-tricks.com/experimenting-with-scroll-driven-corner-shape-animations/",
            "urlToImage": "https://i0.wp.com/css-tricks.com/wp-content/uploads/2026/02/corner-shape-animation.webp",
            "publishedAt": "2026-03-23T13:51:15Z",
            "content": "Over the last few years, theres been a lot of talk about and experimentation with scroll-driven animations. Its a very shiny feature for sure, and as soon as its supported in Firefox (without a flag)… [+9312 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Ece Yildirim",
            "title": "Tinder’s Solution to Dating App Burnout Is More AI",
            "description": "When all you have is a hammer...",
            "url": "https://gizmodo.com/tinders-solution-to-dating-app-burnout-is-more-ai-2000732990",
            "urlToImage": "https://gizmodo.com/app/uploads/2026/03/shutterstock_1766070911-1200x675.jpg",
            "publishedAt": "2026-03-12T21:20:16Z",
            "content": "Dating apps are quickly losing their appeal as a jaded, super online, and equally lonely young generation increasingly reports feeling burnt out by the endless swiping.\r\nTinder believes the solution … [+3687 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Wwwhatsnew.com"
            },
            "author": "Natalia Polo",
            "title": "Google cierra la compra de Wiz: qué cambia en la seguridad multicloud en plena era de la IA",
            "description": "Google ha confirmado que ya ha completado la adquisición de Wiz, una operación que se anunció inicialmente en marzo de 2025 y que, desde hoy 11 de marzo de 2026, queda formalmente cerrada. Según el comunicado corporativo publicado en The Keyword, Wiz se integ…",
            "url": "https://wwwhatsnew.com/2026/03/12/google-cierra-la-compra-de-wiz-que-cambia-en-la-seguridad-multicloud-en-plena-era-de-la-ia/",
            "urlToImage": "https://wwwhatsnew.com/wp-content/uploads/2024/02/escudo.jpg",
            "publishedAt": "2026-03-12T09:00:35Z",
            "content": "Google ha confirmado que ya ha completado la adquisición de Wiz, una operación que se anunció inicialmente en marzo de 2025 y que, desde hoy 11 de marzo de 2026, queda formalmente cerrada. Según el c… [+7235 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Habr.com"
            },
            "author": "PureNothing",
            "title": "От OCR до ADE: как машины научились не просто читать, а понимать документы",
            "description": "Ещё 10 лет назад машина видела в документе просто набор пикселей. Сегодня она понимает структуру страницы, читает таблицы, графики и рукописи — и автоматически извлекает нужные данные. Разбираем как это работает под капотом и почему это меняет целые индустрии…",
            "url": "https://habr.com/ru/articles/1008610/#post-content-body",
            "urlToImage": "https://habr.com/share/publication/1008610/da153b05a9b65e3aa5e3b1158fdf40b4/",
            "publishedAt": "2026-03-10T12:15:49Z",
            "content": "500 . , , , . PDF. : upload1.pdf, upload2.pdf... . , . .\r\n. . . - . , , , -.\r\n OCR : . , .\r\n1. OCR \r\nTesseract 1985 HP. : .\r\n OCR ( O , F ), , . : \" B 8\". . .\r\nPaddleOCR :\r\n<ul><li>CNN ( ) : , , \r\n</… [+7487 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Matt G. Southern",
            "title": "Google AI Overview Citations From Top-Ranking Pages Drop Sharply via @sejournal, @MattGSouthern",
            "description": "New data finds AI Overviews often cite sources beyond page one. Fan-out queries may help explain why, and YouTube appears frequently in citations.\nThe post Google AI Overview Citations From Top-Ranking Pages Drop Sharply appeared first on Search Engine Journa…",
            "url": "https://www.searchenginejournal.com/google-ai-overview-citations-from-top-ranking-pages-drop-sharply/568637/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/03/1bfaa02a-4d95-492a-9178-71fe49aa885d-241.jpeg",
            "publishedAt": "2026-03-02T21:36:41Z",
            "content": "Ranking in Google’s top 10 is a weaker indicator of being cited in AI Overviews than it was last year, according to an updated Ahrefs analysis.\r\nThe study examined 863,000 keywords and 4 million AI O… [+3903 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ghacks Technology News"
            },
            "author": "Arthur Kay",
            "title": "Google Photos Adds Toggle Between AI Search and Classic Results",
            "description": "Google Photos is rolling out a new toggle in its search interface that lets users switch between AI-powered Ask Photos results and the traditional keyword-based\nThank you for being a Ghacks reader. The post Google Photos Adds Toggle Between AI Search and Clas…",
            "url": "https://www.ghacks.net/2026/03/12/google-photos-adds-toggle-between-ai-search-and-classic-results/",
            "urlToImage": "https://www.ghacks.net/wp-content/uploads/2026/03/gHacks-articles-2026-03-12T091521.983.png",
            "publishedAt": "2026-03-12T08:16:18Z",
            "content": "Google Photos is rolling out a new toggle in its search interface that lets users switch between AI-powered Ask Photos results and the traditional keyword-based search. Google Photos lead Shimrit Ben… [+2103 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "John-rush.com"
            },
            "author": null,
            "title": "25 Years of Eggs",
            "description": "Two AI agents, 11,345 receipts, and 1.6 billion tokens to find out what I’ve spent on eggs since 2001.",
            "url": "https://john-rush.com/posts/eggs-25-years-20260219.html",
            "urlToImage": "https://john-rush.com/images/posts/eggs-header.jpg",
            "publishedAt": "2026-03-18T15:44:08Z",
            "content": "Published: February 23, 2026\r\nEveryone needs a rewarding hobby. Ive been scanning all of my receipts since 2001. I never typed in a single price - just kept the images. I figured someday the technolo… [+8965 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "XDA Developers"
            },
            "author": "Simon Batt",
            "title": "Google's Stitch lets you easily cook up a fantastic-looking UI with \"vibe designing\"",
            "description": "Say what you want to see.",
            "url": "https://www.xda-developers.com/googles-stitch-lets-you-easily-cook-up-a-fantastic-looking-ui-with-vibe-designing/",
            "urlToImage": "https://static0.xdaimages.com/wordpress/wp-content/uploads/2026/03/google-stitch-vibe-design-featured.jpg?w=1600&h=900&fit=crop",
            "publishedAt": "2026-03-19T16:46:56Z",
            "content": "Summary\r\n<ul><li>\r\n Stitch's vibe-designing lets non-designers create polished UIs via text or voice.\r\n </li><li>\r\n AI agents in Stitch refine designs and export usable UI code or assets.\r\n </li><li>… [+2217 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Alex Valdes",
            "title": "Meta Enters the AI Shopping Wars to Challenge ChatGPT and Gemini",
            "description": "Mark Zuckerberg's company begins a partial rollout of its agentic AI shopping research tool.",
            "url": "https://www.cnet.com/tech/services-and-software/meta-new-ai-shopping-tool/",
            "urlToImage": "https://www.cnet.com/a/img/resize/fc0d3fbbf19c3b1bd88b91968908c9c35b993d0c/hub/2026/01/29/8fe38c2b-eb05-44db-afc6-cf919f5cee9e/gettyimages-2235448475.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2026-03-03T22:47:55Z",
            "content": "It was only a matter of time before Mark Zuckerberg's Meta jumped into the AI shopping race. According to a Bloomberg report, Meta is testing a new AI shopping assistant feature to compete with OpenA… [+3230 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Chelsea Alves",
            "title": "How Zero-Party & First-Party Data Can Fuel Your Intent-Based SEO Strategy via @sejournal, @rio_seo",
            "description": "Marketing leaders are grounding SEO in zero- and first-party data to better align content with real-world customer behavior and needs.\nThe post How Zero-Party & First-Party Data Can Fuel Your Intent-Based SEO Strategy appeared first on Search Engine Journal.",
            "url": "https://www.searchenginejournal.com/zero-party-data-how-to-use-first-party-insights-to-power-intent-based-content-strategy/568189/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/03/seo-analytics-770.jpg",
            "publishedAt": "2026-03-25T11:00:38Z",
            "content": "There’s an interesting paradox currently occurring in the realm of marketing. Marketers have more tools and data at their fingertips, yet despite this influx of information, marketing leaders also so… [+10036 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Windows Central"
            },
            "author": "sean.endicott@futurenet.com (Sean Endicott) , Sean Endicott",
            "title": "The new Outlook finally learns how to search — Microsoft revamps \"People\" experience",
            "description": "Microsoft is rolling out a unified search experience for the new Outlook, allowing users to find contacts across directories and personal accounts with simple keywords.",
            "url": "https://www.windowscentral.com/software-apps/the-new-outlook-finally-learns-how-to-search-microsoft-revamps-people-experience",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/qaEgLUAywk4ZTjGPc4Uw8e-2048-80.jpg",
            "publishedAt": "2026-03-24T17:23:45Z",
            "content": "The hassle of finding a contact in Outlook just disappeared for good. An update to the new Outlook brings a \"completely reimagined People experience\" that gets rid of the organization trees in direct… [+3386 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Dan Taylor",
            "title": "How AI Automation Turns Static Travel Pages Into Living Content & Experiences via @sejournal, @TaylorDanRW",
            "description": "Consider a new model for travel marketing where content adapts to traveler context instead of relying on static destination pages.\nThe post How AI Automation Turns Static Travel Pages Into Living Content & Experiences appeared first on Search Engine Journal.",
            "url": "https://www.searchenginejournal.com/how-ai-automation-turns-static-travel-pages-into-living-content-experiences/568599/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/03/ai-for-travel-529.jpg",
            "publishedAt": "2026-03-12T12:30:40Z",
            "content": "For most of the past 20 years, growing travel marketing meant producing more and more output. This happened because success depended on building additional landing pages for new destinations, publish… [+10303 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Blogspot.com"
            },
            "author": "dionisiydk",
            "title": "Working on Pharo Smalltalk: BPatterns: Rewrite Engine with Smalltalk Style",
            "description": "The rewrite engine is an absolutely brilliant invention by John Brant and Don Roberts, introduced with the Refactoring Browser (see  “A Refa...",
            "url": "http://dionisiydk.blogspot.com/2026/02/bpatterns-rewrite-engine-with-smalltalk.html",
            "urlToImage": "https://blogger.googleusercontent.com/img/a/AVvXsEgqrlmb6B1CSsrfYvcOgAj_E9BM11DwvkTX20JdzCIE_j1vdd-u0DWIwzAxfYBxdTZeo5APM1R4zpRV-YndmCkjeFdQc7q9Vf-6jmfxLLBB3sJeBVXITjCD5J-LoxxYFPw1Bg-cXHdVrJxzOAI6UEu_0beXzTlAnbpKggYnnRqxzW3vUcgNwj9Yue76ZNA=w1200-h630-p-k-no-nu",
            "publishedAt": "2026-02-27T09:04:48Z",
            "content": "The rewrite engine is an absolutely brilliant invention by John Brant and Don Roberts, introduced with the Refactoring Browser (see “A Refactoring Tool for Smalltalk”, 1997). It gives us AST-level ma… [+5158 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Herecomesthemoon.net"
            },
            "author": "Mond",
            "title": "How many options fit into a boolean?",
            "description": "Funny notes on niche optimizations in Rust, and a few updates.",
            "url": "https://herecomesthemoon.net/2025/11/how-many-options-fit-into-a-boolean/",
            "urlToImage": "https://herecomesthemoon.net/2025/11/how-many-options-fit-into-a-boolean/images/dithers/background_dithered.png",
            "publishedAt": "2026-03-07T05:31:13Z",
            "content": "Hello!\r\nNot too long ago, a friend of mine told me about\r\n Paged Out!, a free experimental (one article ==\r\n one page) technical magazine. (Yes, that means that you can\r\n read them online right now. … [+4590 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Joostboer.com"
            },
            "author": null,
            "title": "My Life Got 100x Better When I Stopped Thinking About Google",
            "description": "How My Life Got 100x Better When I Stopped Thinking About Google",
            "url": "https://joostboer.com/google-quality-of-life",
            "urlToImage": "https://joostboer.com/images/google-article/og-image.png",
            "publishedAt": "2026-03-13T18:21:57Z",
            "content": "I started building niche websites in 2020. Within a few months, Google became the single biggest factor in my professional life. Not my skills. Not my ideas. Not the quality of my work. Google.\r\nWhen… [+5084 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Matt G. Southern",
            "title": "AIO Citations Diverge From Rankings, Bing Rewrites Rules – SEO Pulse via @sejournal, @MattGSouthern",
            "description": "In SEO Pulse: AI Overview citations drift further from traditional rankings as AI search expands and platforms clarify how content appears in AI answers.\nThe post AIO Citations Diverge From Rankings, Bing Rewrites Rules – SEO Pulse appeared first on Search En…",
            "url": "https://www.searchenginejournal.com/seo-pulse-aio-citations-diverge-from-rankings-bing-rewrites-rules/568881/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/03/seo-pulse-ai-gap-864.png",
            "publishedAt": "2026-03-06T13:00:17Z",
            "content": "Welcome to SEO Pulse: this week’s updates affect how AI Overviews select sources, how far AI search has expanded across industries, and what two search engines now say about optimizing for AI.\r\nHere’… [+7766 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Bradley C",
            "title": "Ads are coming to Apple Maps in the US and Canada this summer with a privacy-centric focus",
            "description": "Coming this summer to the US and Canada, Apple is officially bringing ads to Apple Maps. As part of the broader rollout of the new Apple Business platform, the company announced today that businesses in the US and Canada will be able to place local ads within…",
            "url": "https://9to5mac.com/2026/03/24/ads-are-coming-to-apple-maps-in-the-us-and-canada-this-summer-with-a-privacy-centric-focus/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2026/03/maps.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2026-03-24T15:00:00Z",
            "content": "Coming this summer to the US and Canada, Apple is officially bringing ads to Apple Maps. As part of the broader rollout of the new Apple Business platform, the company announced today that businesses… [+4045 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingapps.com"
            },
            "author": "An Jay",
            "title": "Best Free SEMrush Alternatives in 2026 – Tools That Actually Replace It",
            "description": "Best free SEMrush alternatives in 2026 - 8 tools that genuinely replace SEMrush for keyword research, backlinks, and site audits without the $117/month bill.",
            "url": "https://www.smashingapps.com/best-free-semrush-alternatives-in-2026/",
            "urlToImage": "https://www.smashingapps.com/wp-content/uploads/2026/03/Free-SEMrush-Alternatives-in-2026.png",
            "publishedAt": "2026-03-20T01:26:51Z",
            "content": "Click here to buy secure, speedy, and reliable Web hosting, Cloud hosting, Agency hosting, VPS hosting, Website builder, Business email, Reach email marketing at 20% discount from our Gold Partner Ho… [+15314 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Macworld"
            },
            "author": "Mahmoud Itani",
            "title": "12 hidden iMessage features every iPhone user should try",
            "description": "Macworld\n\n\n\r\n\n\n\n\nFor many iPhone users, iMessage is the definitive communication app, an intuitive instant-messaging platform for texting and sharing media with friends and family. And it keeps getting better and better.\r\n\n\n\n\nOver the years, Apple has steadil…",
            "url": "https://www.macworld.com/article/3051081/best-imessage-features-every-iphone-user-should-try.html",
            "urlToImage": "https://www.macworld.com/wp-content/uploads/2026/03/Sending-iMessage-as-SMS-on-iOS-1.jpg?quality=50&strip=all&w=1024",
            "publishedAt": "2026-03-23T11:02:01Z",
            "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nFor many iPhone user… [+9529 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Microsoft.com"
            },
            "author": "Daniel Rosenwasser",
            "title": "TypeScript 6.0 RC",
            "description": "Today we are excited to announce the Release Candidate (RC) of TypeScript 6.0! To get started using the RC, you can get it through npm with the following command: npm install -D typescript@rc TypeScript 6.0 is a unique release in that we intend for it to be t…",
            "url": "https://devblogs.microsoft.com/typescript/announcing-typescript-6-0-rc/",
            "urlToImage": "https://devblogs.microsoft.com/typescript/wp-content/uploads/sites/11/2018/08/typescriptfeature.png",
            "publishedAt": "2026-03-06T20:21:01Z",
            "content": "Today we are excited to announce the Release Candidate (RC) of TypeScript 6.0!\r\nTo get started using the RC, you can get it through npm with the following command:\r\nnpm install -D typescript@rc\r\nType… [+38290 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Police"
            },
            "author": "Jon Gilbert",
            "title": "Google is fixing one of Android's most annoying privacy gaps",
            "description": "It makes Private Space feel like overkill",
            "url": "https://www.androidpolice.com/google-is-fixing-one-of-androids-most-annoying-privacy-gaps/",
            "urlToImage": "https://static0.anpoimages.com/wordpress/wp-content/uploads/2026/02/android-17-graphic-featuring-the-android-mascot-behind-the-number-17-holding-a-green-patterned-sphere.png?w=1600&h=900&fit=crop",
            "publishedAt": "2026-03-26T12:00:10Z",
            "content": "Our phones are private and secure spaces. On one device, we communicate with loved ones, access our bank accounts, save photos, and download sensitive documents.\r\nAndroid's security features have ste… [+4741 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Adam Riemer",
            "title": "How Do You Fix Thin Content Across Similar Ecommerce Product Pages? – Ask An SEO via @sejournal, @rollerblader",
            "description": "See why optimizing category pages and building authority beats spinning unique descriptions for large, similar product catalogs.\nThe post How Do You Fix Thin Content Across Similar Ecommerce Product Pages? – Ask An SEO appeared first on Search Engine Journal.",
            "url": "https://www.searchenginejournal.com/ask-an-seo-how-do-you-fix-thin-content-across-similar-product-pages/566266/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2024/06/ask-an-seo-adam-riemer-376.jpg",
            "publishedAt": "2026-03-10T12:00:10Z",
            "content": "This week’s Ask an SEO asked :\r\n“We’re getting penalized by Google for thin content, but many of our products naturally have similar descriptions. What creative solutions have you seen work for ecomm… [+6843 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Css-tricks.com"
            },
            "author": "Daniel Schwarz",
            "title": "What’s !important #6: :heading, border-shape, Truncating Text From the Middle, and More",
            "description": "Despite what’s been a sleepy couple of weeks for new Web Platform Features, we have an issue of What’s !important that’s prrrretty jam-packed. The web community had a lot to say, it seems, so fasten your seatbelts!\n\nWhat’s !important #6: :heading, border-shap…",
            "url": "https://css-tricks.com/whats-important-6/",
            "urlToImage": "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/12/important-color.png",
            "publishedAt": "2026-02-27T16:30:22Z",
            "content": "Despite whats been a sleepy couple of weeks for new Web Platform Features, we have an issue of Whats !important thats prrrretty jam-packed. The web community had a lot to say, it seems, so fasten you… [+5456 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "XDA Developers"
            },
            "author": "Mahnoor Faisal",
            "title": "NotebookLM's latest feature is a visual learner's dream come true",
            "description": "Study smarter, not PowerPoint-er.",
            "url": "https://www.xda-developers.com/notebooklm-launches-cinematic-video-overviews/",
            "urlToImage": "https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2026/01/notebooklm-and-antigravity-pairing-featured-image.jpeg?w=1600&h=900&fit=crop",
            "publishedAt": "2026-03-05T22:49:59Z",
            "content": "Summary\r\n<ul><li>\r\n NotebookLM's new Cinematic Video Overviews transforms your uploaded research and notes into fully animated, documentary-style explainer videos.\r\n </li><li>\r\n The feature is powere… [+3010 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Javacodegeeks.com"
            },
            "author": "Yatin Batra",
            "title": "Java PreparedStatement with LIKE Wildcards Example",
            "description": "Searching text using SQL’s LIKE operator is a common requirement in many applications. When working with JDBC, developers typically use PreparedStatement instead of dynamically building SQL strings. This improves security, prevents SQL injection, and allows t…",
            "url": "https://www.javacodegeeks.com/java-preparedstatement-with-like-wildcards-example.html",
            "urlToImage": "https://www.javacodegeeks.com/wp-content/uploads/2012/10/java-logo.jpg",
            "publishedAt": "2026-03-09T21:17:27Z",
            "content": "Searching text using SQLs LIKE operator is a common requirement in many applications. When working with JDBC, developers typically use PreparedStatement instead of dynamically building SQL strings. T… [+11613 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Roger Montti",
            "title": "Google Updates AI Recipe Results To Send More Traffic via @sejournal, @martinibuster",
            "description": "Google announced an update to how AI Mode displays recipes in order to send more traffic to recipe blogs\nThe post Google Updates AI Recipe Results To Send More Traffic appeared first on Search Engine Journal.",
            "url": "https://www.searchenginejournal.com/google-updates-ai-mode-recipe-sites-results/568798/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/03/google-recipe-results-616.jpg",
            "publishedAt": "2026-03-04T19:11:38Z",
            "content": "Robby Stein, VP of Product Google Search, posted that Google is updating AI Mode so that it surfaces more links to creators when users search for recipes. Google’s AI Mode has generated controversy b… [+2526 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Matt G. Southern",
            "title": "Google AI Mode Cites Itself More Often, With More Organic Links via @sejournal, @MattGSouthern",
            "description": "Google's AI Mode self-citations tripled in nine months. SE Ranking data shows that more links now lead to organic search results, not business profiles.\nThe post Google AI Mode Cites Itself More Often, With More Organic Links appeared first on Search Engine J…",
            "url": "https://www.searchenginejournal.com/google-ai-mode-cites-itself-more-often-with-more-organic-links/568955/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/03/ac432196-65ec-4097-8a6c-427ba02a0613-77.jpeg",
            "publishedAt": "2026-03-06T16:48:16Z",
            "content": "Google’s self-referencing in AI Mode has risen to more than three times its level nine months ago, according to a new SE Ranking report analyzing 1.3 million citations.\r\nGoogle now accounts for 17% o… [+3173 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Authority"
            },
            "author": "Hadlee Simons",
            "title": "Snapdragon Wear Elite is here: The first Elite chip for watches and AI gadgets",
            "description": "First it was PCs, then it was phones. Now, Qualcomm has brought an Elite processor to smartwatches. Say hello to the Snapdragon Wear Elite.",
            "url": "https://www.androidauthority.com/snapdragon-wear-elite-smartwatch-chip-3643432/",
            "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2026/03/Snapdragon-Wear-Elite-chipset-scaled-1-scaled.jpg",
            "publishedAt": "2026-03-02T07:00:12Z",
            "content": "<ul><li>Qualcomm has announced the Snapdragon Wear Elite chip, its first Elite-branded processor for smartwatches.</li><li>The new chip offers big increases in CPU and GPU performance, along with ded… [+2907 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Googleblog.com"
            },
            "author": "Paul Jiménez Vela",
            "title": "Create longer musical tracks in the Gemini app with Lyria 3 Pro",
            "description": null,
            "url": "https://workspaceupdates.googleblog.com/2026/03/create-longer-musical-tracks-in-gemini-app-with-Lyria-3-Pro.html",
            "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4NSMIvQQe_QV7ZD8Fv_Hm8gOoxK-qcxqA4ifype1UhlImwEiQE-HadhZ-93bEG4W7Vpd6a-NEK9FOmHKBqb1yXRoJ_zFVPDHZLbj0NEkBaqQn2kCxqytX77gsy-LtYsTE6lXEgSN4OFqLXGBtUdvfNrwEssWLn0AC9I46Yy9RIc7omzLnvcHjhkEz3oY/w1200-h630-p-k-no-nu/Lyria%203%20Pro%20full-length%20songs.gif",
            "publishedAt": "2026-03-25T16:02:00Z",
            "content": "Last month, we introduced 30-second tracks with Lyria 3, featuring custom music generation designed to spark creative expression. Now, we’re also introducing Lyria 3 Pro, an advanced version that all… [+1877 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PCWorld"
            },
            "author": "Mikael Markander",
            "title": "Google warns ‘Q-Day’ is coming, could break encryption by 2029",
            "description": "The development of quantum computing is progressing faster than expected, leading Google to now anticipate that “Q-Day” could arrive as early as 2029. So says Heather Adkins, VP of Security Engineering, in a recent blog post on The Keyword.\r\n\n\n\n\nQ-Day (also k…",
            "url": "https://www.pcworld.com/article/3099867/google-warns-q-day-is-coming-could-break-encryption-by-2029.html",
            "urlToImage": "https://www.pcworld.com/wp-content/uploads/2026/03/pexels-markusspiske-1089438-1.jpg?quality=50&strip=all&w=1024",
            "publishedAt": "2026-03-26T15:05:23Z",
            "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nThe development of q… [+1422 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Javacodegeeks.com"
            },
            "author": "Yatin Batra",
            "title": "Renaming Fields in Elasticsearch Mappings",
            "description": "In Elasticsearch, index mappings define the structure and data types of fields stored in an index. Once a field is created, its name and type become immutable. This means you cannot directly rename an existing field using an update mapping API. However, field…",
            "url": "https://www.javacodegeeks.com/renaming-fields-in-elasticsearch-mappings.html",
            "urlToImage": "https://www.javacodegeeks.com/wp-content/uploads/2017/04/elastic-logo.png",
            "publishedAt": "2026-02-26T15:48:00Z",
            "content": "In Elasticsearch, index mappings define the structure and data types of fields stored in an index. Once a field is created, its name and type become immutable. This means you cannot directly rename a… [+9378 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Semrush.com"
            },
            "author": "Luke Harsel, Christine Skopec",
            "title": "How to Make the Most of the Free 7-Day Semrush One Trial",
            "description": "Find out how to get meaningful search visibility insights during a free weeklong Semrush One trial.",
            "url": "https://www.semrush.com/blog/free-7-day-semrush-one-trial/",
            "urlToImage": "https://static.semrush.com/blog/uploads/media/1c/ed/1cedf1f4ed269fea71add2c15b27b053/4cf23868531b1f67fc2b81e4fdb81547/blog_image.png",
            "publishedAt": "2026-03-24T14:24:00Z",
            "content": "A week goes fast, but its enough time to get meaningful SEO insights with a Semrush One free trial when you know where to focus.\r\nThis guide covers the six best steps to take during your seven-day Se… [+9513 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Betalist.com"
            },
            "author": "BetaList",
            "title": "SerpDino – Low-cost keyword rank tracker with competitor insights",
            "description": "Low-cost keyword rank tracker with competitor insights",
            "url": "https://betalist.com/startups/serpdino",
            "urlToImage": "https://resize.imagekit.co/DHBumXx6cPLI2-ESXObhiAe5MJjDbh5coDk2NHAsyKs/plain/s3://betalist-production/4iev693b4s4tt3yxfmev8u48z3sm",
            "publishedAt": "2026-03-13T03:00:00Z",
            "content": "Serpdino is a rank tracking and competitor insights tool designed to give you more for less. It features unlimited keyword tracking, automated competitor discovery, built-in Similarweb and PageSpeed … [+102 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Brooke Osmundson",
            "title": "Merchant Center Expands, Google Clarifies Smart Bidding, State Of PPC Report – PPC Pulse via @sejournal, @brookeosmundson",
            "description": "The latest PPC Pulse highlights Google’s agency-focused Merchant Center rollout, Smart Bidding guidance for new campaigns, and emerging AI usage trends in PPC.\nThe post Merchant Center Expands, Google Clarifies Smart Bidding, State Of PPC Report – PPC Pulse a…",
            "url": "https://www.searchenginejournal.com/ppc-pulse-merchant-center-expands-google-clarifies-smart-bidding-state-of-ppc-report/569653/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/03/ppc-pulse-agency-214.png",
            "publishedAt": "2026-03-13T11:15:08Z",
            "content": "Welcome to this week’s PPC Pulse. Updates focus on Merchant Center access for agencies, bidding strategy, and how PPC marketers are adapting to industry changes.\r\nGoogle expanded access to Merchant C… [+10796 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Googleblog.com"
            },
            "author": "Paul Jiménez Vela",
            "title": "Introducing Nano Banana 2 in the Gemini app",
            "description": null,
            "url": "https://workspaceupdates.googleblog.com/2026/02/introducing-nano-banana-2-in-gemini-app.html",
            "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4uIRoB5JinDpxgmdZukYWLQGcg1LZUJPeITBwi57aqr_IPxIiDJWE6KhhuD160Mw_27bDBFk7-EdETspo1lsFVOMZCL8ryBjqTRbz4ODTagkjQ6zBJGt1xk9PfPtGOYgyIRSM6VFgg2E5V6Kcf-KcnLFCshuu3axj1PXHiIS1gswO6yMmzKNeFdTc7Cw/w1200-h630-p-k-no-nu/Nano%20Banana%202.png",
            "publishedAt": "2026-02-26T20:59:00Z",
            "content": "Starting today, we’re rolling out Nano Banana 2 (Gemini 3.1 Flash Image), our best image model yet, to Workspace customers in the Gemini app.Nano Banana 2, which replaces our previous Nano Banana mod… [+2813 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Macitynet.it"
            },
            "author": "Mauro Notarianni",
            "title": "Come spiare WhatsApp? Cosa cercano online gli italiani sullo smartphone",
            "description": "Nelle ricerche online che contengono il termine “smartphone” accanto a modelli e prezzo emergono soprattutto frustrazione e controllo: dati da recuperare, batteria/cedimenti, timore di essere spiati...\n- su macitynet.it Come spiare WhatsApp? Cosa cercano onli…",
            "url": "https://www.macitynet.it/?p=1463100",
            "urlToImage": "https://www.macitynet.it/wp-content/uploads/2021/05/smartphonegne1.jpg",
            "publishedAt": "2026-03-24T13:29:59Z",
            "content": "Oltre 1.900 query cercate in Italia raccontano uno smartphone che non è solo un prodotto da acquistare, ma anche oggetto di frustrazione quotidiana e strumento di controllo relazionale.\r\nEcco le doma… [+3673 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Davidlebovitz.com"
            },
            "author": "David",
            "title": "Seville Orange Marmalade",
            "description": "This time of year brings Seville oranges to the markets in Paris. For the past few years, I kept wondering why they were so hard to find since it’s perhaps my favorite of all jams and jellies to make, and eat. But lately, they’ve been everywhere.  And I found…",
            "url": "https://www.davidlebovitz.com/seville-orange/",
            "urlToImage": "https://www.davidlebovitz.com/wp-content/uploads/2007/02/Seville-Orange-Marmalade-recipe.jpg",
            "publishedAt": "2026-03-11T08:02:18Z",
            "content": "This time of year brings Seville oranges to the markets in Paris. For the past few years, I kept wondering why they were so hard to find since it’s perhaps my favorite of all jams and jellies to make… [+4363 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Diamond.jp"
            },
            "author": "牧野 洋",
            "title": "高関税に続いてイラン戦争、強烈なインフレと、深刻な不況が共存する展開か - KEYWORDで世界を読む",
            "description": "2月末に始まったイラン戦争をきっかけに、世界中が1970年代型スタグフレーション（1970s-style stagflation）の脅威におびえ始めている。",
            "url": "https://diamond.jp/articles/-/386672",
            "urlToImage": "https://dol.ismcdn.jp/mwimgs/8/7/-/img_8737df49c40d8c340b867968ab727b61326275.jpg",
            "publishedAt": "2026-03-25T19:05:00Z",
            "content": "219701970s-style stagflation\r\nWe are facing a risk of stagflation with prices going up first because of the tariffs and now because of the war while we are already having slow growth.\r\n12344four hors… [+26 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Jacko.io"
            },
            "author": null,
            "title": "Never Snooze a Future",
            "description": "Comments",
            "url": "https://jacko.io/snooze.html",
            "urlToImage": null,
            "publishedAt": "2026-03-08T11:17:26Z",
            "content": "Home\r\n2026 March 2nd\r\nHuh, that's confusing, because the task ought to be able to execute other\r\nfutures in that case so why are her connections stalling out without\r\nmaking progress?- Barbara battle… [+28596 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Googleblog.com"
            },
            "author": "Paul Jiménez Vela",
            "title": "Whisk is moving to Flow on April 30, 2026",
            "description": null,
            "url": "https://workspaceupdates.googleblog.com/2026/03/whisk-is-moving-to-flow-on-april-30-2026.html",
            "urlToImage": "",
            "publishedAt": "2026-03-12T17:39:00Z",
            "content": "On April 30, 2026, the best capabilities from Whisk are moving directly into Flow, Google's unified platform for AI-powered image and video creation.Users with active Whisk accounts will receive an e… [+1788 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Vecstore.app"
            },
            "author": "Mariam Rokhvadze",
            "title": "You Don't Need a Vector Database",
            "description": "Most teams shopping for a vector database don't actually need one. They need search that works. There's a difference, and it matters more than you think.",
            "url": "https://vecstore.app/blog/you-dont-need-a-vector-database",
            "urlToImage": "https://vecstore.app/og-default.png",
            "publishedAt": "2026-03-08T12:30:31Z",
            "content": "Somewhere in the last two years, \"we need a vector database\" became the default answer to every search problem. Team wants better product search? Vector database. Building a recommendation engine? Ve… [+9837 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Db0.ai"
            },
            "author": "db0.ai",
            "title": "How OpenClaw's Memory System Works",
            "description": "LLMs have no memory. OpenClaw builds the illusion of memory from files, conversation history, and retrieval — three subsystems working together. Here's how each one works, and where each one breaks.",
            "url": "https://db0.ai",
            "urlToImage": null,
            "publishedAt": "2026-03-17T18:49:22Z",
            "content": "LLMs have no memory.\r\nEvery time you open a new conversation, the model knows nothing about who you are, what you're working on, or what you discussed last time. It can answer questions, write code, … [+8820 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Substack.com"
            },
            "author": "manjeet singh",
            "title": "Inside the M4 Apple Neural Engine, Part 1: Reverse Engineering",
            "description": "How we bypassed CoreML and talked directly to the hardware",
            "url": "https://maderix.substack.com/p/inside-the-m4-apple-neural-engine",
            "urlToImage": "https://substackcdn.com/image/fetch/$s_!fV3j!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1e6d0ce8-21e5-43eb-9499-a49b2f6f44be_1024x487.jpeg",
            "publishedAt": "2026-03-01T17:11:44Z",
            "content": "A note on we:\r\nThroughout this series, we refers to maderix (human) and Claude Opus 4.6 (by Anthropic) working as a pair. The reverse engineering, benchmarking, and training code were developed colla… [+9905 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Firestriker.com"
            },
            "author": "FireStriker Team",
            "title": "Building FireStriker: Making Civic Tech Free",
            "description": "A solo developer watched his community lose a fight because they didn't have the right tools at the right time. So he started building.",
            "url": "https://firestriker.com/blog/building-firestriker-why-im-making-civic-tech-free",
            "urlToImage": null,
            "publishedAt": "2026-03-26T18:03:43Z",
            "content": "My wife is the politically active one in our house. She's the person who shows up: rallies, election day volunteering, local organization meetings, city council sessions. She does the work. I'm a sof… [+8537 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Diamond.jp"
            },
            "author": "牧野 洋",
            "title": "イラン攻撃で米軍が最新のAIモデルを実戦投入、軍事利用を加速化させる米国防総省 - KEYWORDで世界を読む",
            "description": "米国で「AIの兵器化（weaponization of AI）」に対する懸念がにわかに広がっている。最先端のAIモデルが実際の戦場で利用され始めたからだ。安全性が二の次にされたままで。",
            "url": "https://diamond.jp/articles/-/385670",
            "urlToImage": "https://dol.ismcdn.jp/mwimgs/6/0/-/img_60251defe4a1d1f39624448b644468a1393517.jpg",
            "publishedAt": "2026-03-11T19:25:00Z",
            "content": "AIweaponization of AIAI\r\nAIAIClaude2\r\nintelligence assessment\r\n1\r\nAI\r\nAI\r\nThe time is now to accelerate A.I. integration, and we will put the full weight of the Departments leadership, resources, and… [+98 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bleeding Cool News"
            },
            "author": "Gavin Sheehan",
            "title": "Hearthstone – Cataclysm Expansion Launches With New Cinematic Trailer",
            "description": "Blizzard Entertainment has launched the latest expansion for Hearthstone today, as it's all fire and brimstone with Cataclysm. For the first time in the game's history, you don't just fight off Deathwing, you acutall become him in this 135 card set, complete …",
            "url": "https://bleedingcool.com/games/hearthstone-cataclysm-expansion-launches-with-new-cinematic-trailer/",
            "urlToImage": "https://bleedingcool.com/wp-content/uploads/2026/03/MixCollage-17-Mar-2026-02-28-PM-1459-2000x1125.jpg",
            "publishedAt": "2026-03-17T21:13:07Z",
            "content": "Posted in: Blizzard, Games, Hearthstone, Video Games | Tagged: Blizzard Entertainment, Hearthstone - Cataclysm\r\nThe latest expansion for Hearthstonehas launched today, as Cataclysm runs rampage over … [+3573 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Osnews.com"
            },
            "author": "Thom Holwerda",
            "title": "Microsoft really doesn’t want you to use the name “Microslop”",
            "description": "Microsoft is pushing “AI” hard in Windows, Office, and in their other products, and it’s earned them a cute new nickname: Microslop. It turns out the company really doesn’t like it when you use this nickname, however, and its official Copilot Discord server –…",
            "url": "https://www.osnews.com/story/144518/microsoft-really-doesnt-want-you-to-use-the-name-microslop/",
            "urlToImage": null,
            "publishedAt": "2026-03-02T20:17:35Z",
            "content": "Microsoft is pushing “AI” hard in Windows, Office, and in their other products, and it’s earned them a cute new nickname: Microslop. It turns out the company really doesn’t like it when you use this … [+1211 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smashingapps.com"
            },
            "author": "An Jay",
            "title": "SEMrush Free Plan What You Get",
            "description": "SEMrush free plan what you get - every tool, every limit, every workaround explained honestly. No credit card needed. Real daily workflow examples, 7 stretching tips, and a comparison against Ahrefs and Ubersuggest free tiers.",
            "url": "https://www.smashingapps.com/semrush-free-plan-what-you-get/",
            "urlToImage": "https://www.smashingapps.com/wp-content/uploads/2026/03/SEMrush-Free-Plan-what-you-get.webp",
            "publishedAt": "2026-03-10T20:45:05Z",
            "content": "Click here to buy secure, speedy, and reliable Web hosting, Cloud hosting, Agency hosting, VPS hosting, Website builder, Business email, Reach email marketing at 20% discount from our Gold Partner Ho… [+16947 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Puromarketing.com"
            },
            "author": null,
            "title": "El 71% de las decisiones de compra se toman ya en el \"Dark Social\"",
            "description": "El ‘dark social’ son interacciones y tráfico web provenientes de canales privados como Meta, WhatsApp o Discord imposibles de rastrear para las marcasEl evento de presentación, celebrado ayer en el campus de ESIC en Madrid, reunió a responsables comerciales y…",
            "url": "https://www.puromarketing.com/88/216867/decisiones-compra-toman-quotdark-socialquot",
            "urlToImage": "https://www.puromarketing.com/uploads/img/contents/default/meta_content_img_default.jpg",
            "publishedAt": "2026-03-12T10:40:39Z",
            "content": "El dark social son interacciones y tráfico web provenientes de canales privados como Meta, WhatsApp o Discord imposibles de rastrear para las marcas\r\nEl evento de presentación, celebrado ayer en el c… [+3670 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MakeUseOf"
            },
            "author": "Saikat Basu",
            "title": "You’re probably not using NotebookLM to its full potential — try these 5 tricks",
            "description": "Begin your study or research workflow in NotebookLM with these simple tips.",
            "url": "https://www.makeuseof.com/notebooklm-tips-tricks-improve-research/",
            "urlToImage": "https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2026/03/notebooklm-tips-research-featured.jpg?w=1600&h=900&fit=crop",
            "publishedAt": "2026-03-22T13:30:17Z",
            "content": "NotebookLM has quickly gone from a niche study tool to a daily research companion. Its changing how we organize ideas, interact with information, and present them. But while most people use it for ba… [+6261 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MakeUseOf"
            },
            "author": "Saikat Basu",
            "title": "I installed these 3 Chrome extensions and my Gemini workflow feels twice as fast",
            "description": "These Chrome extensions fix Gemini’s biggest workflow gaps",
            "url": "https://www.makeuseof.com/chrome-extensions-fast-gemini-workflow/",
            "urlToImage": "https://static0.makeuseofimages.com/wordpress/wp-content/uploads/wm/2026/03/gemini-extensions-featured-image.jpg?w=1600&h=900&fit=crop",
            "publishedAt": "2026-03-24T14:30:18Z",
            "content": "Enter any Google product and you can be sure Gemini is there. Gradually, it has started occupying the mind space which was owned by Google Search. Now, efficiency is about learning to use Gemini for … [+5837 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fstoppers"
            },
            "author": "Alex Cooke",
            "title": "How to Write a Photography Blog That Actually Drives Bookings (in About an Hour a Week)",
            "description": "Most photography blogs are beautiful graveyards. Gorgeous images, maybe a few words about the session, and then nothing. No traffic, no inquiries, no reason for Google to care. The photographer posts it, shares it once on Instagram, and moves on. Meanwhile, t…",
            "url": "https://fstoppers.com/business/how-write-photography-blog-actually-drives-bookings-about-hour-week-900146",
            "urlToImage": "https://cdn.fstoppers.com/styles/medium/s3/lead/2026/02/ing_33594_270981.jpg?itok=wlY9CKmM",
            "publishedAt": "2026-03-16T16:03:01Z",
            "content": "Most photography blogs are beautiful graveyards. Gorgeous images, maybe a few words about the session, and then nothing. No traffic, no inquiries, no reason for Google to care. The photographer posts… [+12189 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Semrush.com"
            },
            "author": "Margarita Loktionova",
            "title": "How One Fractional CMO Uses Semrush One to Layer SEO and AEO Into One Growth Strategy",
            "description": "Learn how David Haas helped Frenos grow from near-zero visibility to 18% in six months using a practical SEO and AI strategy.",
            "url": "https://www.semrush.com/blog/fractional-cmo-drives-visibility-with-semrush-one/",
            "urlToImage": "https://static.semrush.com/blog/uploads/media/72/96/7296943e096701e3d6df804706ef3d22/37223dabfc696d7a9a0c82c75e530bf5/how-one-fractional-cmo-uses-semrush-one-to-layer-seo-and-aeo-into-one-growth-strategy.png",
            "publishedAt": "2026-03-24T16:00:00Z",
            "content": "David Haas has spent close to 30 years in marketing. He'll tell you the last year has been unlike any of the ones before.\r\nDavids niche is growth-stage tech and healthcare companies. Theyre organizat… [+6720 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Habr.com"
            },
            "author": "Svetafo",
            "title": "AI-агент с долгосрочной памятью: строю личного аналитика с Claude Code",
            "description": "Разрабатываю AI-агента персональной аналитики для себя вместе с Claude Code. Любопытной инженерной задачей оказалась архитектура памяти. Как сделать, чтобы агент помнил не только последний разговор, но и паттерны, накопленные за месяцы? В этой статье описана …",
            "url": "https://habr.com/ru/articles/1007940/#post-content-body",
            "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/7bd/e7a/133/7bde7a1333048f4f83cb64ed87fdded5.png",
            "publishedAt": "2026-03-10T05:59:05Z",
            "content": "AI- . : , , , . , , .\r\n  \r\n , . , , AI ML. \r\n , - , HRV VO2, longevity , . \r\n Oura, Apple Watch, Apple Health 2017 . 9 9 . \r\n wearables, PDF, , , , , , , .\r\n , . , ChatGPT, , , . \r\n, - , . \r\n data la… [+6781 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Reza Moaiandin",
            "title": "The SEO Skills Gap: Why Technical Expertise Alone Won’t Cut It Anymore",
            "description": "Technical SEO expertise is table stakes. The real skills gap? Business acumen, strategic thinking, and the ability to prove ROI. Here's what CMOs need.\nThe post The SEO Skills Gap: Why Technical Expertise Alone Won’t Cut It Anymore appeared first on Search En…",
            "url": "https://www.searchenginejournal.com/seo-skills-gap-why-technical-expertise-alone-wont-cut-it-anymore/568356/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/02/skill-gap-624.jpg",
            "publishedAt": "2026-03-23T11:15:13Z",
            "content": "The SEO industry has spent the last couple of decades perfecting the art of looking productive while delivering value some might describe as questionable.\r\nArmed with an extensive suite of analytical… [+15018 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Jeffbullas.com"
            },
            "author": "Kaleb Cruz",
            "title": "How to Track Someone on Instagram – Top 7 Tools to Use Today",
            "description": "If you want clarity about someone’s online behavior, learning how to track someone on Instagram often starts when you notice changes in posting patterns, hidden stories, or sudden follower shifts.  Instagram has over 500 million daily active story users, and …",
            "url": "https://www.jeffbullas.com/how-to-track-someone-on-instagram/",
            "urlToImage": "https://www.jeffbullas.com/wp-content/uploads/2026/03/image-3.png",
            "publishedAt": "2026-03-03T15:31:37Z",
            "content": "If you want clarity about someones online behavior, learning how to track someone on Instagram often starts when you notice changes in posting patterns, hidden stories, or sudden follower shifts. \r\nI… [+14490 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Myles Obenza",
            "title": "Riot Details New Legends, Mechanics, and More For Riftbound's Third Set, Unleashed",
            "description": "Unleashed is set to launch April 10 in China, with an English release date of May 8.",
            "url": "https://www.ign.com/articles/riot-details-new-legends-mechanics-and-more-for-riftbounds-third-set-unleashed",
            "urlToImage": "https://assets-prd.ignimgs.com/2026/03/16/key-art-1773680576585.jpg?width=1280&format=jpg&auto=webp&quality=80",
            "publishedAt": "2026-03-20T16:23:25Z",
            "content": "Riftbound, the League of Legends trading card game, has been one of the hottest new TCG's on the market since it was released in the West on Halloween of last year. Since launch, we've seen two full … [+2377 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Whyevolutionistrue.com"
            },
            "author": "whyevolutionistrue",
            "title": "The University of Chicago curriculum grows increasingly “progressive”",
            "description": "Over at the Heterodox Stem site, Iván Marinovic, a professor at Stanford, has hit on a way to measure wokeness in college curricula. He uses key words to distinguish “ideological and activist” courses from those that hew to the “Western intellectual tradition…",
            "url": "https://whyevolutionistrue.com/2026/03/17/the-university-of-chicago-curriculum-grows-increasingly-progressive/",
            "urlToImage": "https://whyevolutionistrue.com/wp-content/uploads/2026/03/45df1880-ba24-4088-bc20-9c95c1e5ff33_1524x388.webp",
            "publishedAt": "2026-03-17T16:00:48Z",
            "content": "Over at the Heterodox Stem site, Iván Marinovic, a professor at Stanford, has hit on a way to measure wokeness in college curricula. He uses key words to distinguish “ideological and activist” course… [+6131 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Habr.com"
            },
            "author": "VitalyOborin",
            "title": "Научил ИИ-агента помнить важное и забывать лишнее в SQLite",
            "description": "Я делаю локально работающего ИИ-агента и столкнулся с тем, что стандартный подход «закинуть текст в векторную базу, достать по косинусу» для долгоживущего агента не работает: контекст замусоривается, факты конфликтуют, ничего не забывается. Вместо этого реали…",
            "url": "https://habr.com/ru/articles/1006622/#post-content-body",
            "urlToImage": "https://habr.com/share/publication/1006622/a2999badd9cd21d841d89ab3465bfca8/",
            "publishedAt": "2026-03-04T18:46:10Z",
            "content": "TL;DR\r\n - , « , » : , , . SQLite: , , , (FTS5 + vector + graph) Reciprocal Rank Fusion, LLM-. , SQL- . .\r\n1. : RAG \r\n, «», : Qdrant/pgvector/Chroma/Pinecone/Milvus, , , Top-K . Q&amp;A . .\r\n : « Pyth… [+18067 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Diamond.jp"
            },
            "author": "牧野 洋",
            "title": "政権迎合型判決を連発していた米最高裁、トランプ政権の関税政策にノーを突き付ける - KEYWORDで世界を読む",
            "description": "司法の独立性（judicial independence）が保たれていたということなのか。米連邦最高裁判所が2月下旬にトランプ関税にノーを突き付けたのだ。",
            "url": "https://diamond.jp/articles/-/385118",
            "urlToImage": "https://dol.ismcdn.jp/mwimgs/9/a/-/img_9ab5689c2b6ee09f416f8743347ce01c532624.jpg",
            "publishedAt": "2026-03-04T19:10:00Z",
            "content": "judicial independence2\r\nreciprocal tariffpoliticization of SCOTUSdid its job\r\nThe Supreme Cour ts decision was about separation of powers. The taxing and tariff powers are clearly accorded to the Con… [+42 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Osnews.com"
            },
            "author": "Thom Holwerda",
            "title": "Han: a compiled programming language with Korean keywords written in Hangul",
            "description": "Since many of the platforms and conventions that came to dominate computing came from the western world, we never give it a second thought that virtually everything related to programming is written in English using the English alphabet. However, there’s no r…",
            "url": "https://www.osnews.com/story/144603/han-a-compiled-programming-language-with-korean-keywords-written-in-hangul/",
            "urlToImage": null,
            "publishedAt": "2026-03-16T22:07:35Z",
            "content": "Since many of the platforms and conventions that came to dominate computing came from the western world, we never give it a second thought that virtually everything related to programming is written … [+1949 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ericgoldman.org"
            },
            "author": "Eric Goldman",
            "title": "Another Reminder: Lawsuits Over Competitive Keyword Ads Are Stupid",
            "description": "This case involves two competitors that buy homes for cash: plaintiff Brothers Buy Homes and defendant John Buys Bay Area Homes. The defendant bought competitive keyword ads. Initially, the defendant displayed the plaintiff’s trademark in the ads, apparently …",
            "url": "https://blog.ericgoldman.org/archives/2026/03/another-reminder-lawsuits-over-competitive-keyword-ads-are-stupid.htm",
            "urlToImage": "https://blog.ericgoldman.org/wp-content/uploads/2026/03/blue-bay-ventures.jpg",
            "publishedAt": "2026-03-15T15:37:20Z",
            "content": "This case involves two competitors that buy homes for cash: plaintiff Brothers Buy Homes and defendant John Buys Bay Area Homes. The defendant bought competitive keyword ads. Initially, the defendant… [+10847 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Substack.com"
            },
            "author": "Duane Forrester",
            "title": "When Google Is No Longer A Verb: Search Becoming Infrastructure via @sejournal, @DuaneForrester",
            "description": "Search isn’t disappearing, but the habit is changing. This article breaks down why agents are replacing browsing with delegation.\nThe post When Google Is No Longer A Verb: Search Becoming Infrastructure appeared first on Search Engine Journal.",
            "url": "https://duaneforresterdecodes.substack.com/p/when-google-is-no-longer-a-verb-search",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/02/duane-forrester-decodes-ai-search-846.png",
            "publishedAt": "2026-02-26T14:30:17Z",
            "content": "Most people do not wake up one day and decide they are done with a product category. They leave when the workflow starts to feel like work.\r\nThink about something mundane. Planning a trip, picking a … [+10966 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Maria Khachatryan",
            "title": "The Agency Playbook for Surviving the Agentic AI Era",
            "description": "Discover the latest trends, tips, and strategies in SEO and PPC marketing. Our curated articles offer in-depth analysis, practical advice, and actionable insights to elevate your digital marketing efforts.",
            "url": "https://www.searchenginejournal.com/rundowns/the-agency-playbook-for-surviving-the-agentic-ai-era/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/03/loop-ai-689.png",
            "publishedAt": "2026-03-24T07:50:34Z",
            "content": "Search is moving from queries typed into a box to conversations held with systems that understand intent, context, and outcomes. People no longer look for pages. They look for solutions, guidance, an… [+11577 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Dealnews.com"
            },
            "author": null,
            "title": "Chipotle PGA Hot Streak Promo : Win \"buy one get one free\" entree codes this year",
            "description": "During select PGA Tour broadcasts this year, when a player goes on a \"hot streak\", check @PGATOUR on Instagram or X for posts with a keyword. Text said keyword to \"888222\" to get a code for a \"buy one get one free\" on entrees at Chipotle. Each keyword is limi…",
            "url": "https://www.dealnews.com/Chipotle-PGA-Hot-Streak-Promo-Win-buy-one-get-one-free-entree-codes-this-year/21817216.html",
            "urlToImage": "https://www.datocms-assets.com/64599/1774000369-chicken-burrito-side-view-cjnb.png?h=633&w=954",
            "publishedAt": "2026-03-20T09:53:20Z",
            "content": "moreAt Dealnews, we're usually saving you money with an array of epic deals. Well today, we're offering you the chance to earn some with this dream job. It pays $100,000, is remote, and involves you … [+278 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Kevin Indig",
            "title": "The Brand Tax: How Google Profits From Demand You Already Own via @sejournal, @Kevin_Indig",
            "description": "If your paid search looks efficient, branded keywords may be hiding the truth. Learn how to measure real performance.\nThe post The Brand Tax: How Google Profits From Demand You Already Own appeared first on Search Engine Journal.",
            "url": "https://www.searchenginejournal.com/the-brand-tax-how-google-profits-from-demand-you-already-own/569887/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/03/kevin-indig-growth-memo-brand-taxt-161.png",
            "publishedAt": "2026-03-17T13:30:08Z",
            "content": "Boost your skills with Growth Memo’s weekly expert insights. Subscribe for free!\r\nBranded search inflates your return on ad spend (ROAS) by taking credit for demand you already own, and every input i… [+8783 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Kevin Indig",
            "title": "Organic Rankings Vs. Product Grids: The New Ecommerce Divide via @sejournal, @Kevin_Indig",
            "description": "Ranking No. 1 in Google means less when product grids dominate the SERP. Here’s how ecommerce visibility actually works now.\nThe post Organic Rankings Vs. Product Grids: The New Ecommerce Divide appeared first on Search Engine Journal.",
            "url": "https://www.searchenginejournal.com/organic-rankings-vs-product-grids-the-new-ecommerce-divide/569159/",
            "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2026/03/kevin-indig-growth-memo-product-grid-411.png",
            "publishedAt": "2026-03-10T13:30:10Z",
            "content": "Boost your skills with Growth Memo’s weekly expert insights. Subscribe for free!\r\nFor a while now, SERP features have made SEO for ecommerce distinctly different from other verticals like B2B or loca… [+8767 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "R-bloggers.com"
            },
            "author": "Mathieu Cayssol",
            "title": "Beyond Keywords: How Semantic Search is Unlocking Clinical Code Reuse",
            "description": "Disclaimer: This blog contains opinions that are of the authors alone and do not necessarily reflect the strategy of their respective organizations.\r\n\nWhy this matters for pharmaverse programmers\nClinical reporting is built on repeatable patter...\r\n\n\n\nContinu…",
            "url": "https://www.r-bloggers.com/2026/03/beyond-keywords-how-semantic-search-is-unlocking-clinical-code-reuse/",
            "urlToImage": "https://pharmaverse.github.io/blog/posts/2026-03-20_beyond_key_words/csa_agent.png",
            "publishedAt": "2026-03-20T00:00:00Z",
            "content": "[This article was first published on pharmaverse blog, and kindly contributed to R-bloggers]. (You can report issue about the content on this page here)\r\nWant to share your content on R-bloggers? cli… [+7023 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mediagazer.com"
            },
            "author": null,
            "title": "Google rolls out Nano Banana 2, aka Gemini 3.1 Flash Image, with faster image generation, advanced world knowledge, and precision text rendering and translation (Naina Raisinghani/The Keyword)",
            "description": "Naina Raisinghani / The Keyword:\nGoogle rolls out Nano Banana 2, aka Gemini 3.1 Flash Image, with faster image generation, advanced world knowledge, and precision text rendering and translation  —  Our latest image generation model offers advanced world knowl…",
            "url": "https://mediagazer.com/260226/p14",
            "urlToImage": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/NB2_SS.width-1300.png",
            "publishedAt": "2026-02-26T16:25:02Z",
            "content": "Mediagazer presents the day's must-read media news on a single page.\r\nThe media business is in tumult: from the production side to\r\nthe distribution side, new technologies are upending the industry.\r… [+416 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Itsnicethat.com"
            },
            "author": "Kat Wong",
            "title": "“Let go of the small stuff”",
            "description": "It’s hard to get design momentum while juggling a toddler and a baby. Kat Wong explores how to reprioritise and figure out the balance that works in this week’s Creative Career Conundrums.",
            "url": "https://www.itsnicethat.com/articles/creative-career-conundrums-if-you-could-jobs-160326",
            "urlToImage": "https://admin.itsnicethat.com/images/6KOw2hIbZk38ZZPD_jQr9qHqMMM=/276509/width-1440%7Cformat-jpeg/CCC_260316_Toddler.png",
            "publishedAt": "2026-03-16T10:00:00Z",
            "content": "And this is how other creatives are experiencing the struggle trust me on that. Having returned from maternity leave, back into my (then) industry of live radio (a medium that is literally always on)… [+3516 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Semrush.com"
            },
            "author": "Ben Kendall",
            "title": "Search Has Changed. And So Have We.",
            "description": "Discover why Semrush is evolving its brand — and what the new era of brand visibility means for how marketers compete, get found, and win.",
            "url": "https://www.semrush.com/blog/semrush-new-brand/",
            "urlToImage": "https://static.semrush.com/semblog-next-static/images/social-sharing/semrush.png",
            "publishedAt": "2026-03-12T13:00:00Z",
            "content": "For years, Semrush has helped marketers win at search. Today, we're expanding what that means.\r\nWere introducing a brand rewired for the new era of marketing. \r\nMarketers Are Under Pressure Because R… [+2581 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SamMobile"
            },
            "author": "Asif Iqbal Shaik",
            "title": "Gemini gets integration with one more native Samsung app on the Galaxy S26",
            "description": "With the One UI 7.0 update, Samsung brought Gemini integration to three stock apps on Galaxy phones and tablets: Calendar, Notes, and Reminder. With the Galaxy S26 series, the company has added integration with one more stock app in One UI 8.5: Samsung Galler…",
            "url": "https://www.sammobile.com/news/gemini-integration-one-more-native-samsung-app-galaxy-s26/",
            "urlToImage": "https://www.sammobile.com/wp-content/uploads/2026/02/S26-series-hands-on-2-1200x674.jpg",
            "publishedAt": "2026-03-11T11:59:24Z",
            "content": "With the One UI 7.0 update, Samsung brought Gemini integration to three stock apps on Galaxy phones and tablets: Calendar, Notes, and Reminder. With the Galaxy S26 series, the company has added integ… [+1644 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "XDA Developers"
            },
            "author": "Mahnoor Faisal",
            "title": "I regret ignoring Grok for so long",
            "description": "Took me long enough.",
            "url": "https://www.xda-developers.com/i-regret-ignoring-grok-for-so-long/",
            "urlToImage": "https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2026/03/grok-on-ipad-and-mac.jpeg?w=1600&h=900&fit=crop",
            "publishedAt": "2026-03-10T14:30:21Z",
            "content": "l've watched Grok from the sidelines for a fair bit now. For someone who tests Al tools for a living and is always rotating from one tool to another depending on what handles each task, it took an em… [+7936 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mkennedy.codes"
            },
            "author": "Michael Kennedy",
            "title": "\"Michael Kennedy's Thoughts on Technology\": Fire and forget (or never) with Python’s asyncio",
            "description": "Python's asyncio.create_task() can silently garbage collect fire-and-forget tasks in 3.12+. Learn the background_tasks set pattern to fix it.",
            "url": "https://mkennedy.codes/posts/fire-and-forget-or-never-with-python-s-asyncio/",
            "urlToImage": "https://cdn.mkennedy.codes/posts/fire-and-forget-or-never-with-python-s-asyncio/fire-forget.webp",
            "publishedAt": "2026-03-19T03:22:27Z",
            "content": "TL;DR; Python’s asyncio.create_task() can silently garbage collect your fire-and-forget tasks starting in Python 3.12 - they may never run. The fix: store task references in a set and register a done… [+3959 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Github.blog"
            },
            "author": "Kedasha Kerr",
            "title": "GitHub for Beginners: Getting started with GitHub Actions",
            "description": "Set up your first GitHub Actions workflow in this how-to guide.\nThe post GitHub for Beginners: Getting started with GitHub Actions appeared first on The GitHub Blog.",
            "url": "https://github.blog/developer-skills/github/github-for-beginners-getting-started-with-github-actions/",
            "urlToImage": "https://github.blog/wp-content/uploads/2026/03/GIT829_THUMB_GFB_A.png?fit=1280%2C720",
            "publishedAt": "2026-03-13T23:00:29Z",
            "content": "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\" \"http://www.w3.org/TR/REC-html40/loose.dtd\">\nWelcome back to our ongoing GitHub for Beginners series, now in its third season! Our previo… [+10180 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5google.com"
            },
            "author": "Abner Li",
            "title": "Qualcomm announces Snapdragon Wear Elite for next gen of Wear OS, Galaxy Watch",
            "description": "At MWC 2026, Qualcomm announced the premium Snapdragon Wear Elite for Wear OS and other AI form factors.\n\n\n\n more…",
            "url": "http://9to5google.com/2026/03/01/qualcomm-snapdragon-wear-elite/",
            "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2026/02/Snapdragon-Wear-Elite-cover.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2026-03-02T07:00:00Z",
            "content": "At MWC 2026, Qualcomm announced the premium Snapdragon Wear Elite for Wear OS and other AI form factors.\r\nThis chip and product line are a level above the Snapdragon W5+ Gen 2 that is now considered … [+3321 chars]"
        },
        {
            "source": {
                "id": "techradar",
                "name": "TechRadar"
            },
            "author": "Sead Fadilpašić",
            "title": "'The prevailing wisdom used to be that macOS was at lower risk of malware infection compared to Windows...that’s no longer the case': Experts warn Mac infostealers are on the rise - here's how to stay safe",
            "description": "Three distinct campaigns recently spotted by Sophos, all targeting MacOS users with infostealers.",
            "url": "https://www.techradar.com/pro/security/the-prevailing-wisdom-used-to-be-that-macos-was-at-lower-risk-of-malware-infection-compared-to-windows-thats-no-longer-the-case-experts-warn-mac-infostealers-are-on-the-rise-heres-how-to-stay-safe",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/BpdRN3P8vSsvurNv9H4nnH-1920-80.jpg",
            "publishedAt": "2026-03-12T18:05:00Z",
            "content": "<ul><li>Sophos warns of multiple macOS ClickFix campaigns </li><li>Fake AI tools, ChatGPT conversations, and Apple site used to spread MacSync infostealer</li><li>Latest variant employs loaders, Appl… [+3503 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5google.com"
            },
            "author": "Abner Li",
            "title": "Google Drive adding AI Overviews as Gemini upgraded in Slides, Sheets",
            "description": "With new Gemini features, Google wants to transform Drive “from a passive storage container into an active knowledge base.” These updates are also coming to Google Slides and Sheets, starting today for AI Pro and AI Ultra subscribers, as well as Gemini Alpha …",
            "url": "http://9to5google.com/2026/03/10/google-drive-ai-overviews/",
            "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2026/03/Google-Drive-AI-Overview-cover.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2026-03-10T13:01:00Z",
            "content": "With new Gemini features, Google wants to transform Drive from a passive storage container into an active knowledge base. These updates are also coming to Google Slides and Sheets, starting today for… [+3502 chars]"
        }
    ]
    })
  })
]
