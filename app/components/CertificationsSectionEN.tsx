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
					Others
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
											Installation, repair, configuration, and optimization of websites based on WordPress. Performing updates, creating backups, and ensuring site security. Assisting with website migration between servers and resolving plugin and theme compatibility issues. Installing and customizing themes and plugins to meet specific client requirements. Working with page builders such as Elementor and Nicepage to create responsive and visually appealing websites.
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
											Computer networks and security
										</h3>
										<p className="text-gray-400 text-justify">
											As part of my academic coursework, I completed the 20410D training in Windows Server administration, which prepares for the 70-410: Installing and Configuring Windows Server 2012 exam. The course covers installation, configuration, and management of Windows Server 2012, including server roles, Active Directory, Group Policy, and other key system components. I have experience in designing, configuring, and managing computer networks, including installation and configuration of routers, switches, and access points, as well as troubleshooting connectivity issues. I am familiar with network protocols such as TCP/IP, DHCP, DNS, and VLANs. I also have knowledge of basic network attack methods such as phishing, DDoS, SQL Injection, and XSS, as well as a basic understanding of Kali Linux.
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
											Graphic Design and Multimedia
										</h3>
										<p className="text-gray-400 text-justify">
											Graphic design including the creation of logos, visual identities, advertising, and marketing materials. Designing graphics for social media, advertising banners, and infographics. Working with tools such as Adobe Photoshop, Illustrator, Premiere Pro, and Figma to create aesthetic and functional graphic projects.
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
											IT support and computer repair
										</h3>
										<p className="text-gray-400 text-justify">
											Diagnostics and repair of desktop computers and laptops. Replacement of faulty components such as hard drives, RAM, graphics cards, and power supplies. Data recovery from technically functional storage devices. Installation of operating systems, software, and drivers. Hardware performance optimization.
										</p>
									</div>
								</div>
							</div>

						</div>
					</motion.div>
				</div>
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center pt-4">
					and much more...
				</motion.h2>
			</div>
		</section >
	);
}
