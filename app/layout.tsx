import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Portfolio - Karol Bulanowski',
	description:
		'Witaj na moim portfolio! Tworzę innowacyjne rozwiązania przystosowane do potrzeb klientów, łącząc pasję do programowania z wiedzą z elektroniki i telekomunikacji,',
	keywords: [
		'Full-Stack Developer',
		'Software Engineer',
		'Frontend Development',
		'Backend Development',
		'React',
		'Next.js',
		'Node.js',
		'TypeScript',
		'Database Design',
		'API Development',
		'Cloud Solutions',
		'DevOps',
		'System Architecture',
		'Web Development'
	],
	authors: [{ name: 'Karol Bulanowski' }],
	creator: 'Karol Bulanowski',
	openGraph: {
		title: 'Karol Bulanowski - Portfolio',
		description:
			'Tworzę innowacyjne rozwiązania przystosowane do potrzeb klientów, łącząc pasję do programowania z wiedzą z elektroniki i telekomunikacji..',
		url: 'https://bulan.services',
		siteName: '[Your Name] - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: '[Your Name] - Full-Stack Developer Portfolio',
			},
		],
		locale: 'pl_PL',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '[Your Name] - Full-Stack Developer',
		description:
			'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: false,
		follow: false,
		googleBot: {
			index: false,
			follow: false,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl-PL">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
