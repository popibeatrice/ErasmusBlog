import SliderforDays from '@/components/SliderforDays'

export default function BasicMeeting({ children, flag, title, activityPhotos }) {
	return (
		<section
			id={title === 'TP Meeting' ? 'tp' : 'vm'}
			className="mt-32 flex min-h-screen w-full flex-col items-center justify-center gap-5 px-3 lg:mt-10 lg:flex-row lg:justify-between"
		>
			<div className="flex flex-col items-center justify-center gap-10 lg:ml-[10%] lg:items-start">
				<div className="flex w-full items-center justify-center gap-2 md:gap-5 lg:justify-start ">
					<img
						src={flag.src}
						alt="Flag"
						className="w-10 rounded-[50%] shadow-lg shadow-neutral-300 md:w-12 xl:w-14"
					/>
					<h2 className="font-mont text-3xl xxs:text-4xl sm:text-5xl 2xl:text-6xl">{title}</h2>
				</div>

				<p className="max-w-lg text-center lg:text-left lg:text-lg">{children}</p>
			</div>

			<div className=" w-full max-w-5xl sm:px-5 lg:w-1/2 lg:px-12">
				<SliderforDays
					content={activityPhotos.map((photo) => {
						return {
							title: '',
							descp: '',
							img: photo,
							day: ''
						}
					})}
				/>
			</div>
		</section>
	)
}
