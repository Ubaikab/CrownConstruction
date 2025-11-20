import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Check, Clock } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import AnimatedText from '../ui/AnimatedText';
import Herovid from '@assets/videos/Hero-Sections/Hero-video.mp4';


const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={Herovid}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>

      {/* CONTENT */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-12 items-center">


          {/* LEFT TEXT */}
          <div>
            <ScrollReveal duration={0.8}>
              <div className="flex items-center gap-2 bg-construction-yellow bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
                <Shield className="w-4 h-4" />
                <span>Premium Construction Services</span>
              </div>
            </ScrollReveal>

           <ScrollReveal delay={100} duration={0.9}>
  <h1 className="heading-xl mb-6 leading-tight text-white max-w-5xl lg:max-w-6xl">
    Building Excellence & Creating Landmark 
  </h1>
</ScrollReveal>


            <ScrollReveal delay={300} duration={1}>
              <p className="subtitle mb-8 text-gray-100 max-w-xl">
                We transform visions into stunning structures with precision engineering and innovative design.
                Quality construction for every project, backed by 25+ years of excellence in the industry.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { icon: <Check className="text-green-400" />, text: "Premium Quality Materials" },
                  { icon: <Shield className="text-blue-400" />, text: "10-Year Structural Warranty" },
                  { icon: <Clock className="text-yellow-400" />, text: "On-time Project Delivery" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm shadow-md flex items-center justify-center">
                      {item.icon}
                    </div>
                    <p className="font-medium text-white">{item.text}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="flex flex-wrap gap-5">
                <Link to="/contact" className="btn-primary flex items-center hover:scale-105 transition-transform duration-300 shadow-lg">
                  Get Free Quote <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/projects" className="btn-outline hover:scale-105 transition-transform duration-300 text-white border-white hover:bg-white/20">
                  View Our Projects
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="opacity-50">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,32L48,42.7C96,53,192,75,288,69.3C384,64,480,32,576,21.3C672,11,768,21,864,37.3C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
