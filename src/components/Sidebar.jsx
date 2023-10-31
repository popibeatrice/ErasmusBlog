import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import romaniaFlag from '../assets/romania.png'
import croatiaFlag from '../assets/croatia.png'
import turkFlag from '../assets/turkey.png'
import polandFlag from '../assets/poland.png'
import irelandFlag from '../assets/ireland.png'

export default function Sidebar({ children }) {
	return (
		<header className="fixed left-0 right-0 top-0 z-10 flex h-[80px] items-center justify-between bg-white bg-opacity-80 px-5 py-3 backdrop-blur-[2px]">
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
							<Country name="Türkiye" route="/türkiye#ltt" flag={turkFlag.src} />
							<Country name="Poland" route="/poland#ltt" flag={polandFlag.src} />
							<Country name="Croatia" route="/croatia#ltt" flag={croatiaFlag.src} />
							<Country name="Romania" route="/romania#ltt" flag={romaniaFlag.src} />
						</SidebarSection>
						<SidebarSection title="TP Meetings">
							<Country name="Romania" route="/romania#tp" flag={romaniaFlag.src} />
							<Country name="Ireland" route="/ireland#tp" flag={irelandFlag.src} />
							<Country name="Poland" route="/poland#tp" flag={polandFlag.src} />
						</SidebarSection>
						<SidebarSection title="Virtual Mobilities">
							<Country name="Türkiye" route="/türkiye#vm" flag={turkFlag.src} />
							<Country name="Romania" route="/romania#vm" flag={romaniaFlag.src} />
						</SidebarSection>
						<SidebarSection title="Media Content">
							<li>
								<a
									href="/photos"
									className="rounded-sm underline underline-offset-4 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
								>
									<span className="text-lg lg:text-xl">Photos</span>
								</a>
							</li>
							<li>
								<a
									href="/videos"
									className="rounded-sm underline underline-offset-4 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
								>
									<span className="text-lg lg:text-xl">Videos</span>
								</a>
							</li>
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

function Country({ name, route, flag }) {
	return (
		<li>
			<a
				href={route}
				className="flex items-center  justify-start gap-4 rounded-sm ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
			>
				<img className="w-8" src={flag} alt={`${name} flag`} decoding="async" loading="lazy" />
				<span className="text-lg lg:text-xl">{name}</span>
			</a>
		</li>
	)
}
