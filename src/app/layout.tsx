import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Sof Mebel | Premium mebel showroom',
    template: '%s | Sof Mebel',
  },
  description:
    'Sof Mebel bilan uyingiz uchun zamonaviy va sifatli mebellarni kashf eting.',
  metadataBase: new URL('https://sofmebel.uz'),
  openGraph: {
    title: 'Sof Mebel',
    description:
      'Premium interyer uchun zamonaviy mebel yechimlari.',
    url: 'https://sofmebel.uz',
    siteName: 'Sof Mebel',
    locale: 'uz_UZ',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-primary antialiased">
        {children}
      </body>
    </html>
  );
}