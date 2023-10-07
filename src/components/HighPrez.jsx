import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function HighPrez({ schools, country = 'Romania' }) {
	return (
		<section className="heighty mx-[5%] mb-20 flex flex-col items-center justify-start gap-10 sm:mx-[10%]">
			<h2 className="text-center font-mont text-3xl sm:text-5xl xl:text-6xl">
				Partner Schools from <br /> <span className="font-bold">{country}</span>
			</h2>
			<Tabs
				defaultValue={schools[0].city}
				className="flex w-full flex-col items-center justify-center"
			>
				<TabsList className="h-auto p-2">
					{schools.map((school) => (
						<TabsTrigger
							className="text-lg font-bold lg:text-xl"
							key={school.name}
							value={school.city}
						>
							{school.city}
						</TabsTrigger>
					))}
				</TabsList>
				{schools.map((school) => (
					<TabsContent className=" " key={school.name} value={school.city}>
						<article className="mx-auto mt-5 flex w-[95vw] max-w-5xl flex-col items-start justify-start gap-8 rounded-lg border px-3 py-4 shadow-lg sm:px-5 sm:py-7 lg:px-12 lg:py-14">
							<div className="flex flex-col items-start justify-start gap-4">
								<div className="flex flex-col items-center justify-center gap-3 self-center min-[375px]:flex-row min-[375px]:self-start">
									<img
										src={school.logo.src}
										decoding="async"
										loading="lazy"
										alt={`${school.name} logo`}
										className="w-14"
									/>
									<h3 className="text-center font-mont text-xl min-[375px]:text-start sm:text-2xl lg:text-3xl">
										{school.name}
									</h3>
								</div>
								<p className="max-w-4xl lg:text-lg">{school.descp}</p>
								<span className="max-w-lg lg:text-lg">
									Explore further details on the{' '}
									<a
										className="font-bold text-textBlue underline underline-offset-4 transition-all duration-300 hover:font-extrabold"
										target="_blank"
										href={school.link}
									>
										school's website
									</a>
									.
								</span>
							</div>
							<img
								src={school.img.src}
								loading="eager"
								className="h-[450px] w-full self-center rounded-xl object-cover object-center"
								decoding="async"
								alt={school.name}
							/>
						</article>
					</TabsContent>
				))}
			</Tabs>
		</section>
	)
}

export default HighPrez
