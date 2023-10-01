import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import romaniaFlag from '../assets/romania.png'
import croatiaFlag from '../assets/croatia.png'
import turkFlag from '../assets/turkey.png'
import polandFlag from '../assets/poland.png'
import irelandFlag from '../assets/ireland.png'

export default function Sidebar({ children }) {
	return (
		<header className="nav-shadow fixed left-0 right-0 top-0 z-10 mx-auto flex items-center justify-between bg-white px-[5vw] py-3 sm:px-[2.5vw]">
			{children}
			<Sheet>
				<SheetTrigger className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-8 w-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
						/>
					</svg>
					<span className="sr-only">Open</span>
				</SheetTrigger>
				<SheetContent>
					<nav className="mt-5 flex w-full flex-col items-start justify-start gap-10">
						<SidebarSection title="LTT Activities">
							<Country name="Croatia" flag={croatiaFlag.src} />
							<Country name="Turkey" flag={turkFlag.src} />
							<Country name="Poland" flag={polandFlag.src} />
						</SidebarSection>
						<SidebarSection title="TP Meetings">
							<Country name="Ireland" flag={irelandFlag.src} />
							<Country name="Romania" flag={romaniaFlag.src} />
						</SidebarSection>
						<SidebarSection title="Virtual Mobilities">
							<Country name="Romania" flag={romaniaFlag.src} />
							<Country name="Turkey" flag={turkFlag.src} />
						</SidebarSection>
					</nav>
				</SheetContent>
			</Sheet>
		</header>
	)
}

function SidebarSection({ title, children }) {
	return (
		<div className="flex flex-col items-start justify-start gap-6">
			<span className="font-mont text-xl font-semibold lg:text-2xl">{title}</span>
			<ul className="ml-1 flex flex-col items-start justify-start gap-5">{children}</ul>
		</div>
	)
}

function Country({ name, flag }) {
	return (
		<li>
			<a
				href=""
				className="flex items-center  justify-start gap-4 rounded-sm ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
			>
				<img className="w-8" src={flag} alt={`${name} flag`} decoding="async" loading="lazy" />
				<span className="text-lg lg:text-xl">{name}</span>
			</a>
		</li>
	)
}
