# Jude Belicano — Next.js Portfolio Upgrade

This is a set of files to add to your existing `jude-portfolio` Next.js project.

## 1. Copy files
Copy the folders `app`, `components`, `lib`, and `public` into your project, merging folders and replacing `app/page.tsx` and `app/globals.css` when prompted.

The `public/images/jude-portrait.jpg` and `public/images/linkedin-banner.png` assets are included.

## 2. Install Resend
From your project folder:
```bash
npm install resend
```

## 3. Configure environment variables
Create `.env.local` in your project root:
```env
RESEND_API_KEY=re_your_actual_api_key
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
CONTACT_TO_EMAIL=your-real-email@example.com
```
- Get an API key from https://resend.com/
- Replace `CONTACT_TO_EMAIL` with the inbox where you want to receive messages.
- `onboarding@resend.dev` is suitable for testing to verified recipients. For production, verify a domain in Resend and use an address on that domain for `CONTACT_FROM_EMAIL`.
- Never put `RESEND_API_KEY` in a `NEXT_PUBLIC_` variable or client-side code.
- Restart `npm run dev` after editing `.env.local`.

## 4. Run locally
```bash
npm run dev
```
Open http://localhost:3000

## 5. Test the contact form
Submit the form using an email address you can access. Check the terminal for errors and your configured inbox for the message. Resend account/domain restrictions may affect delivery.

## 6. Replace project preview images
The included SVGs are illustrative placeholders, not screenshots of real deployed applications. Replace them with screenshots of projects you are authorized to show. Keep the same filenames or update `lib/projects.ts`.

## Notes
- Project content is based on the skills and project categories you described. Update any details that do not reflect work you actually completed.
- Do not publish Panasiatic internal screenshots, credentials, customer information, internal URLs, or proprietary code without authorization.
- This package is a source-file upgrade, not a complete `create-next-app` installation. Keep your existing `package.json`, lockfile, and Next.js setup.
