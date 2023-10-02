import { useRef } from 'react'
import { register } from 'swiper/element/bundle'

register()

function SliderforDays({
	content = [
		{
			title: 'Caca in clasa cu colegii',
			descp:
				'Am facut cunostinta si caca unu cu altu si ne o fost lene si avem mare bors in noi etc.'
		},
		{ title: 'pipi', descp: 'un pipi si mai mare' }
	]
}) {
	const swiperElRef = useRef(null)

	return (
		<swiper-container ref={swiperElRef} navigation="true" pagination="true">
			{content.map((item, index) => (
				<swiper-slide key={index}>
					<span className="block text-center text-2xl uppercase md:text-3xl lg:text-4xl">{`Day ${
						index + 1
					}`}</span>
					<div className="flex w-full flex-col items-start justify-start gap-3">
						<h2 className="text-center font-mont text-2xl md:text-3xl lg:text-4xl">{item.title}</h2>
						<p className="max-w-xl sm:text-lg lg:text-xl">{item.descp}</p>
					</div>
				</swiper-slide>
			))}
		</swiper-container>
	)
}

export default SliderforDays
