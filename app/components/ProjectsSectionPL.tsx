'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import edepozytImage from '../../public/images/edepozyt.png';
import rfidImage from '../../public/images/rfid.png';
import pMagazynPebudWebImage from '../../public/images/pMagazynPebudWeb.png';
import heartsOMSIPIIblurImage from '../../public/images/heartsOMSIPIIblur.png';
import pMagazynPebudImage from '../../public/images/pMagazynPebud.png';
import scpiMonitorImage from '../../public/images/20231212_161841.jpg';
import PIBiOImage from '../../public/images/PIBiO.png';
import omsipii1 from '../../public/images/omsipii-1-2.png';
import omsipii2 from '../../public/images/omsipii-2-2.png';

export default function ProjectsSection() {
	const [modalImage, setModalImage] = useState<string | null>(null);

	return (
		<section id='projects' className="py-20 px-4">
			{/* Modal for fullscreen image */}

			{modalImage && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
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
					Projekty
				</motion.h2>
				{/* Projects List */}
				{/* First Project eDepozyt Card */}
				<div className="space-y-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<div className='flex gap-4 '>

											<a href='https://play.google.com/store/apps/details?id=com.bulan.omsipii.omsipii&pcampaignid=web_share' target='_blank' className='hover:text-slate-300'>
												<svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
													<path
														fill="currentColor"
														d="m3.751.61l13.124 7.546l-2.813 2.813zM1.032 0l12.047 12L1.033 24a1.72 1.72 0 0 1-1.032-1.643v.003V1.641L0 1.576C0 .875.42.272 1.022.005zm19.922 10.594c.414.307.679.795.679 1.344l-.001.065V12a1.56 1.56 0 0 1-.629 1.403l-.004.003l-2.813 1.593L15.14 12l3.047-3.047zM3.751 23.39l10.312-10.359l2.813 2.813z"
													></path>
												</svg>
											</a>
											<h3 className="text-2xl font-bold mb-4">
												OMSIPII (faza testów - WIP)
											</h3>
										</div>
										<p className="text-gray-400 text-justify">
											Aplikacja mobilna stworzona z myślą o Rycerzach św. Jana Pawła II, aby wspierać codzienną modlitwę, formację i życie wspólnotowe. Dzięki prostemu i eleganckiemu interfejsowi zapewnia szybki dostęp do modlitw, materiałów formacyjnych oraz aktualnych treści duchowych.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-yellow-400 mb-3">Architektura Frontend - <b>Flutter</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Dynamiczny i responsywny interfejs użytkownika zapewniający intuicyjną obsługę</li>
												<li>• Prosta obsługa, dostępność</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Architektura Backend - <b>Flutter, JSON</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Funkcjonalność offline z pełnym dostępem do danych lokalnych</li>
												<li>• Aktualizacja danych z pliku JSON</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Kluczowe cechy</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Modlitwy codzienne i okolicznościowe</li>
											<li>• Przejrzyste wyszukiwanie i nawigacja</li>
											<li>• Personalizacja i dostępność</li>
											<li>• Szybkość</li>
										</ul>
									</div>
								</div>
								<div className="relative bg-black/30 rounded-xl p-6">
									<div className=" aspect-[1] bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
										<Image
											src={omsipii1}
											alt="Program eDepozyt Screenshot"
											fill
											loading='lazy'
											className="object-cover w-full h-full cursor-zoom-in rounded-lg"
											onClick={() => setModalImage(omsipii1.src)}
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
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<div className='flex gap-4 '>
											<a href='https://wbmil.smallhost.pl/' target='_blank' className='hover:text-slate-300'>
												<svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
													<path fillRule="evenodd" d="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clipRule="evenodd" />
												</svg>
											</a>
											<h3 className="text-2xl font-bold mb-4">
												Program eDepozyt (WIP)
											</h3>
										</div>
										<p className="text-gray-400 text-justify">
											eDepozyt to desktopowa aplikacja typu CRUD, która aktualnie upraszcza zarządzanie rejestrem dowodów rzeczowych w jednej z jednostek państwowych. Program umożliwia generowanie raportów pojedynczych i zbiorczych do plików CSV i PDF. Użytkownicy mogą łatwo dodawać, edytować i usuwać wpisy, a także przeszukiwać rejestr. Aplikacja jest w pełni responsywna i działa na różnych systemach operacyjnych dzięki wykorzystaniu frameworka Electron. Zadbano o intuicyjny interfejs użytkownika, który ułatwia nawigację i zarządzanie danymi. Program jest w trakcie rozwoju i planowane są dalsze funkcje, takie jak integracja z systemami zewnętrznymi i zwiększenie bezpieczeństwa danych.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-yellow-400 mb-3">Architektura Frontend - <b>React.js</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Dynamiczny i responsywny interfejs użytkownika zapewniający intuicyjną obsługę</li>
												<li>• Zaawansowane filtrowanie z podświetlaniem wyników</li>
												<li>• Podział na komponenty</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Architektura Backend - <b>Electron</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Lekka baza danych SQLite zapewniająca szybkie operacje CRUD</li>
												<li>• Bezpieczna komunikacja między procesami za pomocą Context Bridge</li>
												<li>• Funkcjonalność offline z pełnym dostępem do danych lokalnych</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Kluczowe cechy</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Praca offline z synchronizacją danych w środowisku desktopowym</li>
											<li>• Obsługa wielu użytkowników z rolami</li>
											<li>• Eksport raportów do formatów CSV dla łatwej analizy i PDF do wydruku</li>
											<li>• Optymalna wydajność dzięki minimalistycznemu zużyciu zasobów</li>
											<li>• System kontroli licencji z weryfikacją ważności</li>
											<li>• Modularna architektura umożliwiająca dostosowanie do różnych branż</li>
										</ul>
									</div>
								</div>
								<div className="relative bg-black/30 rounded-xl p-6">
									<div className=" aspect-[1] bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
										<Image
											src={edepozytImage}
											alt="Program eDepozyt Screenshot"
											fill
											loading='lazy'
											className="object-cover w-full h-full cursor-zoom-in rounded-lg"
											onClick={() => setModalImage(edepozytImage.src)}
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
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<div className='flex gap-4 '>
											<a href='https://github.com/Carolosso/RF430RFL152H-project' target='_blank' className="hover:text-slate-300">
												<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
												</svg></a>
											<a href='../assets/praca_magisterska-Karol_Bulanowski.pdf' target='_blank' className="hover:text-slate-300">												<svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
												<path fillRule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm-6 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H5Zm1.5 3H6v-1h.5a.5.5 0 0 1 0 1Zm4.5-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1.376A2.626 2.626 0 0 0 15 15.375v-1.75A2.626 2.626 0 0 0 12.375 11H11Zm1 5v-3h.375a.626.626 0 0 1 .625.626v1.748a.625.625 0 0 1-.626.626H12Zm5-5a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1h1a1 1 0 1 0 0-2h-2Z" clipRule="evenodd" />
											</svg>
											</a>
											<h3 className="text-2xl font-bold mb-4"> Tekstroniczny tag RFID z ADC (2025)</h3>
										</div>
										<p className="text-gray-400 text-justify">
											Praca magisterska, której celem było zaprojektowanie i wykonanie tekstylnego identyfikatora RFID zintegrowanego z czujnikiem pojemnościowym, działającego w paśmie HF i zgodnego ze standardem NFC. Wykonano prototyp haftowanej anteny oraz struktur czujnikowych i połączono je z układem RF430FRL152H. Mimo poprawnej komunikacji z urządzeniem mobilnym, nie udało się jednoznacznie zarejestrować zmian pojemności. Opracowany układ stanowi podstawę do dalszych prac nad tekstylnymi czujnikami ubieralnymi.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Software</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Program C obsługujący customowe komendy przez interfejs NFC</li>
												<li>• Programowanie mikrokontrolera &apos;Over the Air&apos; wykorzystując repozytorium &apos;GoodV&apos;</li>
												<li>• Aplikacja mobilna inicjalizująca pomiar i odczytująca wartości napiecia na wejściu ADC</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Hardware</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• RF430RFL152H jako mikrokontroler</li>
												<li>• Projekt PCB ze złączami do przewlekania nici na podłożu FLEX</li>
												<li>• Projekt haftowanej anteny z nici przewodzącej o odpowiedniej wartości indukcyjności (nie wymaga kondensatorów dostrajających)</li>
												<li>• Projekt haftowanych czujników pojemnościowych (grzebieniowy, spiralny, siatka) </li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Kluczowe cechy</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Wykorzystanie technologii RFID i NFC do komunikacji</li>
											<li>• Bezbateryjny układ wykonujący podstawowy pomiar</li>
											<li>• Integracja z aplikacją mobilną do odczytu danych</li>
											<li>• Możliwość dalszego rozwoju i integracji z systemami IoT</li>
											<li>• Wykorzystanie nici przewodzącej w haftach do tworzenia anten i czujników</li>
										</ul>
									</div>
								</div>
								<div className="relative bg-black/30 rounded-xl p-6">
									<div className="aspect-[1] bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
										<Image
											src={rfidImage}
											alt="Program eDepozyt Screenshot"
											fill
											loading='lazy'
											className="object-cover w-full h-full cursor-zoom-in rounded-lg"
											onClick={() => setModalImage(rfidImage.src)}
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
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<div className='flex gap-4 '>
											<a href='https://github.com/Carolosso/baza-adopcja' target="_blank" className='hover:text-slate-300'>
												<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
												</svg></a>
											<h3 className="text-2xl font-bold mb-4 ">Baza danych (2024)</h3>
										</div>
										<p className="text-gray-400 text-justify">
											Panel Backpacka dostosowano dla potrzeb organizacji charytatywnej. Panel umożliwia dodawanie, edytowanie i usuwanie pozycji rejestru. Do każdej pozycji możliwe jest przypisanie wpisu płatności i załączników. Możliwe jest wgranie zdjęcia do każdej z pozycji. Utworzono harmonogram zadań CRON, który codziennie aktualizuje rejestr.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-yellow-400 mb-3">Architektura Frontend - <b>Bootstrap/Tabler</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Dostosowanie interfejsu do potrzeb projektu</li>
												<li>• Możliwość wgrania zdjęcia do wpisu, wpłat, załączników</li>
												<li>• Obsługa wielu tabel z przełączaniem między nimi</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Architektura Backend - <b>Laravel</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Relacyjna struktura bazy danych</li>
												<li>• Pomyślna integracja z CRUD API, struktura Model-CrudController</li>
												<li>• Komenda CRON do aktualizacji upływu dni</li>
											</ul>
										</div>
									</div>
									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Kluczowe cechy</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Obowiązkowe uwierzytelnianie 2FA (Aplikacja Auth)</li>
											<li>• Dostępność online na wielu platformach</li>
											<li>• Obsługa wielu użytkowników wymagających zatwierdzenia z rolami i uprawnieniami</li>
											<li>• Filtrowanie i eksport danych</li>
										</ul>
									</div>
								</div>
								<div className="relative bg-black/30 rounded-xl p-6">
									<div className="aspect-[1] bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
										<Image
											src={heartsOMSIPIIblurImage}
											alt="Program eDepozyt Screenshot"
											fill
											loading='lazy'
											className="object-cover w-full h-full cursor-zoom-in rounded-lg"
											onClick={() => setModalImage(heartsOMSIPIIblurImage.src)}
										/>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
					{/* Second Project Card */}

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<div className='flex gap-4 '>
											<a href='https://github.com/Carolosso/magazynPEBUD/tree/develop' target="_blank" className='hover:text-slate-300'>
												<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
												</svg></a>
											<h3 className="text-2xl font-bold mb-4 ">Panel magazynowy (2024)</h3>
										</div>

										<p className="text-gray-400 text-justify">
											Program magazynowy przebudowano na panel webowy dla przedsiębiorstwa budowlanego, aby zwiększyć jej dostępność. Panel umożliwia dodawanie, edytowanie i usuwanie pozycji magazynowych oraz zmianę widoczności dla innych użytkowników. Dodatkowo jest możliwość wgrania zdjęcia do każdej pozycji magazynowej. Całość aplikacji jest responsywna i działa na różnych systemach operacyjnych dzięki wykorzystaniu frameworka Backpack na bazie Laravel.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-yellow-400 mb-3">Architektura Frontend - <b>Bootstrap/Tabler</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Dostosowanie interfejsu do potrzeb projektu</li>
												<li>• Możliwość wgrania zdjęcia do wpisu</li>
												<li>• Obsługa wielu tabel z przełączaniem między nimi</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Architektura Backend - <b>Laravel</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Lekka baza danych SQLite zapewniająca szybkie operacje CRUD</li>
												<li>• Pomyślna integracja z CRUD API</li>
												<li>• Odpowiednia implementacja struktury Model-CrudController</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Kluczowe cechy</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Dynamiczne przełączanie tabel bazy danych w zależności od wybranej kategorii</li>
											<li>• Dostępność online na wielu platformach</li>
											<li>• Obsługa wielu użytkowników z rolami</li>
											<li>• Filtrowanie danych</li>
											<li>• Prosty interfejs</li>
										</ul>
									</div>
								</div>
								<div className="relative bg-black/30 rounded-xl p-6">
									<div className="aspect-[1] bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
										<Image
											src={pMagazynPebudWebImage}
											alt="Program eDepozyt Screenshot"
											fill
											loading='lazy'
											className="object-cover w-full h-full cursor-zoom-in rounded-lg"
											onClick={() => setModalImage(pMagazynPebudWebImage.src)}
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
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<div className='flex gap-4 '>
											<a href='https://github.com/Carolosso/SCPI-Monitor' target='_blank' className="hover:text-slate-300">
												<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
												</svg></a>
											<a href='../assets/projekt_inzynierski_Bulanowski.pdf' target='_blank' className="hover:text-slate-300">												<svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
												<path fillRule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm-6 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H5Zm1.5 3H6v-1h.5a.5.5 0 0 1 0 1Zm4.5-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1.376A2.626 2.626 0 0 0 15 15.375v-1.75A2.626 2.626 0 0 0 12.375 11H11Zm1 5v-3h.375a.626.626 0 0 1 .625.626v1.748a.625.625 0 0 1-.626.626H12Zm5-5a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1h1a1 1 0 1 0 0-2h-2Z" clipRule="evenodd" />
											</svg>
											</a>
											<h3 className="text-2xl font-bold mb-4"> Aplikacja mobilna SCPI Monitor (2023)</h3>
										</div>
										<p className="text-gray-400 text-justify">
											Projekt inżynierski którego celem było stworzenie aplikacji umożliwiającej nawiązywanie połączenia i komunikację z urządzeniami pomiarowymi firmy Keysight w celu pobierania oraz wyświetlania aktualnie mierzonych i nastawionych wartości. Wykonano cały proces tworzenia programu: od projektu do kodu.
										</p>
									</div>
									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-yellow-400 mb-3">Architektura Frontend - <b>Flutter</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Projekt UI w Figma typu Material Design</li>
												<li>• Dynamiczne tworzenie komponentów</li>
												<li>• Odwzorowanie UI danego typu urządzenia w aplikacji</li>
												<li>• Obsługa gestów: &apos;Hold and drag&apos; do zmiany kolejności komponentów w liście, &apos;Swipe&apos; do usuwania</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Architektura Backend - <b>Flutter</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Architektura MVVM</li>
												<li>• Wykorzystanie bibliotek do komunikacji z urządzeniami SCPI</li>
												<li>• Asynchroniczne pobieranie danych z urządzeń</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Kluczowe cechy</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Wyszukiwanie urządzeń w sieci lokalnej</li>
											<li>• Optymalna wydajność</li>
											<li>• Opcja pomiaru pojedynczego, ciągłego</li>
											<li>• Obsługa wielu urządzeń jednocześnie</li>
											<li>• Rozpoznanie typu urządzenia na podstawie modelu</li>
										</ul>
									</div>
								</div>
								<div className="relative bg-black/30 rounded-xl p-6">
									<div className=" aspect-[1] bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
										<Image
											src={scpiMonitorImage}
											alt="Program eDepozyt Screenshot"
											fill
											loading='lazy'
											className="object-cover w-full h-full cursor-zoom-in rounded-lg"
											onClick={() => setModalImage(scpiMonitorImage.src)}
										/>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
					{ /* Third Project Card */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<div className='flex gap-4 '>
											<a href='https://github.com/Carolosso/Program_magazynowy-PEBUD' target='_blank' className="hover:text-slate-300">
												<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
												</svg></a>
											<h3 className="text-2xl font-bold mb-4"> Program magazynowy (2023)</h3>
										</div>
										<p className="text-gray-400 text-justify">
											Program magazynowy typu CRUD stworzono dla przedsiębiorstwa budowlanego, aby uprościć zarządzanie magazynem materiałów budowlanych. Moja pierwsza próba tworzenia oprogramowania. Aplikacja umożliwia dodawanie, edytowanie i usuwanie pozycji magazynowych oraz zmianę widoczności dla innych użytkowników. Program obsługuje logowanie użytkowników. Aplikacja pracuje z bazą danych przechowywaną online na serwerze. Program napisano w C# i wykorzystano WinForms do stworzenia interfejsu użytkownika.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-yellow-400 mb-3">Architektura Frontend - <b>WinForms</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Prosty, funkcjonalny interfejs użytkownika</li>
												<li>• Obsługa wielu tabel z dynamicznym przełączaniem między nimi dzięki DataGridView</li>
												<li>• Filtrowanie wyników danej tablicy według kryteriów</li>
												<li>• Widok administratora i użytkownika (tylko do odczytu)</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Architektura Backend - <b>C#</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Architektura klient-serwer z MySQL jako backendem do przechowywania danych</li>
												<li>• Operacje CRUD z bezpiecznymi zapytaniami parametryzowanymi</li>
												<li>• Dynamiczne wiązanie danych z DataGridView i filtrowanie w czasie rzeczywistym</li>													<li>• Logowanie aktywności użytkownika w bazie danych</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Kluczowe cechy</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Dynamiczne przełączanie tabel bazy danych w zależności od wybranej kategorii</li>									<li>• Obsługa wielu użytkowników z rolami</li>
											<li>• Filtrowanie i wizualne wyróżnianie danych (np. zerowy stan w kolorze czerwonym)</li>
											<li>• Optymalna wydajność dzięki minimalistycznemu zużyciu zasobów</li>
											<li>• Prosty interfejs z obsługą przeciągania okna i minimalizacji</li>
										</ul>
									</div>
								</div>
								<div className="relative bg-black/30 rounded-xl p-6">
									<div className=" aspect-[1] bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
										<Image
											src={pMagazynPebudImage}
											alt="Program eDepozyt Screenshot"
											fill
											loading='lazy'
											className="object-cover w-full h-full cursor-zoom-in rounded-lg"
											onClick={() => setModalImage(pMagazynPebudImage.src)}
										/>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
					{/* Fourth Project Card */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<div className='flex gap-4 '>
											<a href='https://github.com/Carolosso/Safety_Foundation-Website' target='_blank' className="hover:text-slate-300">
												<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
												</svg></a>
											<h3 className="text-2xl font-bold mb-4"> Szablon Wordpress PIBiO (2022)</h3>
										</div>
										<p className="text-gray-400 text-justify">
											Szablon Wordpress, stworzony dla strony internetowej fundacji PIBiO. W pełni responsywny i dostosowuje się do różnych urządzeń. Użytkownicy mogą łatwo dodawać treści i zarządzać stronami. Szablon zintegrowano z  wtyczką Custom Post i Field Types, co pozwala na łatwe zarządzanie różnymi rodzajami postów jak szkolenia, publikacje, wydarzenia, aktualności oraz ich polami.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-yellow-400 mb-3">Architektura Frontend - <b>Bootstrap SCSS</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Nowoczesny, responsywny design</li>
												<li>• Wykorzystanie komponentów Bootstrap do szybkiego tworzenia interfejsu</li>
												<li>• Dostosowanie stylów za pomocą SCSS</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Architektura Backend - <b>PHP Wordpress</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li >• Wykorzystanie WordPress jako CMS do zarządzania treścią</li>
												<li>• Integracja z wtyczkami Custom Post i Field Types</li>
												<li>• Możliwość łatwego dodawania nowych typów treści i pól</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Kluczowe cechy</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• W pełni responsywny design dostosowujący się do różnych urządzeń</li>
											<li>• Integracja z wtyczką obsługującą formularze kontaktowe</li>
											<li>• Integracja z wtyczkami WordPress dla rozszerzonej funkcjonalności</li>
											<li>• Wsparcie dla różnych typów treści, takich jak szkolenia, publikacje, wydarzenia i aktualności</li>
										</ul>
									</div>
								</div>
								<div className="relative bg-black/30 rounded-xl p-6">
									<div className=" aspect-[1] bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
										<Image
											src={PIBiOImage}
											alt="Program eDepozyt Screenshot"
											loading='lazy'
											fill
											sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
											className="object-cover w-full h-full cursor-zoom-in rounded-lg"
											onClick={() => setModalImage(PIBiOImage.src)}
										/>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section >
	);
}
