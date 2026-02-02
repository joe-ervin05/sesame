// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://sesame-auth.com',
	integrations: [
		starlight({
			title: 'Sesame',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/joe-ervin05/sesame' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: "Overview", link: "/" },
				{
					label: "1. Sessions",
					items: [
						{ label: "Overview", slug: "sessions/overview" },
						{ label: "Guide", slug: "sessions/guide" },
					],
				},
				{
					label: "2. Rate Limiting",
					items: [
						{ label: "Overview", slug: "rate-limiting/overview" },
						{ label: "Guide", slug: "rate-limiting/guide" },
					],
				},
				{
					label: "3. Inactivity Timeouts",
					items: [
						{ label: "Overview", slug: "inactivity-timeouts/overview" },
						{ label: "Guide", slug: "inactivity-timeouts/guide" },
					],
				},
				{
					label: "4. OAuth",
					items: [
						{ label: "Overview", slug: "oauth/overview" },
						{ label: "Guide", slug: "oauth/guide" },
					],
				},
				{
					label: "5. 2FA",
					items: [
						{ label: "Overview", slug: "2fa/overview" },
						{ label: "Guide", slug: "2fa/guide" },
					],
				},
				{
					label: "6. Passkeys",
					items: [
						{ label: "Overview", slug: "passkeys/overview" },
						{ label: "Guide", slug: "passkeys/guide" },
					],
				},
			],
		}),
	],
});
