'use client';

import Image from 'next/image';

export function FeaturedIn() {
  const featuredLogos = [
    { id: 1, src: '/screenshot1.png', alt: 'Featured Company 1' },
    { id: 2, src: '/screenshot2.png', alt: 'Featured Company 2' },
    { id: 3, src: '/screenshot3.png', alt: 'Featured Company 3' },
  ];

  return (
    <div className="flex flex-col items-start space-y-2 sm:space-y-4">
      <h3 className="text-sm sm:text-lg font-semibold text-foreground/80 mb-1 sm:mb-2">
        As seen in
      </h3>
      <div className="flex flex-col space-y-2 sm:space-y-4">
        {featuredLogos.map((logo) => (
          <div
            key={logo.id}
            className="relative w-32 h-12 sm:w-56 sm:h-20 bg-white border-2 sm:border-4 border-orange-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:border-orange-500 rounded-lg overflow-hidden transform -rotate-[35deg]"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-cover"
              sizes="224px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}