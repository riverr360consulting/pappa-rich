# Installation & Setup Guide

## Quick Start (5 minutes)

### Step 1: Extract Project
```bash
# Navigate to project directory
cd pappa-rich-complete
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Update Configuration
Edit `.env.local` with your details:
```env
NEXT_PUBLIC_PHONE=+91YOUR_PHONE_NUMBER
NEXT_PUBLIC_EMAIL=your@email.com
NEXT_PUBLIC_WHATSAPP=91YOUR_PHONE_NUMBER
```

### Step 4: Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## Detailed Setup

### Prerequisites
- **Node.js**: v18 or higher
- **npm** or **yarn**: Package manager
- **Git**: For version control

### Installation Steps

1. **Clone or extract the repository**
   ```bash
   # If using git
   git clone <repository-url>
   cd pappa-rich-complete
   
   # If extracted from zip
   cd pappa-rich-complete
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your information:
   ```env
   NEXT_PUBLIC_SITE_NAME=Pappa Rich Shoe Laundry
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_PHONE=+919567100879
   NEXT_PUBLIC_EMAIL=hello@papparich.com
   NEXT_PUBLIC_WHATSAPP=919567100879
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at: `http://localhost:3000`

---

## Customization

### 1. Update Business Information

Edit `utils/constants.ts`:

```typescript
export const CONTACT_INFO: ContactInfo = {
  phone: '+91 YOUR_PHONE',
  email: 'your@email.com',
  address: 'Your Address',
  city: 'Your City',
  hours: 'Mon-Sun: 9AM-8PM',
  whatsapp: '91YOURPHONE',
};
```

### 2. Update Services

In `utils/constants.ts`, modify `SERVICES`:

```typescript
export const SERVICES: Service[] = [
  {
    id: 'deep-cleaning',
    icon: '🧼',
    title: 'Deep Cleaning',
    description: 'Your description here',
  },
  // Add more services...
];
```

### 3. Update Pricing

Edit `PRICING` in `utils/constants.ts`:

```typescript
export const PRICING = [
  {
    id: 'basic',
    name: 'Basic Package',
    price: '₹299',
    features: ['Feature 1', 'Feature 2'],
  },
  // Add more plans...
];
```

### 4. Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#YOUR_COLOR',
  'primary-dark': '#DARKER_COLOR',
  'primary-light': '#LIGHTER_COLOR',
}
```

### 5. Add Images

1. Place images in `public/` folder
2. Import and use in components:

```tsx
import Image from 'next/image';

<Image 
  src="/your-image.jpg" 
  alt="Description" 
  width={400} 
  height={300}
/>
```

---

## Build for Production

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Type Check
```bash
npm run type-check
```

### Lint Code
```bash
npm run lint
```

---

## Deploy to Vercel

### Automatic Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Set Environment Variables**
   - In Vercel dashboard: Settings → Environment Variables
   - Add each variable from `.env.local`:
     - `NEXT_PUBLIC_SITE_NAME`
     - `NEXT_PUBLIC_SITE_URL`
     - `NEXT_PUBLIC_PHONE`
     - `NEXT_PUBLIC_EMAIL`
     - `NEXT_PUBLIC_WHATSAPP`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at `your-project.vercel.app`

### Custom Domain

1. In Vercel Settings → Domains
2. Add your domain (e.g., `papparich.com`)
3. Follow DNS configuration steps
4. Wait 24-48 hours for DNS propagation

---

## Troubleshooting

### Port Already in Use
If port 3000 is busy:
```bash
npm run dev -- -p 3001
```

### Dependencies Installation Error
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Check for type errors
npm run type-check
```

### Build Fails
```bash
# Clean and rebuild
rm -rf .next
npm run build
```

---

## Project Structure

```
pappa-rich-complete/
├── app/                     # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
│
├── components/             # React components
│   ├── Header.tsx          # Navigation
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── Trust.tsx           # Trust badges
│   ├── Pricing.tsx         # Pricing plans
│   ├── Contact.tsx         # Contact form
│   ├── CTA.tsx             # Call to action
│   └── Footer.tsx          # Footer
│
├── types/                  # TypeScript types
│   └── index.ts           # Type definitions
│
├── utils/                  # Utilities
│   ├── constants.ts       # App data
│   └── helpers.ts         # Helper functions
│
├── public/                 # Static files
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── vercel.json
├── .env.local             # Local env vars
└── README.md
```

---

## Important Notes

1. **WhatsApp Integration**: Phone number must include country code (91 for India)
2. **Environment Variables**: Prefix `NEXT_PUBLIC_` to expose to browser
3. **Security**: Never commit `.env.local` to git
4. **Performance**: Images are optimized automatically by Next.js
5. **Mobile**: Design is fully responsive - test on all devices

---

## Support

- **Documentation**: See README.md
- **Issues**: Check troubleshooting section
- **Contact**: hello@papparich.com

---

Good luck! 🚀
