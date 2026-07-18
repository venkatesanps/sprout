# Sprout — beginner investing site

A static site: no backend, no accounts. All personal data (risk profile, watchlist, API key) lives in the visitor's browser localStorage.

## Files
- index.html — landing page
- quiz.html — 6-question risk-profile quiz (saves to localStorage)
- dashboard.html — market overview, ideas, watchlist, starter mix
- market-data.js — Finnhub quote fetching (US live; India demo for now)
- support.js — page runtime (required, keep next to the HTML files)

## Deploy to GitHub Pages
1. Create a repo (e.g. \`sprout\`) on github.com.
2. Upload everything in this folder to the repo root (or push with git).
3. Repo Settings → Pages → Source: "Deploy from a branch" → branch \`main\`, folder \`/ (root)\` → Save.
4. Your site appears at \`https://<username>.github.io/sprout/\` in a minute or two.

## Live data
Visitors paste their own free finnhub.io API key in the dashboard's "Live market data" card. The key is stored only in their browser. Free tier covers US symbols; Indian tickers show demo data until a paid NSE/BSE source is added.

## Disclaimer
All ideas are educational, not financial advice. Keep the on-page disclaimers if you modify the site.
