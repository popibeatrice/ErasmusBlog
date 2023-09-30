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
		<header className="mx-auto flex w-[90%] items-center justify-between py-5">
			{children}
			<Sheet>
				<SheetTrigger>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="h-10 w-10"
					>
						<path
							fillRule="evenodd"
							d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
							clipRule="evenodd"
						/>
					</svg>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Are you sure absolutely sure?</SheetTitle>
						<SheetDescription>
							This action cannot be undone. This will permanently delete your account and remove
							your data from our servers.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</header>
	)
}
