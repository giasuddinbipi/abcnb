# abcNB Garments Website

A modern, responsive Next.js website for abcNB, based on the supplied company profile and logo.

## Included

- Next.js App Router architecture
- Responsive desktop / tablet / mobile design
- Light + dark theme toggle with saved preference
- Homepage auto-rotating slider with manual controls
- Separate pages: Home, About Us, Products, Capabilities, Sustainability, Contact
- Google Maps embed on About Us page for:
  `1/C, Level 5, Road 2, Sector 3, Uttara, Dhaka-1230`
- Original abcNB logo in the header and footer
- Company profile content: stock lots, direct/fresh order FOB ranges, capacity, MOQ, niche capability, sustainability projects and contact information
- SEO metadata

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy with GitHub + Vercel

1. Create a new GitHub repository.
2. Upload/push this project to the repository.
3. Sign in to Vercel and choose **Add New → Project**.
4. Import the GitHub repository.
5. Vercel will detect Next.js automatically.
6. Click **Deploy**.

No environment variables are required for the current version.

## Content note

The website intentionally uses the business data supplied in the provided company-profile PDF. You can later replace text, pricing, capacity or contact information inside `data/site.js` and the relevant pages.
