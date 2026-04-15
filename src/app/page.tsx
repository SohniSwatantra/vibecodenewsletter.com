'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export default function HomePage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const script = document.createElement('script');
    script.src = 'https://app.rapidforms.co/embed/index.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [open]);

  const mediaLogos = [
    { id: 1, src: '/screenshot1.png', alt: 'Featured publication 1' },
    { id: 2, src: '/screenshot2.png', alt: 'Featured publication 2' },
    { id: 3, src: '/screenshot3.png', alt: 'Featured publication 3' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Sponsored By Banner */}
      <div className="w-full border-b border-border bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-center gap-8 sm:gap-12">
          <span className="text-sm uppercase tracking-widest text-muted-foreground whitespace-nowrap">
            Sponsored by
          </span>
          <div className="flex items-center gap-8 sm:gap-12">
            <a href="https://nosana.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/sponsors/nosana.png"
                alt="Nosana"
                width={120}
                height={36}
                className="h-8 w-auto object-contain brightness-90 hover:brightness-110 transition"
              />
            </a>
            <a href="https://www.nowa.dev/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/sponsors/nowa.png"
                alt="Nowa"
                width={100}
                height={36}
                className="h-8 w-auto object-contain hover:brightness-110 transition"
              />
            </a>
            <a href="https://vibecodefixers.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/sponsors/vibecodefixers.png"
                alt="VibeCodeFixers"
                width={120}
                height={36}
                className="h-8 w-auto object-contain hover:brightness-110 transition"
              />
            </a>
            <a href="https://tag.space/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/sponsors/tag.png"
                alt="TAG"
                width={100}
                height={36}
                className="h-8 w-auto object-contain brightness-90 hover:brightness-110 transition"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 -mt-16">
      <div className="w-full text-center space-y-10 flex flex-col items-center">
        {/* Logo / Title */}
        <div className="space-y-3">
          <h1 className="font-mono text-5xl sm:text-6xl font-bold text-foreground tracking-tight whitespace-nowrap">
            Vibe<span className="text-lime-500">Coding</span> Newsletter
          </h1>
        </div>

        {/* Copy */}
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
          Subscribe to get the latest news on the vibe coding ecosystem.
          Newest tools, VibeCoding tutorials, courses, and the latest
          hackathons online and offline.
        </p>

        {/* Subscribe Button */}
        <button
          onClick={() => setOpen(true)}
          className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Subscribe
        </button>

        {/* As Seen In */}
        <div className="pt-8 space-y-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            As seen in
          </p>
          <div className="flex items-center justify-center gap-6">
            {mediaLogos.map((logo) => (
              <div
                key={logo.id}
                className="relative w-28 h-10 rounded border border-border overflow-hidden bg-white"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      </div>

      {/* Subscribe Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-mono">
              Vibe<span className="text-lime-500">Coding</span> Newsletter
            </DialogTitle>
            <DialogDescription>
              Enter your email to subscribe.
            </DialogDescription>
          </DialogHeader>
          <iframe
            loading="lazy"
            id="rapidforms-iframe"
            src="https://app.rapidforms.co/embed/9d2f08"
            width="100%"
            height="485"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
