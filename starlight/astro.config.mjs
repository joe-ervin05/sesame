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
				{ label: "1. Users & Sessions", slug: "users-sessions" },
				{ label: "2. Email & Password Setup", slug: "email-password" },
				{ label: "3. Password Signup & Login", slug: "password-signup-login" },
				{ label: "4. Verification & Recovery", slug: "verification-recovery" },
				{ label: "5. OAuth", slug: "oauth" },
				{ label: "6. Rate Limiting", slug: "rate-limiting" },
				{ label: "7. Inactivity Timeouts", slug: "inactivity-timeouts" },
				{ label: "8. 2FA", slug: "2fa" },
				{ label: "9. Passkeys", slug: "passkeys" },
			],
		}),
	],
});
