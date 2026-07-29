import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCards, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'

export default function Projects() {
  const projects = [
    {
      title: 'Unsplash Image Getter',
      img: '/assests/unsplash.webp',
      desc: 'The Unsplash Image Getter is a React app that allows you to search and set stunning Unsplash images as your website’s background.',
      href: 'https://mouleshgs.github.io/unsplash-image-getter'
    },
    {
      title: 'Spotify Api App',
      img: '/assests/spotify.webp',
      desc: 'A React and TailwindCSS-based app that integrates with the Spotify API to let users log in and view playlists.',
      href: 'https://github.com/mouleshgs/spotify-api-app'
    }
  ]

  return (
    <section id="projects">
      <div className="flex justify-center items-center p-3 mb-7">
        <h1 data-aos="fade-up" data-aos-duration="2000" className="text-4xl lg:text-6xl mt-3 font-bold text-blue-500">My Recent Projects 👨‍💻</h1>
      </div>

      <div data-aos="fade-right" data-aos-duration="2700" data-aos-once="true" className="swiper mySwiper p-4">
        <Swiper
          modules={[Navigation, EffectCards, Autoplay]}
          effect="cards"
          grabCursor={true}
          navigation
          autoplay={{ delay: 5000 }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 } }}
        >
          {projects.map((p) => (
            <SwiperSlide key={p.title}>
              <div className="border rounded-lg p-5 h-full bg-white shadow-md">
                <img className="h-50 w-full object-cover rounded-md" src={p.img} alt={p.title} />
                <h2 className="mt-2 text-2xl font-semibold text-gray-700">{p.title}</h2>
                <p className="mt-2 text-slate-500">{p.desc}</p>
                <a href={p.href} target="_blank" rel="noreferrer">
                  <button className="hover:scale-105 transition-all mt-4 px-6 py-3 rounded-md bg-blue-500 shadow-lg text-slate-100 font-bold w-full">View Project</button>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
