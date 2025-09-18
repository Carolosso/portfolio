'use client';

// Polish Components
import HeroSectionPL from './components/HeroSectionPL';
import ProjectsSectionPL from './components/ProjectsSectionPL';
import ContactSectionPL from './components/ContactSectionPL';
import CertificationsSectionPL from './components/CertificationsSectionPL';
import { useState } from 'react';

// English Components
import HeroSectionEN from './components/HeroSectionEN';
import ProjectsSectionEN from './components/ProjectsSectionEN';
import ContactSectionEN from './components/ContactSectionEN';
import CertificationsSectionEN from './components/CertificationsSectionEN';

export default function FullStackPortfolio() {
	const [language, setLanguage] = useState<'pl' | 'en'>('pl');

	const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setLanguage(e.target.value as 'pl' | 'en');
	};

	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
			<div className="flex justify-end p-4 ">
				{language === 'pl' ? (
					<span className="text-gray-400 px-5">Język: </span>
				) : (
					<span className="text-gray-400 px-5">Language: </span>
				)}
				<select
					value={language}
					onChange={handleLanguageChange}
					className="bg-gray-800 text-white px-2 py-1 rounded"
				>
					<option value="pl">Polski</option>
					<option value="en">English</option>
				</select>
			</div>

			{/* Conditional Rendering based on Language */}
			{language === 'pl' ? (
				<>
					<HeroSectionPL />
					<ProjectsSectionPL />
					<CertificationsSectionPL />
					<ContactSectionPL />
				</>
			) : (
				<>
					<HeroSectionEN />
					<ProjectsSectionEN />
					<CertificationsSectionEN />
					<ContactSectionEN />
				</>
			)}
		</main>
	);
}
