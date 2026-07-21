import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Not Just Cuts | Hair Salon in Preston, Cambridge',
  description: 'Visit Not Just Cuts in Preston, Cambridge for professional haircuts, colouring and styling services. Call 519-621-4544 or request an appointment online.',
  keywords: [
    'Hair salon in Preston Cambridge',
    'Hairdresser in Cambridge Ontario',
    'Haircuts near Preston',
    'Family hair salon Cambridge',
    'Hair colouring Cambridge Ontario',
    'Men’s and women’s haircuts Cambridge',
    'Hair salon near King Street East Cambridge'
  ],
  openGraph: {
    title: 'Not Just Cuts | Hair Salon in Preston, Cambridge',
    description: 'Professional hair services for men, women and families in Preston and Cambridge, Ontario.',
    url: 'https://notjustcuts.example.com',
    siteName: 'Not Just Cuts',
    locale: 'en_CA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#8C3A3A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-ivory text-charcoal antialiased selection:bg-burgundy selection:text-white">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-burgundy focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
