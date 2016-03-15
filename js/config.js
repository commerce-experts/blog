$(function() {

	CMS.init({

		// Name of your site or location of logo file ,relative to root directory (img/logo.png)
		siteName: 'CXP | Blog',

		// Tagline for your site
		siteTagline: '- blogging about going data driven',

		// Email address
		siteEmail: 'info@commerce-experts.com',

		// Name
		siteAuthor: 'CXP - Commerce Experts',

		// Navigation items
		siteNavItems: [
			{ name: 'Home'},
			{ name: 'Main Site', href: 'http://www.commerce-experts.com', newWindow: false}
		],

		// Posts folder name
		postsFolder: 'posts',

		// Homepage posts snippet length
		postSnippetLength: 120,

		// Pages folder name
		pagesFolder: 'pages',

		// Site fade speed
		fadeSpeed: 300,

		// Site footer text
		footerText: '&copy; ' + new Date().getFullYear() + ' CXP Commerce Experts UG (haftungsbeschränkt)',

		// Mode 'Github' for Github Pages, 'Apache' for Apache server. Defaults
		// to Github
		mode: 'Github',

		// If Github mode is set, your Github username and repo name. Defaults
		// to Github pages branch (gh-pages)
		githubUserSettings: {
			username: 'commerce-experts',
			repo: 'blog'
		}

	});

	// Markdown settings
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: true,
		smartLists: true,
		smartypants: false
	});

});
