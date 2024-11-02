interface DashboardLink {
  name: string;
  href: string;
  iconPath: string;
}

export const COMPANY_LINKS = ['About us', 'Blog', 'Investors'];
export const SUPPORT_LINKS = [
  'FAQs',
  'Feedback',
  'Privacy policy',
  'Terms and conditions',
];

export const DASHBOARD_LINKS: DashboardLink[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    iconPath: '/dashboard.svg',
  },
  {
    name: 'Weather',
    href: '/weather',
    iconPath: '/weather.svg',
  },
  {
    name: 'Product Listings',
    href: '/product-listings',
    iconPath: '/product-list.svg',
  },
  {
    name: 'AI Chatbot',
    href: '/chat',
    iconPath: '/article.svg',
  },
  {
    name: 'Articles',
    href: '/articles',
    iconPath: '/article.svg',
  },
  {
    name: 'Settings',
    href: '/settings',
    iconPath: '/settings.svg',
  },
];
