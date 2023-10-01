import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import RacovitaPhoto from '../assets/emailRacovita.jpg'

export default function LiceeTab({
	oras1,
	oras2,
	liceu1,
	liceu2,
	description1,
	description2,
	link1,
	link2,
	logo1,
	logo2,
	photo1,
	photo2
}) {
	return (
		<Tabs defaultValue="account" className="flex w-full flex-col items-center justify-center">
			<TabsList className="h-12">
				<TabsTrigger value="account" className="text-lg">
					{oras1}
				</TabsTrigger>
				<TabsTrigger value="password" className="text-lg">
					{oras2}
				</TabsTrigger>
			</TabsList>
			<div className=" flex w-[85%] max-w-[600px] items-center justify-center p-5 py-12 shadow-2xl lg:max-w-none">
				<Content
					className="w-full"
					value="account"
					logo={logo1}
					liceu={liceu1}
					link={link1}
					description={description1}
					photo={photo1}
				/>
				<Content
					className="w-full"
					value="password"
					logo={logo2}
					liceu={liceu2}
					link={link2}
					description={description2}
					photo={photo2}
				/>
			</div>
		</Tabs>
	)
}

function Content({ value, logo, liceu, link, description, photo }) {
	return (
		<TabsContent value={value} className="flex h-full flex-col items-center gap-8 lg:flex-row">
			<div className="m-3 flex flex-col gap-10 lg:pb-16">
				<div className="flex w-full items-center justify-start self-start">
					<img src={logo} alt="blobu" className="h-16 w-16 self-start" />
				</div>

				<div className="flex flex-col justify-center gap-5">
					<h2 className="font-mont text-2xl">{liceu}</h2>
					<div class="flex flex-col items-start justify-center gap-3">
						<p className="ml-2 max-w-sm">{description}</p>
						<p className="text-gray-500">
							Visit HighSchool's website{' '}
							<a
								className="font-bold text-textOrange duration-300 hover:border-b-[1.5px] hover:border-textOrange"
								target="_blank"
								href={link}
							>
								here
							</a>{' '}
							.
						</p>
					</div>
				</div>
			</div>
			<div
				style={{ backgroundImage: `url(${photo})` }}
				className="h-[200px] w-full rounded bg-cover bg-center"
			></div>
			{/* <img className="w-[100%] max-w-sm rounded" src={photo} alt="aleluia" /> */}
		</TabsContent>
	)
}
