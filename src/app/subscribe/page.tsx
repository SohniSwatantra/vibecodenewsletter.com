'use client';

import { DottedSurface } from "@/components/ui/dotted-surface";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { FeaturedIn } from "@/components/ui/featured-in";
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function SubscribePage() {
  useEffect(() => {
    // Load RapidForms script
    const script = document.createElement('script');
    script.src = 'https://app.rapidforms.co/embed/index.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <ThemeToggle />
      
      {/* As seen in - Top Left */}
      <div className="fixed top-4 left-4 z-50 hidden lg:block">
        <FeaturedIn />
      </div>
      
      <DottedSurface className="size-full" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Newsletter</span>
            </Link>
          </div>
          
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="font-mono text-4xl font-bold text-foreground mb-4">
              Subscribe to VibeCoding Newsletter
            </h1>
            <p className="text-foreground/70 text-lg">
              Stay updated with the latest coding trends and insights
            </p>
          </div>
          
          {/* RapidForms Iframe */}
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-6 shadow-xl">
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
      </div>
    </div>
  );
}