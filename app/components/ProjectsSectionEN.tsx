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
					Projects
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
												OMSIPII (testing phase - WIP)
											</h3>
										</div>
										<p className="text-gray-400 text-justify">
											A mobile application created for the Knights of St. John Paul II to support daily prayer, formation, and community life. With a simple and elegant interface, it provides quick access to prayers, formation materials, and current spiritual content.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-yellow-400 mb-3">Frontend Architecture - <b>Flutter</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Dynamic and responsive user interface for intuitive operation</li>
												<li>• Simple operation, accessibility</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Architecture - <b>Flutter, JSON</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Offline functionality with full access to local data</li>
												<li>• Data updates from JSON file</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key features</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Daily and occasional prayers</li>
											<li>• Clear search and navigation</li>
											<li>• Personalization and accessibility</li>
											<li>• Speed</li>
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
												eDepozyt Program (WIP)
											</h3>
										</div>
										<p className="text-gray-400 text-justify">
											eDepozyt is a desktop CRUD application that currently streamlines the management of evidence registers in a government institution. The program allows users to generate individual and batch reports in CSV and PDF formats. Users can easily add, edit, and delete entries, as well as search the register. The application is fully responsive and works across different operating systems thanks to the Electron framework. The user interface is intuitive, making navigation and data management straightforward. The program is under active development, with planned features such as integration with external systems and enhanced data security.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-yellow-400 mb-3">Frontend Architecture - <b>React.js</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Dynamic and responsive user interface for intuitive operation</li>
												<li>• Advanced filtering with result highlighting</li>
												<li>• Component-based structure</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Architecture - <b>Electron</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Lightweight SQLite database for fast CRUD operations</li>
												<li>• Secure inter-process communication using Context Bridge</li>
												<li>• Offline functionality with full access to local data</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key features</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Offline work with data synchronization in a desktop environment</li>
											<li>• Multi-user support with roles</li>
											<li>• Export reports to CSV for easy analysis and PDF for printing</li>
											<li>• Optimal performance thanks to minimal resource usage</li>
											<li>• License control system with validity verification</li>
											<li>• Modular architecture allowing customization for different industries</li>
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
											<h3 className="text-2xl font-bold mb-4"> Textronic RFID tag with ADC (2025)</h3>
										</div>
										<p className="text-gray-400 text-justify">
											This master&apos;s thesis aimed to design and develop a textile RFID tag integrated with a capacitive sensor, operating in the HF band and compliant with the NFC standard. A prototype of an embroidered antenna and sensor structures was created and connected to the RF430FRL152H chip. Although communication with a mobile device was successful, it was not possible to clearly register changes in capacitance. The developed system provides a foundation for further work on wearable textile sensors.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Software</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• C program handling custom commands via NFC interface</li>
												<li>• Microcontroller programmed &apos;Over the Air&apos; using the &apos;GoodV&apos; repository</li>
												<li>• Mobile app for initiating measurements and reading ADC input voltage values</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Hardware</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• RF430RFL152H as the microcontroller</li>
												<li>• PCB design with connectors for threading conductive yarn on FLEX substrate</li>
												<li>• Embroidered antenna design using conductive yarn with appropriate inductance (no tuning capacitors required)</li>
												<li>• Embroidered capacitive sensor designs (comb, spiral, mesh)</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key features</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Use of RFID and NFC technology for communication</li>
											<li>• Batteryless system performing basic measurement</li>
											<li>• Integration with a mobile app for data reading</li>
											<li>• Potential for further development and IoT integration</li>
											<li>• Use of conductive thread in embroidery for creating antennas and sensors</li>
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
											<h3 className="text-2xl font-bold mb-4">Database for charity (2024)</h3>
										</div>
										<p className="text-gray-400 text-justify">
											The Backpack panel was customized for the needs of a charity organization. The panel allows adding, editing, and deleting registry entries. Each entry can have associated payments and attachments. It is possible to upload a photo for each entry. A CRON job was created to update the registry daily.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-yellow-400 mb-3">Frontend Architecture - <b>Bootstrap/Tabler</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Interface tailored to project requirements</li>
												<li>• Ability to upload photos to entries, payments, and attachments</li>
												<li>• Support for multiple tables with switching between them</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Architecture - <b>Laravel</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Relational database structure</li>
												<li>• Successful integration with CRUD API, Model-CrudController structure</li>
												<li>• CRON command for updating days elapsed</li>
											</ul>
										</div>
									</div>
									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key features</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Mandatory 2FA authentication (Auth App)</li>
											<li>• Online availability on multiple platforms</li>
											<li>• Support for multiple users requiring approval, with roles and permissions</li>
											<li>• Data filtering and export</li>
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
											<h3 className="text-2xl font-bold mb-4 ">Warehouse Panel (2024)</h3>
										</div>

										<p className="text-gray-400 text-justify">
											The warehouse management program was rebuilt as a web panel for a construction company to increase its accessibility. The panel allows adding, editing, and deleting warehouse items, as well as changing their visibility for other users. Additionally, it is possible to upload a photo for each warehouse item. The entire application is responsive and works across different operating systems thanks to the Backpack framework based on Laravel.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-yellow-400 mb-3">Frontend Architecture - <b>Bootstrap/Tabler</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Interface tailored to project requirements</li>
												<li>• Ability to upload a photo to an entry</li>
												<li>• Support for multiple tables with switching between them</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Architecture - <b>Laravel</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Lightweight SQLite database for fast CRUD operations</li>
												<li>• Successful integration with CRUD API</li>
												<li>• Proper implementation of Model-CrudController structure</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key features</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Dynamic switching of database tables depending on the selected category</li>
											<li>• Online availability on multiple platforms</li>
											<li>• Multi-user support with roles</li>
											<li>• Data filtering</li>
											<li>• Simple interface</li>
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
											<h3 className="text-2xl font-bold mb-4"> SCPI Monitor Mobile App (2023)</h3>
										</div>
										<p className="text-gray-400 text-justify">
											Engineering project aimed at creating an application enabling connection and communication with Keysight measurement devices to retrieve and display currently measured and set values. The entire software development process was completed: from design to code.
										</p>
									</div>
									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-yellow-400 mb-3">Frontend Architecture - <b>Flutter</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• UI design in Figma using Material Design</li>
												<li>• Dynamic component creation</li>
												<li>• Device-specific UI mapping in the app</li>
												<li>• Gesture support: &apos;Hold and drag&apos; to reorder list items, &apos;Swipe&apos; to delete</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Architecture - <b>Flutter</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• MVVM architecture</li>
												<li>• Use of libraries for SCPI device communication</li>
												<li>• Asynchronous data retrieval from devices</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key features</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Device discovery in the local network</li>
											<li>• Optimized performance</li>
											<li>• Single and continuous measurement options</li>
											<li>• Support for multiple devices simultaneously</li>
											<li>• Device type recognition based on model</li>
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
											<h3 className="text-2xl font-bold mb-4"> Warehouse Management Program (2023)</h3>
										</div>
										<p className="text-gray-400 text-justify">
											A CRUD warehouse management program created for a construction company to simplify the management of building materials inventory. My first attempt at software development. The application allows users to add, edit, and delete warehouse items, as well as change their visibility for other users. The program supports user login. The application works with a database stored online on a server. The program was written in C# and uses WinForms to create the user interface.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-yellow-400 mb-3">Frontend Architecture - <b>WinForms</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Simple, functional user interface</li>
												<li>• Support for multiple tables with dynamic switching between them using DataGridView</li>
												<li>• Filtering of table results by criteria</li>
												<li>• Administrator and user views (read-only for users)</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Architecture - <b>C#</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Client-server architecture with MySQL as the backend for data storage</li>
												<li>• CRUD operations with secure parameterized queries</li>
												<li>• Dynamic data binding with DataGridView and real-time filtering</li>
												<li>• Logging of user activity in the database</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key features</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Dynamic switching of database tables depending on the selected category</li>
											<li>• Multi-user support with roles</li>
											<li>• Data filtering and visual highlighting (e.g., zero stock in red)</li>
											<li>• Optimal performance thanks to minimal resource usage</li>
											<li>• Simple interface with window drag and minimize support</li>
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
											<h3 className="text-2xl font-bold mb-4"> PIBiO Wordpress Template (2022)</h3>
										</div>
										<p className="text-gray-400 text-justify">
											A Wordpress template created for the PIBiO Foundation website. Fully responsive and adapts to various devices. Users can easily add content and manage pages. The template is integrated with the Custom Post and Field Types plugin, allowing easy management of different post types such as trainings, publications, events, news, and their fields.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-yellow-400 mb-3">Frontend Architecture - <b>Bootstrap SCSS</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Modern, responsive design</li>
												<li>• Use of Bootstrap components for rapid interface development</li>
												<li>• Style customization with SCSS</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Architecture - <b>PHP Wordpress</b></h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Use of WordPress as a CMS for content management</li>
												<li>• Integration with Custom Post and Field Types plugins</li>
												<li>• Easy addition of new content types and fields</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key features</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Fully responsive design adapting to different devices</li>
											<li>• Integration with a plugin supporting contact forms</li>
											<li>• Integration with WordPress plugins for extended functionality</li>
											<li>• Support for various content types such as trainings, publications, events, and news</li>
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
