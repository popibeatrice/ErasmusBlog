import SliderforDays from '@/components/SliderforDays'

export default function BasicMeeting({ children, flag, activityPhotos }) {
	return (
		<section class="flex w-full flex-col items-center justify-center gap-5 px-3 lg:flex-row lg:justify-between">
			<div class="flex flex-col items-center justify-center gap-10 lg:ml-[10%] lg:items-start">
				<div class="flex w-full items-center justify-center gap-2 md:gap-5 lg:justify-start ">
					<img
						src={flag.src}
						alt="Flag"
						class="w-10 rounded-[50%] shadow-lg shadow-neutral-300 md:w-12 xl:w-14"
					/>
					<h2 class="font-mont text-3xl xxs:text-4xl sm:text-5xl 2xl:text-6xl">TP Meeting</h2>
				</div>

				<p class="max-w-lg text-center lg:text-left lg:text-lg">{children}</p>
			</div>

			<div class=" w-full max-w-5xl sm:px-5 lg:w-1/2 lg:px-12">
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
