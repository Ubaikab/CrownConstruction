import React, { useState } from 'react';
import { Star, StarHalf, MessageSquare, Play } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import nuralamV2 from '@assets/videos/nuralam/Nuralam-v2.mp4';
import logo from '@assets/images/projects/logocrown.jpg';


interface TestimonialProps {
  name?: string;
  role?: string;
  comment?: string;
  rating?: number;
  videoSrc?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  role,
  comment,
  rating,
  videoSrc
}) => {

  const [isPlaying, setIsPlaying] = useState(false);

  const renderRating = () => {
    if (!rating) return null;
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} size={18} className="text-yellow-400 fill-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half-star" size={18} className="text-yellow-400 fill-yellow-400" />
      );
    }

    return stars;
  };

  // ⭐ VIDEO TESTIMONIAL CARD
if (videoSrc) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">

      {/* Title */}
      <div className="mb-4">
        <h4 className="font-semibold text-lg">Mr Nur Alam</h4>
        <p className="text-gray-600 text-sm">Homeowner</p>
      </div>

      {/* Video Poster / Video */}
      <div className="relative w-full h-64 rounded-lg overflow-hidden">

        {!isPlaying ? (
          <>
            {/* Use logo as poster */}
            <img
              src={logo}
              alt="Nur Alam Testimonial Poster"
              className="w-full h-full object-cover"
            />

            {/* Play Button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/40"
            >
              <Play size={48} className="text-white" />
            </button>
          </>
        ) : (
          <video
            src={videoSrc}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}


  // ⭐ NORMAL TEXT TESTIMONIAL CARD
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {renderRating()}
      </div>

      <div className="relative flex-grow">
        <MessageSquare size={40} className="text-gray-100 absolute top-0 left-0" />
        <p className="text-gray-700 relative z-10 pl-6 italic">{comment}</p>
      </div>
    </div>
  );
};

// ⭐ MAIN TESTIMONIAL LIST
const Testimonials: React.FC = () => {

  const testimonials = [
    {
      name: "Mr Zabi",
      role: "Homeowner",
      comment:
        "Crown Construction transformed our dream home into reality. Their attention to detail and commitment to quality exceeded our expectations.",
      rating: 5
    },
    {
      videoSrc: nuralamV2 // ⭐ THIS uses poster → click to play
    },
    {
      name: "Mr Saha Dev",
      role: "Homeowner",
      comment:
        "It's rare to find a company that combines such skill, integrity, and customer care. Crown Construction does it all.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with Crown Construction.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100} duration={0.8}>
              <TestimonialCard {...testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
