'use client';
import { useState } from 'react';
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LimelightNav } from "@/components/ui/limelight-nav";
import { Banner } from "@/components/ui/banner";
import { FeaturedIn } from "@/components/ui/featured-in";
import { cn } from '@/lib/utils';
import { Home, Bookmark, PlusCircle, User, Settings, Code } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [showBanner, setShowBanner] = useState(true);
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  
  // Color progression: lime green -> light orange -> dark orange -> red
  const buttonColors = [
    'bg-lime-500 hover:bg-lime-600', // Home - Lime green
    'bg-orange-300 hover:bg-orange-400', // Bookmarks - Light orange  
    'bg-orange-500 hover:bg-orange-600', // Add New - Orange
    'bg-orange-700 hover:bg-orange-800', // Profile - Dark orange
    'bg-red-600 hover:bg-red-700', // Settings - Red
  ];
  
  const customNavItems = [
    { id: 'home', icon: <Home />, label: 'Home', onClick: () => console.log('Home Clicked!') },
    { id: 'bookmark', icon: <Bookmark />, label: 'Bookmarks', onClick: () => console.log('Bookmark Clicked!') },
    { id: 'add', icon: <PlusCircle />, label: 'Add New', onClick: () => console.log('Add Clicked!') },
    { id: 'profile', icon: <User />, label: 'Profile', onClick: () => console.log('Profile Clicked!') },
    { id: 'settings', icon: <Settings />, label: 'Settings', onClick: () => console.log('Settings Clicked!') },
  ];

  return (
    <div className="relative min-h-screen">
      <ThemeToggle />
      
      {/* Banner */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-2xl w-full px-4">
        <Banner
          show={showBanner}
          onHide={() => setShowBanner(false)}
          icon={<Code className="m-px h-4 w-4 text-green-800" />}
          title={
            <>
              From the makers of{" "}
              <a
                href="https://vibecodefixers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded hover:bg-orange-300 hover:text-orange-900 transition-colors"
              >
                VibeCodeFixers.com
              </a>
            </>
          }
          action={{
            label: "Fix Code Now",
            onClick: () => {
              const link = document.createElement('a');
              link.href = 'https://vibecodefixers.com';
              link.target = '_blank';
              link.rel = 'noopener noreferrer';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            },
          }}
        />
      </div>
      
      <DottedSurface className="size-full" />
      
      {/* As seen in - Top Left */}
      <div className="fixed top-4 left-4 z-50">
        <FeaturedIn />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center -mt-56">
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
            'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
            'blur-[30px]',
          )}
        />
        <div className="relative flex items-center justify-center z-10 px-4 w-full">
          
          {/* Main Content - Center */}
          <div className="text-center space-y-6">
            <h1 className="font-mono text-6xl font-bold text-foreground mb-4">
              VibeCoding Newsletter
            </h1>
            <div className="pt-4">
              <Link href="/subscribe">
                <button className={`${buttonColors[activeNavIndex]} text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 hover:scale-105 transform`}>
                  Subscribe Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dock Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <LimelightNav 
          className="bg-background/80 dark:bg-card/50 dark:border-accent/50 backdrop-blur-sm border-border/50 shadow-xl" 
          items={customNavItems}
          defaultActiveIndex={0}
          onTabChange={(index) => setActiveNavIndex(index)}
        />
      </div>
    </div>
  );
}