"use client";

import Link from "next/link";

export default function TopBar() {
	return (
		<div className="hidden lg:block w-full bg-blue-50 border-b border-blue-100">
			<div className="container flex flex-row items-center justify-between gap-2 py-2">
				<div className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
					<span className="inline-flex items-center gap-2">
						<svg className="w-4 h-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.879a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3z" clipRule="evenodd" />
						</svg>
						Professionele schoonmaak voor bedrijven en particulieren
					</span>
					<span className="text-gray-300">|</span>
					<span className="inline-flex items-center gap-2">
						<svg className="w-4 h-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fillRule="evenodd" d="M3 3a1 1 0 011-1h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V17a1 1 0 01-1 1h-1C9.716 21 3 14.284 3 6V5z" clipRule="evenodd" />
						</svg>
						Snel beschikbaar en flexibel ingepland
					</span>
					<span className="text-gray-300">|</span>
					<span className="inline-flex items-center gap-2">
						<svg className="w-4 h-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path d="M10.94 2.34a1.5 1.5 0 00-1.88 0l-6 4.8A1.5 1.5 0 002.5 9h15a1.5 1.5 0 001.44-1.86l-6-4.8z" />
							<path d="M18 9.5V15a2 2 0 01-2 2h-3v-4H7v4H4a2 2 0 01-2-2V9.5" />
						</svg>
						Verzekerd, betrouwbaar en milieuvriendelijk
					</span>
				</div>
				<div className="flex items-center gap-3">
					<a href="tel:+31638935230" className="text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors">
						Bel: 06 38935230
					</a>
					<Link href="/contact" className="inline-flex items-center rounded-md px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition"
						style={{ background: "var(--gradient-primary)" }}>
						Gratis offerte
					</Link>
				</div>
			</div>
		</div>
	);
}


