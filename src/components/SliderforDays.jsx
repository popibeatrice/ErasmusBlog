import { useRef, useEffect } from 'react'
import { register } from 'swiper/element/bundle'

register()

function SliderforDays({
	content = [
		{
			title: 'We got to know each other',
			descp:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, repudiandae, repellendus cum nobis fuga laborum vero animi, nulla minima adipisci suscipit iste? Officia, possimus. Laudantium dignissimos et nulla quisquam at?',
			img: 'https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/343291291_743552090895422_3830585351975685258_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=IIbE1h4gREMAX_SXgRD&_nc_ht=scontent.fotp3-1.fna&oh=00_AfB8fwl9uyVqyO53BZatf418rTMP-zb0_sUI5ZRFBQd8uA&oe=6521B50A'
		},
		{
			title: 'We visited the nature around us',
			descp:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, repudiandae, repellendus cum nobis fuga laborum vero animi, nulla minima adipisci suscipit iste? Officia, possimus. Laudantium dignissimos et nulla quisquam at?',
			img: 'https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/349191672_782900516837691_7599315026319501106_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=6f_lYhHIo1MAX-TJ87s&_nc_ht=scontent.fotp3-4.fna&oh=00_AfCeH3yJ_Kqa127qW_V1BlUDq-t0c7j8nzKOMiyEAI6shA&oe=65203414'
		}
	]
}) {
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
					<span className="absolute bottom-3 left-3 block text-xl font-bold  md:text-2xl lg:text-3xl">{`Day ${
						index + 1
					}`}</span>
					<div className="mt-[18vh] flex w-full flex-col items-center justify-center gap-3 px-7 py-20 text-center sm:ml-[20%] sm:mt-[14vh] sm:items-start sm:justify-start">
						<h2 className="text-center font-mont text-3xl sm:text-start md:text-4xl lg:text-5xl">
							{item.title}
						</h2>
						<p className="max-w-lg text-center sm:text-start sm:text-lg lg:text-xl">{item.descp}</p>
					</div>
					<img
						className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
						src={item.img}
						alt="Image showcasing the mobility"
					/>
					<div className="absolute inset-0 -z-10 h-full w-full bg-black opacity-50"></div>
				</swiper-slide>
			))}
		</swiper-container>
	)
}

export default SliderforDays
