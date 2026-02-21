import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const metadata = {
    title: 'maximH LLC — Geoff Hollingworth | Executive Technology Leader',
    description:
        'maximH LLC — Strategic executive advisory for technology companies. 30+ years leading marketing, cloud, telecom, and edge computing at Rakuten Symphony, MobiledgeX, Ericsson, and CERN.',
    keywords: [
        'maximH LLC',
        'CMO',
        'executive advisory',
        'telecom',
        'cloud computing',
        'edge computing',
        'marketing strategy',
        'technology leadership',
    ],
    openGraph: {
        title: 'maximH LLC — Geoff Hollingworth',
        description:
            'Executive Technology Leader · CMO · Strategic Advisor. 30+ years transforming how technology companies compete and win.',
        url: 'https://maximh.us',
        siteName: 'maximH LLC',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.variable}>
            <body>{children}</body>
        </html>
    );
}
