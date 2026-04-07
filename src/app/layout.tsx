import type { Metadata } from 'next';
import { inter, jetbrainsMono } from './fonts';
import { ClientShell } from './client-shell';
import './globals.css';

export const metadata: Metadata = {
  title: 'Saravanabhavan S — Backend & AI Developer',
  description:
    'Portfolio of Saravanabhavan S — Backend Developer, AI Developer, and Full Stack Developer building scalable systems and GenAI applications.',
  authors: [{ name: 'Saravanabhavan S' }],
  openGraph: {
    type: 'website',
    title: 'Saravanabhavan S — Backend & AI Developer',
    description: 'I build scalable backend systems and AI-powered applications.',
  },
  themeColor: '#080808',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
