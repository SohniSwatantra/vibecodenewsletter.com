'use client';
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LimelightNav } from "@/components/ui/limelight-nav";
import { cn } from '@/lib/utils';
import { Home, Bookmark, PlusCircle, User, Settings } from 'lucide-react';

export default function HomePage() {
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
      <DottedSurface className="size-full" />
      <div className="absolute inset-0 flex items-center justify-center -mt-56">
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
            'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
            'blur-[30px]',
          )}
        />
        <div className="text-center space-y-6 z-10 px-4">
          <h1 className="font-mono text-6xl font-bold text-foreground mb-4">
            VibeCode Newsletter
          </h1>
          <div className="pt-4">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Dock Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <LimelightNav 
          className="bg-background/80 dark:bg-card/50 dark:border-accent/50 backdrop-blur-sm border-border/50 shadow-xl" 
          items={customNavItems}
          defaultActiveIndex={0}
        />
      </div>
    </div>
  );
}