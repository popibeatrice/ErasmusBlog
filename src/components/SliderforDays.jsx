import { useRef, useEffect } from 'react'
import { register } from 'swiper/element/bundle'

register()

function SliderforDays({ content }) {
	const swiperRef = useRef(null)

	useEffect(() => {
		const swiperContainer = swiperRef.current
		const params = {
			navigation: true,
			pagination: true,
			injectStyles: [
				`
    					.swiper-button-next,
          .swiper-button-prev {
            color: white;
						width: 15px;
          }
					.swiper-button-next{
						right:5px;
					}
					.swiper-button-prev{
						left:5px;
					}
          .swiper-pagination-bullet{
            background-color: white;
          }
      `
			]
		}

		Object.assign(swiperContainer, params)
		swiperContainer.initialize()
	}, [])

	return (
		<swiper-container ref={swiperRef} navigation="true" init="false" pagination="true">
			{content.map((item, index) => (
				<swiper-slide key={index}>
					<span className="absolute bottom-3 left-3 block text-xl font-bold  md:text-2xl lg:text-3xl">
						{item.day === '' ? '' : `Day ${item.day}`}
					</span>
					<div className="mt-[18vh] flex w-[80%] flex-col items-center justify-start gap-3 px-7 py-20 text-center sm:ml-[5%] sm:mt-[14vh] sm:items-start sm:justify-start lg:ml-[10%]">
						<h2 className="max-w-2xl px-3 text-center font-mont text-3xl sm:text-start md:text-4xl lg:text-5xl">
							{item.title}
						</h2>
						<p className="max-w-2xl text-center sm:text-start sm:text-lg lg:text-xl">
							{item.descp}
						</p>
					</div>
					<img
						className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
						src={item.img.src}
						alt="Image showcasing the mobility"
					/>
					{item.day === '' || (
						<div className="absolute inset-0 -z-10 h-full w-full bg-black opacity-50"></div>
					)}
				</swiper-slide>
			))}
		</swiper-container>
	)
}

export default SliderforDays
