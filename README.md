# Pappa Rich Shoe Laundry - Website

A modern, fully responsive website for Pappa Rich Shoe Laundry built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ TypeScript for type safety
- ✅ Server-side rendering with Next.js App Router
- ✅ Tailwind CSS for styling
- ✅ SEO optimized with metadata
- ✅ Contact form with WhatsApp integration
- ✅ Pricing section with plans
- ✅ Services showcase
- ✅ Trust badges and testimonials
- ✅ Mobile-optimized navigation
- ✅ Fast performance (Lighthouse ready)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🏗️ Project Structure

```
pappa-rich-complete/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services showcase
│   ├── Trust.tsx            # Trust badges
│   ├── Pricing.tsx          # Pricing plans
│   ├── Contact.tsx          # Contact form
│   ├── CTA.tsx              # Call to action
│   └── Footer.tsx           # Footer
├── types/
│   └── index.ts             # TypeScript types
├── utils/
│   ├── constants.ts         # App constants
│   └── helpers.ts           # Utility functions
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── .env.local
```

## 🔧 Installation

1. **Clone or extract the project:**
   ```bash
   cd pappa-rich-complete
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**
   Update `.env.local` with your contact information:
   ```env
   NEXT_PUBLIC_PHONE=+91XXXXXXXXXX
   NEXT_PUBLIC_EMAIL=your@email.com
   NEXT_PUBLIC_WHATSAPP=91XXXXXXXXXX
   ```

4. **Start development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser:**
   Visit `http://localhost:3000`

## 📱 Pages & Sections

- **Home** - Hero section with CTA
- **Services** - Deep Cleaning, Whitening, Restoration
- **Pricing** - Three pricing tiers
- **Contact** - Booking form with WhatsApp integration
- **Trust** - Badges highlighting service quality

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize colors:
```typescript
colors: {
  primary: '#2563eb',
  'primary-dark': '#1e40af',
  'primary-light': '#3b82f6',
}
```

### Content
Update content in `utils/constants.ts`:
- `NAV_LINKS` - Navigation menu
- `SERVICES` - Service offerings
- `PRICING` - Pricing plans
- `CONTACT_INFO` - Contact details

### Images
Replace emoji placeholders with actual images:
- Update `public/` folder with your images
- Modify component imports in components

## 📞 Contact Integration

The website integrates with WhatsApp for bookings. Update the phone number in:
1. `.env.local`
2. `utils/constants.ts` (CONTACT_INFO)

## 🚀 Deployment to Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/pappa-rich
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Set environment variables in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.local`

## 🔍 Performance Optimization

- Next.js 14 with App Router
- Image optimization
- Code splitting
- CSS optimization with Tailwind
- No external dependencies for UI

## 📊 SEO

- Meta tags in `layout.tsx`
- Open Graph tags
- Mobile viewport configuration
- Semantic HTML structure

## 🛠️ Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type check
npm run type-check

# Lint code
npm run lint
```

## 📦 Dependencies

- **next** - React framework
- **react** - UI library
- **react-dom** - DOM rendering
- **lucide-react** - Icon library
- **tailwindcss** - CSS framework
- **typescript** - Type safety

## 🤝 Support

For issues or questions, contact:
- Email: hello@papparich.com
- Phone: +91 9567100879
- WhatsApp: +91 9567100879

## 📄 License

This project is proprietary and belongs to Pappa Rich Shoe Laundry.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
