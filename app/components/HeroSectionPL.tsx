'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | 'embedded' | null>(null);

	const scrollToProjects = () => {
		const projectsSection = document.getElementById('projects');
		if (projectsSection) {
			projectsSection.scrollIntoView({ behavior: 'smooth' });
		}
	}
	// Bounce animation for the arrow
	const arrowVariants = {
		bounce: {
			y: [0, -8, 0], // Moves up 8px and back
			transition: {
				duration: 1,
				ease: "easeInOut",
				repeat: Infinity,
				repeatType: "loop" as const,
			},
		},
	};

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 ">
							Karol Bulanowski
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold text-white">Portfolio</h2>
						<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
							Tworzę praktyczne rozwiązania przystosowane do potrzeb klientów, łącząc pasję do programowania z wiedzą z elektroniki i telekomunikacji.
						</p>
						<p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
							Uzyskałem tytuł magistra inżyniera na <span className="text-blue-400">Politechnice Rzeszowskiej</span> na kierunku {' '}
							<span className="text-purple-400">Elektronika i Telekomunikacja</span>
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">C/C++</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">React.js</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">SQL</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Git</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">PHP</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Dart</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">IoT</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">Adobe</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Win Server</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">Linux</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">MS Office</span>
					</div>
				</motion.div>

				{/* Interactive System Architecture */}
				<div className="w-full max-w-6xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
						<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
							{/* Frontend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${selectedStack === 'frontend' ? 'bg-yellow-500/20 border-yellow-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-yellow-400">Frontend </h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
										Nowoczesne UI
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
										Intuicyjne i przyjemne UX
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
										Responsywność i dostępność
									</li>
								</ul>
							</div>

							{/* Backend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${selectedStack === 'backend' ? 'bg-purple-500/20 border-purple-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">Backend </h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Komunikacja z API
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Architektura baz danych
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Uwierzytelnianie i autoryzacja
									</li>
								</ul>
							</div>

							{/* DevOps Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${selectedStack === 'embedded' ? 'bg-teal-500/20 border-teal-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
								onMouseEnter={() => setSelectedStack('embedded')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">Embedded</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Programowanie mikrokontrolerów
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Projektowanie schematów
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Projektowanie PCB
									</li>
								</ul>
							</div>
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${selectedStack === 'devops' ? 'bg-blue-500/20 border-blue-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">Wsparcie IT </h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Sieci komputerowe
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Systemy operacyjne
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Serwery
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
				{/* Down Arrow to Scroll to Projects */}
				<motion.button
					variants={arrowVariants}
					initial="bounce"
					animate="bounce"
					whileHover={{ y: -5, transition: { duration: 0.2 } }}
					className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-white text-3xl md:text-4xl z-20"
					onClick={scrollToProjects}
					aria-label="Przewiń do sekcji projektów"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-8 h-8 md:w-10 md:h-10 text-teal-500 hover:text-teal-400 transition-colors"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</motion.button>
			</div>

		</section>
	);
}
