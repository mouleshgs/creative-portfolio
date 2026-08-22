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
    },
    {
      title: 'Advice Generator',
      img: '/assests/advice.webp',
      desc: 'A React and Tailwind CSS application that provides random pieces of advice using the Advice Slip API.',
      href: 'https://mouleshgs.github.io/advice-generator/'
    },
    {
      title: 'FeelSync: Music Recommender',
      img: '/assests/feelsync.webp',
      desc: 'Real-time Tamil song recommender using voice input, emotion detection with NLP, and Spotify integration.',
      href: 'https://github.com/mouleshgs/feelSync'
    },
    {
      title: 'YOLO Dense Captioning',
      img: '/assests/dense_caption.webp',
      desc: 'A real-time image captioning project combining YOLOv8, GIT image captioning, and LLaMA 3 enhancement.',
      href: 'https://github.com/mouleshgs/yolo-dense-captioning'
    },
    {
      title: 'Movie Recommender',
      img: '/assests/movie.webp',
      desc: 'A responsive movie recommender using TF-IDF and cosine similarity with React and Flask.',
      href: 'https://github.com/mouleshgs'
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
          initialSlide={0}
          autoplay={{ delay: 5000 }}
          slidesPerView={1}
          breakpoints={{
            320: { cardsEffect: { rotate: true, perSlideOffset: 6, perSlideRotate: 3 } },
            768: { cardsEffect: { rotate: true, perSlideOffset: 15, perSlideRotate: 8 } },
            1024: { cardsEffect: { rotate: true, perSlideOffset: 18, perSlideRotate: 10 } }
          }}
        >
          {projects.map((p) => (
            <SwiperSlide key={p.title}>
              <div className="border rounded-lg p-5 h-full bg-white shadow-md">
                <img className="h-50 w-full object-cover rounded-md" src={p.img} alt={p.title} />
                <h2 className="mt-2 text-2xl font-semibold text-gray-700">{p.title}</h2>
                <p className="mt-2 text-slate-500">{p.desc}</p>
                <a href={p.href} target="_blank" rel="noreferrer">
                  <button className="hover:scale-105 transition-all mt-4 px-6 py-3 rounded-md bg-blue-500 shadow-lg text-slate-100 font-bold w-full">{p.title === 'Advice Generator' ? 'Live Demo' : p.title === 'Unsplash Image Getter' ? 'Live Demo' : 'View Project'}</button>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <a href="https://github.com/mouleshgs/" target="_blank" rel="noreferrer"><button data-aos="fade-up" data-aos-duration="1400" className="px-6 py-3 bg-blue-500 text-slate-100 font-bold rounded-md mx-auto block mt-5 hover:scale-105 transition-all" type="button">View All Projects</button></a>
    </section>
  )
}
