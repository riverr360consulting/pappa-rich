import { NavLink, Service, TrustItem, ContactInfo } from '@/types/index';

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About Us', href: '/about' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'deep-cleaning',
    icon: '🧼',
    title: 'Deep Cleaning',
    description: 'Thorough cleaning to remove dirt, mud and stains from every corner of your shoes.',
    details: 'Professional deep cleaning using eco-friendly products to restore your shoes to original condition.',
  },
  {
    id: 'whitening',
    icon: '✨',
    title: 'Whitening',
    description: 'Restore the brightness of your shoes and make them shine like new.',
    details: 'Special whitening treatment for sneakers and athletic shoes to bring back that fresh look.',
  },
  {
    id: 'restoration',
    icon: '🔧',
    title: 'Restoration',
    description: 'We repair, restore and revive your old and worn-out shoes to their former glory.',
    details: 'Complete restoration service including sole repair, stitching, and refinishing.',
  },
];

export const TRUST_ITEMS: TrustItem[] = [
  {
    id: 'local-trusted',
    icon: '📍',
    title: 'Local & Trusted',
    description: 'Proudly serving Calicut and surrounding areas.',
  },
  {
    id: 'on-time',
    icon: '⏰',
    title: 'On-Time Service',
    description: 'We value your time and ensure quick & reliable delivery.',
  },
  {
    id: 'satisfaction',
    icon: '✅',
    title: '100% Satisfaction',
    description: 'Customer satisfaction is our top priority.',
  },
  {
    id: 'eco-friendly',
    icon: '🌿',
    title: 'Eco-Friendly',
    description: 'We use environment friendly and safe cleaning products.',
  },
];

export const CONTACT_INFO: ContactInfo = {
  phone: '+91 9567100879',
  email: 'hello@papparich.com',
  address: 'Calicut (Kozhikode)',
  city: 'Kerala',
  hours: 'Mon-Sun: 9AM-8PM',
  whatsapp: '+919567100879',
};

export const PRICING = [
  {
    id: 'basic',
    name: 'Basic Cleaning',
    price: '₹299',
    features: ['Deep cleaning', 'Standard polish', '2-3 days delivery'],
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: '₹599',
    features: ['Deep cleaning', 'Whitening', 'Stain removal', '1-2 days delivery'],
  },
  {
    id: 'restoration',
    name: 'Full Restoration',
    price: '₹999',
    features: ['Complete restoration', 'Sole repair', 'Whitening', 'Next day delivery'],
  },
];
