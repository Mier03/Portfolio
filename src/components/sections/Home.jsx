import React, { useState } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { File } from 'lucide-react'; // Import the File icon

export const Home = () => {
  const [resumeFile] = useState('/files/Angelina Mier_Resume.pdf'); // Store resume file path

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between relative px-4 md:px-8 pt-16 sm:pt-20 md:pt-24"
    >
      <RevealOnScroll>
        <div className="text-left z-10 max-w-2xl w-full md:ml-50 mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi👋, I'm Angelina Mier
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-8"  style={{ textAlign: 'justify' }}>
A Computer Engineering student at Cebu Institute of Technology, driven by a strong passion for building purposeful and scalable solutions that address real-world business needs. I focus on developing clean, efficient web applications that go beyond functionality—delivering seamless performance and intuitive user experiences. Guided by integrity, continuous learning, and innovation, I strive to contribute to dynamic development teams and create impactful software and hardware projects that solve meaningful problems.        <div className="flex justify-start gap-2 sm:space-x-4 flex-nowrap">
  <a
    href={resumeFile}
    download="/files/Angelina Mier_Resume.pdf"
    className="bg-gradient-to-r from-black-600 to-blue-500 text-white py-1.5 px-3 sm:py-3 sm:px-4 rounded-3xl font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center gap-2 whitespace-nowrap text-sm sm:text-sm"
    target="_blank"
    rel="noopener noreferrer"
  >
    <File className="w-4 h-4 sm:w-5 sm:h-5" />
    <span>Download My Resume</span>
  </a>
  <a
    href="#contact"
    className="border border-blue-500/50 text-white py-1.5 px-3 sm:py-3 sm:px-4 rounded-3xl font-medium transition duration-200 hover:bg-gradient-to-r from-black-600 to-blue-500  hover:-translate-y-0.5 hover:text-white active:bg-blue-500 active:text-white whitespace-nowrap text-sm sm:text-sm"
  >
    Contact Me
  </a>
</div>
        </div>
      </RevealOnScroll>

      {/* Slide Image Section */}
      <div className="w-full md:w-1/2">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          className="w-full max-w-[400px] h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg mx-auto"
        >
          <SwiperSlide>
            <img src="/images/me.jpg" alt="Slide 1" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/Angelina Mier.jpg" alt="Slide 1" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/me1.jpg" alt="Slide 2" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/me2.jpg" alt="Slide 3" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/me3.jpg" alt="Slide 4" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/me4.jpg" alt="Slide 5" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/me5.jpg" alt="Slide 6" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/me6.jpg" alt="Slide 7" className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

