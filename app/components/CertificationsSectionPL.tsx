'use client';

import { motion } from 'framer-motion';
import pebudWPImage2 from '../../public/images/pebudWP2.png';
import lasoviaImage from '../../public/images/lasovia-strona.png';
import makietaImage from '../../public/images/makieta.png';
import cFGImage from '../../public/images/CFG2_2020.png';
import strazBSPImage from '../../public/images/strazBSP.png';
import logopogotowieImage from '../../public/images/logo-pogotowie.png';
import facebooktleImage from '../../public/images/facebook_w_tle.png';

import Image from 'next/image';
import { useState } from 'react';

export default function CertificationSection() {
	const [modalImage, setModalImage] = useState<string | null>(null);
	return (

		<section id='projects' className="py-20 px-4">
			{modalImage && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
					onClick={() => setModalImage(null)}
				>
					<Image
						src={modalImage}
						alt="Fullscreen"
						fill
						loading='lazy'
						className="rounded-lg shadow-2xl"
						onClick={e => e.stopPropagation()}
						style={{ objectFit: 'contain', margin: '20px', maxWidth: '90vw', maxHeight: '90vh' }}
					/>
					<button
						className="absolute top-6 right-8 text-white text-3xl font-bold"
						onClick={() => setModalImage(null)}
						aria-label="Zamknij"
					>
						×
					</button>
				</div>
			)}
			<div className="max-w-7xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Inne realizacje
				</motion.h2>
				{/* Projects List */}
				{/* First Project eDepozyt Card */}
				<div className="space-y-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">
											CMS (WordPress)
										</h3>
										<p className="text-gray-400 text-justify">
											Instalacja, naprawa, konfiguracja i optymalizacja stron internetowych opartych na WordPressie. Wykonywanie aktualizacji, tworzenie kopii zapasowych oraz zapewnienie bezpieczeństwa witryn. Pomoc w migracji stron między serwerami oraz rozwiązywanie problemów z kompatybilnością wtyczek i motywów. Instalacja i dostosowanie motywów oraz wtyczek, aby spełniały specyficzne wymagania klientów. Praca z PageBuilderami takimi jak Elementor i Nicepage w celu tworzenia responsywnych i estetycznych stron internetowych.
										</p>
									</div>
								</div>
								<div className="space-y-6 grid grid-cols-2 md:grid-cols-2 gap-6">
									<div className="relative bg-black/30 rounded-xl p-6 ">
										<div className="aspect-[1] bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
											<Image
												src={pebudWPImage2}
												alt="Program eDepozyt Screenshot"
												fill
												loading='lazy'
												className="object-cover w-full h-full cursor-zoom-in rounded-lg"
												onClick={() => setModalImage(pebudWPImage2.src)}
											/>
										</div>
									</div>
									<div className="relative bg-black/30 rounded-xl p-6">
										<div className="aspect-[1] bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
											<Image
												src={lasoviaImage}
												alt="Program eDepozyt Screenshot"
												fill
												loading='lazy'
												className="object-cover w-full h-full cursor-zoom-in rounded-lg"
												onClick={() => setModalImage(lasoviaImage.src)}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">
											Sieci komputerowe i bezpieczeństwo
										</h3>
										<p className="text-gray-400 text-justify">
											W ramach zajęć akademickich realizowałem szkolenie 20410D z zakresu administracji systemem Windows Server, który przygotowuje do egzaminu 70-410: Installing and Configuring Windows Server 2012. Kurs obejmuje instalację, konfigurację i zarządzanie serwerami z systemem Windows Server 2012, w tym konfigurację ról serwerowych, Active Directory, zasad grupy i innych kluczowych elementów systemu. Projektowanie, konfiguracja i zarządzanie sieciami komputerowymi. Instalacja i konfiguracja routerów, switchy oraz punktów dostępowych. Rozwiązywanie problemów z połączeniami. Praca z protokołami sieciowymi takimi jak TCP/IP, DHCP, DNS i VLAN. Znajomość podstawowych metodataków sieciowych jak phishing, DDoS, SQL Injection i XSS. Podstawowa znajomość Kali Linux.
										</p>
									</div>
								</div>
							</div>
							<div className="space-y-6 grid grid-cols-1 md:grid-cols-1 gap-6">
								<div className="relative bg-black/30 rounded-xl p-6 ">
									<div className="aspect-[16/9] bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
										<Image
											src={makietaImage}
											alt="Program eDepozyt Screenshot"
											fill
											loading='lazy'
											className="object-contain w-full h-full cursor-zoom-in rounded-lg"
											onClick={() => setModalImage(makietaImage.src)}
										/>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">
											Grafika i montaż wideo
										</h3>
										<p className="text-gray-400 text-justify">
											Projektowanie graficzne obejmujące tworzenie logo, identyfikacji wizualnej, materiałów reklamowych i marketingowych. Wykonywanie grafik do mediów społecznościowych, banerów reklamowych oraz infografik. Praca z narzędziami takimi jak Adobe Photoshop, Illustrator, PremierePro i Figma w celu tworzenia estetycznych i funkcjonalnych projektów graficznych.
										</p>
									</div>
								</div>
							</div>
							<div className="space-y-6 grid grid-cols-2 md:grid-cols-4 gap-6">
								<div className="relative bg-black/30 rounded-xl p-6 ">
									<div className="aspect-[16/9] bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
										<Image
											src={cFGImage}
											alt="Program eDepozyt Screenshot"
											fill
											loading='lazy'
											className="object-contain w-full h-full cursor-zoom-in rounded-lg"
											onClick={() => setModalImage(cFGImage.src)}
										/>
									</div>
								</div>
								<div className="relative bg-black/30 rounded-xl p-6 ">
									<div className="aspect-[16/9] bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
										<Image
											src={strazBSPImage}
											alt="Program eDepozyt Screenshot"
											fill
											loading='lazy'
											className="object-contain w-full h-full cursor-zoom-in rounded-lg"
											onClick={() => setModalImage(strazBSPImage.src)}
										/>
									</div>
								</div>
								<div className="relative bg-black/30 rounded-xl p-6 ">
									<div className="aspect-[16/9] bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
										<Image
											src={logopogotowieImage}
											alt="Program eDepozyt Screenshot"
											fill
											loading='lazy'
											className="object-contain w-full h-full cursor-zoom-in rounded-lg"
											onClick={() => setModalImage(logopogotowieImage.src)}
										/>
									</div>
								</div>
								<div className="relative bg-black/30 rounded-xl p-6 ">
									<div className="aspect-[16/9] bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
										<Image
											src={facebooktleImage}
											alt="Program eDepozyt Screenshot"
											fill
											loading='lazy'
											className="object-contain w-full h-full cursor-zoom-in rounded-lg"
											onClick={() => setModalImage(facebooktleImage.src)}
										/>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">
											Serwis sprzętu komputerowego
										</h3>
										<p className="text-gray-400 text-justify">
											Diagnostyka i naprawa komputerów stacjonarnych i laptopów. Wymiana uszkodzonych komponentów, takich jak dyski twarde, pamięć RAM, karty graficzne i zasilacze. Odzyskiwanie danych ze sprawnie technicznie nośników. Instalacja systemów operacyjnych, oprogramowania oraz sterowników. Optymalizacja wydajności sprzętu.
										</p>
									</div>
								</div>
							</div>

						</div>
					</motion.div>
				</div>
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center pt-4">
					i nie tylko...
				</motion.h2>
			</div>
		</section >
	);
}
