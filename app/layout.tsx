import type { Metadata } from 'next';
import './globals.css';
import './flow.css';
import './theme.css';

export const metadata: Metadata = { title: 'Nourish — Protein, already sorted.', description: 'Fresh vegetarian meals built around your protein goal.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
