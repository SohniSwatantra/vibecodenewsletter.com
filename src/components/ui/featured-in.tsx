'use client';

import Image from 'next/image';

export function FeaturedIn() {
  const featuredLogos = [
    { id: 1, src: '/screenshot1.png', alt: 'Featured Company 1' },
    { id: 2, src: '/screenshot2.png', alt: 'Featured Company 2' },
    { id: 3, src: '/screenshot3.png', alt: 'Featured Company 3' },
  ];

  return (
    <div className="flex flex-col items-start space-y-4">
      <h3 className="text-sm font-medium text-foreground/70 mb-1">
        As seen in
      </h3>
      <div className="flex flex-col space-y-2">
        {featuredLogos.map((logo) => (
          <div
            key={logo.id}
            className="relative w-32 h-12 bg-white border-2 border-orange-400 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-orange-500 rounded-md overflow-hidden transform -rotate-[35deg]"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}