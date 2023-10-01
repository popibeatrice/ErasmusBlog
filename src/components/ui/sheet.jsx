import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = ({ className, ...props }) => (
	<SheetPrimitive.Portal className={cn(className)} {...props} />
)
SheetPortal.displayName = SheetPrimitive.Portal.displayName

const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cn(
			'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
			className
		)}
		{...props}
		ref={ref}
	/>
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
	'fixed z-50 overflow-y-auto gap-4 bg-background pt-[123.93px] pb-6 px-10 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
	{
		variants: {
			side: {
				top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
				bottom:
					'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
				left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
				right:
					'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-md'
			}
		},
		defaultVariants: {
			side: 'right'
		}
	}
)

const SheetContent = React.forwardRef(({ side = 'right', className, children, ...props }, ref) => (
	<SheetPortal>
		<SheetOverlay />
		<SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
			{children}
			<div className="absolute left-5 right-5 top-0 flex h-[123.93px] items-center justify-between">
				<span className="font-mont text-2xl font-light uppercase underline-offset-2 lg:text-3xl">
					Menu
				</span>
				<SheetPrimitive.Close className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
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
							d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
						/>
					</svg>
					<span className="sr-only">Close</span>
				</SheetPrimitive.Close>
			</div>
		</SheetPrimitive.Content>
	</SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({ className, ...props }) => (
	<div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
)
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({ className, ...props }) => (
	<div
		className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
		{...props}
	/>
)
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
	<SheetPrimitive.Title
		ref={ref}
		className={cn('text-lg font-semibold text-foreground', className)}
		{...props}
	/>
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (
	<SheetPrimitive.Description
		ref={ref}
		className={cn('text-sm text-muted-foreground', className)}
		{...props}
	/>
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
	Sheet,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetDescription
}
