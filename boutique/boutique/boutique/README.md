# L'Atelier Boutique

A high-end boutique management dashboard built with Next.js 16, React 19, and Tailwind CSS 4.

## Features

- **Dashboard** - Overview of your atelier archive and recently curated designs
- **Design Library** - Organized folder-based collection management
- **Add Design** - Upload and catalog new designs with AI-powered organization
- **Presentation Mode** - Client-ready fullscreen presentation view

## Getting Started

First, set up your environment variables:

```bash
cp .env.local.example .env.local
```

Then configure Vercel Blob storage (see below).

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Image Upload Setup

This app uses Vercel Blob for storing uploaded design images.

### Setting up Vercel Blob

1. Go to [vercel.com](https://vercel.com) and create/link your project
2. Navigate to **Settings > Storage**
3. Click **Connect Database** and select **Blob**
4. After connecting, the `BLOB_READ_WRITE_TOKEN` will be automatically added to your environment variables

### Local Development

For local testing, you can use Vercel's CLI:

```bash
npm i -g vercel
vercel link
vercel env pull
```

This will pull your environment variables from Vercel.

## Tech Stack

- **Framework:** Next.js 16.2.2 (App Router)
- **UI:** React 19.2.4, Tailwind CSS 4
- **Language:** TypeScript
- **Storage:** Vercel Blob
- **Fonts:** Inter + Noto Serif (Google Fonts)
- **Icons:** Material Symbols

First, run the development server:

```bash
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
