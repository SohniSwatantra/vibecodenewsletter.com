'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.rapidforms.co/embed/index.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Featured In Banner */}
      <div className="w-full border-b border-border bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-center gap-3 text-sm">
          <span className="inline-flex items-center rounded-full bg-lime-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-black">
            Featured In
          </span>
          <span className="font-bold text-white">404 MEDIA</span>
          <span className="text-muted-foreground hidden sm:inline">
            &ldquo;The Software Engineers Paid to Fix Vibe Coded Messes&rdquo;
          </span>
          <a
            href="https://www.404media.co/the-software-engineers-paid-to-fix-vibe-coded-messes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-500 hover:text-lime-400 font-medium whitespace-nowrap transition-colors"
          >
            Read Article &rarr;
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center space-y-8 -mt-16">
          {/* Logo / Title */}
          <div className="space-y-4">
            <h1 className="font-mono text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Vibe<span className="text-lime-500">Coding</span>
            </h1>
            <p className="text-lg text-muted-foreground">Newsletter</p>
          </div>

          {/* Copy */}
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
            Subscribe to get the latest news on the vibe coding ecosystem.
            Newest tools, VibeCoding tutorials, courses, and the latest
            hackathons online and offline.
          </p>

          {/* Subscribe Form */}
          <div className="bg-card border border-border rounded-lg p-6">
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
          </div>
        </div>
      </main>
    </div>
  );
}
