import { RevealOnScroll } from "../RevealOnScroll";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-between relative px-8"
    >
      <RevealOnScroll>
        <div className="text-left z-10 max-w-2xl ml-50">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, Angelina B. Mier
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            I’m a Computer Engineering student at Cebu Institute of Technology who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>

          <div className="flex justify-start space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Slide Image Section */}
      <div className="w-1/2 hidden md:block">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
         className="w-[600px] h-[600px] rounded-xl overflow-hidden shadow-lg"
        >
          <SwiperSlide>
            <img src="/images/me.jpg" alt="Slide 1" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/me1.jpg" alt="Slide 2" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/me2.jpg" alt="Slide 3" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/me3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/me4.jpg" alt="Slide 3" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/me5.jpg" alt="Slide 3" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/me6.jpg" alt="Slide 3" className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
