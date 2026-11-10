# Karibu Near

Location-based dating app for Kenya. Connect with people nearby using GPS, county filters, interests, tribe, religion, and lifestyle preferences.

## Features

- User profiles with photos, bio, age, interests
- GPS / location-based discovery
- Swipe, like, match
- Filters: county, distance, age, tribe, interests, religion
- Real-time chat (placeholder)
- Safety / report system
- M-Pesa ready for premium features
- Localized for Kenya (Nairobi, Mombasa, Kisumu, etc.)

## Tech Stack

- **Frontend**: Next.js (App Router) + TypeScript + Tailwind CSS
- **Hosting**: Netlify
- **Database**: Netlify Database (Postgres, PostGIS ready for geospatial queries)
- **Auth**: Ready for Netlify Identity / Clerk / Supabase Auth
- **Storage**: Netlify Blobs for photo uploads
- **Payments**: M-Pesa Daraja API

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

1. Push to GitHub
2. Connect the repo to Netlify
3. Add Netlify Database via `netlify db init` or the UI
4. Configure environment variables for M-Pesa, auth, etc.

## Next Steps

- Implement full auth + profile setup
- Add PostGIS for real distance queries
- Integrate real-time chat (Supabase Realtime or Socket.io)
- Photo uploads to Netlify Blobs
- M-Pesa STK Push for subscriptions
- Notifications & safety/reporting

Built for Kenyans who want to meet people close to home.
