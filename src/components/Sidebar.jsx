import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'

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
					<SheetHeader>
						<SheetTitle>Are you sure absolutely sure?</SheetTitle>
						<SheetDescription>
							This action cannot be undone. This will permanently delete your account and remove
							your data from our servers. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Numquam quidem eius, odio rerum perferendis libero dolorum, unde illum soluta officia
							praesentium vel fugiat? Impedit ducimus consequatur rerum odit sapiente voluptates!
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</header>
	)
}
