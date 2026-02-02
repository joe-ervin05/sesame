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
				{ label: "Overview", slug: "index" },
				{ label: "1. Sessions", slug: "sessions" },
				{ label: "2. Rate Limiting", slug: "rate-limiting" },
				{ label: "3. Inactivity Timeouts", slug: "inactivity-timeouts" },
				{ label: "4. OAuth", slug: "oauth" },
				{ label: "5. 2FA", slug: "2fa" },
				{ label: "6. Passkeys", slug: "passkeys" },
			],
		}),
	],
});
