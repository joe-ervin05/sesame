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
			sidebar: [
				{
					label: "Overview",
					link: "/"
				},
				{
					label: "1. Sessions",
					autogenerate: { directory: 'sessions' }
				},
				{
					label: "2. Rate Limiting",
					autogenerate: { directory: "rate-limiting" }
				},
				{
					label: "3. Inactivity Timeouts",
					autogenerate: { directory: "inactivity-timeouts" }
				},
				{
					label: "4. OAuth",
					autogenerate: { directory: "oauth" }
				},
				{
					label: "5. 2FA",
					autogenerate: { directory: "mfa" }
				},
				{
					label: "6. Passkeys",
					autogenerate: { directory: "passkeys" }
				}
			],
		}),
	],
});
