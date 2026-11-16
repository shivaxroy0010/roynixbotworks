import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Play, 
  Code2, 
  ShieldCheck, 
  Layers, 
  Hash, 
  ChevronDown, 
  Bell, 
  Users, 
  Send, 
  Ban, 
  Trash2, 
  Headphones, 
  SkipForward, 
  SkipBack, 
  Repeat, 
  Shuffle, 
  Heart,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { WHOP_PURCHASE_URL_MUSIC, WHOP_PURCHASE_URL_TITAN } from '../../config/constants';

interface HeroProps {
  onExploreProducts: () => void;
  onViewSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onViewSolutions }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [selectedChannel, setSelectedChannel] = useState<'mod-logs' | 'automod' | 'welcome' | 'music'>('mod-logs');

  const totalSlides = 3;

  // Auto-advance slideshow in continuous loop
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const isMusicSlide = currentSlide === 1 || currentSlide === 2;

  return (
    <section id="home" className="relative pt-6 pb-12 sm:pt-8 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Outer Dark Hero Container matching design mockup */}
      <div className="relative rounded-3xl bg-[#090b0e] border border-zinc-800/80 overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-14">
        
        {/* Dynamic Glow: Lime for Titan, Crimson Red for Roynix Music */}
        <div 
          className={`absolute -right-20 -bottom-24 w-96 h-96 opacity-[0.25] blur-3xl rounded-full pointer-events-none transition-all duration-700 ${
            isMusicSlide ? 'bg-[#e50914]' : 'bg-brand-lime'
          }`} 
        />

        {/* Crisp Geometric Accent Polygon on Right Edge */}
        <div className="absolute right-0 bottom-0 w-36 h-72 sm:w-48 sm:h-96 pointer-events-none hidden lg:block overflow-hidden opacity-90 transition-opacity duration-500">
          <svg viewBox="0 0 200 400" fill="none" className="w-full h-full">
            <polygon 
              points="120,400 200,400 200,80 80,400" 
              fill={isMusicSlide ? '#e50914' : '#a3e635'} 
              className="transition-colors duration-700"
            />
            <polygon 
              points="40,400 100,400 200,160 200,240" 
              fill={isMusicSlide ? '#990000' : '#84cc16'} 
              opacity="0.6" 
              className="transition-colors duration-700"
            />
          </svg>
        </div>

        {/* Subtle grid background pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10">
          
          {/* Left Column: Headline, Copy, CTAs, Badges */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-7">
            
            {/* Top Studio Badge with dynamic status */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 w-fit text-xs font-semibold tracking-wider uppercase">
              <span className={`w-2 h-2 rounded-full animate-pulse ${
                isMusicSlide ? 'bg-[#e50914]' : 'bg-brand-lime'
              }`} />
              <span>DISCORD BOT DEVELOPMENT STUDIO</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-[54px] font-extrabold text-white tracking-tight leading-[1.12]">
              Powering the Next Generation of{' '}
              <span className={`block sm:inline transition-colors duration-500 ${
                isMusicSlide ? 'text-[#ff4d58]' : 'text-brand-lime'
              }`}>
                Discord Communities.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl">
              Discover professionally engineered Discord bots built for moderation, automation, security and community management.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onExploreProducts}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-150 active:scale-95 cursor-pointer shadow-md ${
                  isMusicSlide 
                    ? 'bg-[#e50914] text-white hover:bg-red-600 hover:shadow-[0_0_25px_rgba(229,9,20,0.4)]' 
                    : 'bg-brand-lime text-zinc-950 hover:bg-brand-lime-hover hover:shadow-glow-lime'
                }`}
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onViewSolutions}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm sm:text-base border border-zinc-800 transition-all duration-150 active:scale-95 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>View Our Solutions</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-zinc-800/80 text-zinc-400 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-2">
                <Code2 className={`w-4 h-4 ${isMusicSlide ? 'text-red-400' : 'text-brand-lime'}`} />
                <span>Source Code</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className={`w-4 h-4 ${isMusicSlide ? 'text-red-400' : 'text-brand-lime'}`} />
                <span>Secure & Reliable</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className={`w-4 h-4 ${isMusicSlide ? 'text-red-400' : 'text-brand-lime'}`} />
                <span>Developer Friendly</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Looping Discord & Graphic Slideshow */}
          <div 
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Top Slide Quick Badge & Counter */}
            <div className="w-full max-w-[560px] flex items-center justify-between mb-2 px-1">
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono ${
                  currentSlide === 0
                    ? 'bg-lime-950/80 text-brand-lime border border-brand-lime/30'
                    : 'bg-red-950/80 text-red-400 border border-red-500/30'
                }`}>
                  {currentSlide === 0 && 'Bot 1: Titan Moderation ($29.29)'}
                  {currentSlide === 1 && 'Bot 2: Roynix Music Player ($49.99)'}
                  {currentSlide === 2 && 'Bot 2: Music Bot Showcase (Save 15%)'}
                </span>
                {isPaused && (
                  <span className="text-[10px] text-zinc-500 font-mono">
                    (Paused on hover)
                  </span>
                )}
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="p-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Previous slide"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Next slide"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Slide Frame Window */}
            <div className="w-full max-w-[560px] bg-[#1e1f22] rounded-2xl border border-zinc-800 shadow-hero-mockup overflow-hidden text-zinc-300 font-sans text-xs select-none relative min-h-[410px] flex flex-col justify-between">
              
              {/* macOS Window Title Bar */}
              <div className="bg-[#111214] px-4 py-2.5 flex items-center justify-between border-b border-zinc-800/60 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ed6a5e]" />
                  <span className="w-3 h-3 rounded-full bg-[#f5bf4f]" />
                  <span className="w-3 h-3 rounded-full bg-[#61c554]" />
                </div>
                <div className="text-[11px] text-zinc-400 font-medium">
                  {currentSlide === 0 && 'Titan Moderation — Discord v14'}
                  {currentSlide === 1 && 'ROYNIX Music — Discord v14'}
                  {currentSlide === 2 && 'Roynix Music Studio — Official Release'}
                </div>
                <div className="w-12 text-right">
                  <span className="text-[10px] font-mono text-zinc-500">{currentSlide + 1}/3</span>
                </div>
              </div>

              {/* SLIDE 0: Titan Moderation Bot */}
              {currentSlide === 0 && (
                <div className="grid grid-cols-12 min-h-[360px] bg-[#313338] animate-in fade-in duration-300 flex-1">
                  
                  {/* Left Channel Sidebar */}
                  <div className="col-span-5 bg-[#2b2d31] p-2.5 flex flex-col border-r border-[#1f2023] space-y-3">
                    <div className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-[#35373c] cursor-pointer text-white font-bold text-xs">
                      <div className="flex items-center gap-1.5 truncate">
                        <div className="w-4 h-4 rounded bg-[#5865f2] flex items-center justify-center text-[10px]">
                          🛡️
                        </div>
                        <span className="truncate">Titan Moderation</span>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                    </div>

                    <div className="space-y-3 overflow-y-auto pr-1">
                      <div>
                        <div className="px-2 text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                          <ChevronDown className="w-2.5 h-2.5" />
                          <span>Community</span>
                        </div>
                        <div className="space-y-0.5">
                          <div 
                            onClick={() => setSelectedChannel('welcome')}
                            className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs cursor-pointer transition-colors ${
                              selectedChannel === 'welcome' 
                                ? 'bg-[#35373c] text-white font-medium' 
                                : 'text-zinc-400 hover:bg-[#35373c]/50 hover:text-zinc-200'
                            }`}
                          >
                            <Hash className="w-3.5 h-3.5 text-zinc-400" />
                            <span>welcome</span>
                          </div>
                          <div 
                            onClick={() => setCurrentSlide(1)}
                            className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-red-400 hover:bg-[#35373c]/50 cursor-pointer"
                          >
                            <Hash className="w-3.5 h-3.5 text-red-400" />
                            <span>music</span>
                            <span className="ml-auto text-[9px] px-1 rounded bg-red-950 text-red-400 font-mono">NEW</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-zinc-400 hover:bg-[#35373c]/50 hover:text-zinc-200 cursor-pointer">
                            <Hash className="w-3.5 h-3.5 text-zinc-400" />
                            <span>rules</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="px-2 text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                          <ChevronDown className="w-2.5 h-2.5" />
                          <span>Moderation</span>
                        </div>
                        <div className="space-y-0.5">
                          <div 
                            onClick={() => setSelectedChannel('mod-logs')}
                            className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs cursor-pointer transition-colors ${
                              selectedChannel === 'mod-logs' 
                                ? 'bg-[#35373c] text-white font-semibold' 
                                : 'text-zinc-400 hover:bg-[#35373c]/50 hover:text-zinc-200'
                            }`}
                          >
                            <Hash className="w-3.5 h-3.5 text-zinc-300" />
                            <span>mod-logs</span>
                          </div>
                          <div 
                            onClick={() => setSelectedChannel('automod')}
                            className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs cursor-pointer transition-colors ${
                              selectedChannel === 'automod' 
                                ? 'bg-[#35373c] text-white font-semibold' 
                                : 'text-zinc-400 hover:bg-[#35373c]/50 hover:text-zinc-200'
                            }`}
                          >
                            <Hash className="w-3.5 h-3.5 text-zinc-400" />
                            <span>automod</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Chat Area */}
                  <div className="col-span-7 bg-[#313338] flex flex-col justify-between">
                    <div className="h-10 px-3 bg-[#313338] border-b border-[#26282c] flex items-center justify-between text-zinc-200">
                      <div className="flex items-center gap-1.5">
                        <Hash className="w-4 h-4 text-zinc-400" />
                        <span className="font-bold text-xs text-white">{selectedChannel}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-zinc-400">
                        <Bell className="w-3.5 h-3.5" />
                        <Users className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="p-3 space-y-3.5 overflow-y-auto max-h-[290px]">
                      {/* Member Banned Embed */}
                      <div className="flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#111214] border border-purple-500/40 flex items-center justify-center flex-shrink-0 text-purple-400 font-black text-[10px]">
                          Ψ
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="font-bold text-xs text-white">Titan</span>
                            <span className="bg-[#5865f2] text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">
                              BOT
                            </span>
                          </div>
                          <div className="bg-[#2b2d31] rounded border-l-4 border-[#ed4245] p-2.5 text-[11px] space-y-1.5">
                            <div className="flex items-center gap-1.5 font-bold text-[#ed4245]">
                              <Ban className="w-3.5 h-3.5" />
                              <span>Member Banned</span>
                            </div>
                            <div className="text-zinc-300 space-y-0.5 font-mono text-[10px]">
                              <div><span className="text-zinc-400">User:</span> @example</div>
                              <div><span className="text-zinc-400">Moderator:</span> @Admin</div>
                              <div><span className="text-zinc-400">Reason:</span> Toxic behavior</div>
                              <div><span className="text-zinc-400">Time:</span> Today at 18:24</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Message Deleted Embed */}
                      <div className="flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#111214] border border-purple-500/40 flex items-center justify-center flex-shrink-0 text-purple-400 font-black text-[10px]">
                          Ψ
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="font-bold text-xs text-white">Titan</span>
                            <span className="bg-[#5865f2] text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">
                              BOT
                            </span>
                          </div>
                          <div className="bg-[#2b2d31] rounded border-l-4 border-[#faa81a] p-2.5 text-[11px] space-y-1.5">
                            <div className="flex items-center gap-1.5 font-bold text-[#faa81a]">
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Message Deleted</span>
                            </div>
                            <div className="text-zinc-300 space-y-0.5 font-mono text-[10px]">
                              <div><span className="text-zinc-400">Channel:</span> #general</div>
                              <div><span className="text-zinc-400">Content:</span> "spamming links..."</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 bg-[#313338] border-t border-[#26282c]">
                      <div className="bg-[#383a40] text-zinc-400 px-3 py-1.5 rounded-md flex items-center justify-between text-[11px]">
                        <span>Message #{selectedChannel}</span>
                        <Send className="w-3 h-3 text-zinc-500" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 1: Roynix Music Bot (Live Player Interface) */}
              {currentSlide === 1 && (
                <div className="grid grid-cols-12 min-h-[360px] bg-[#313338] animate-in fade-in duration-300 flex-1">
                  
                  {/* Music Left Sidebar */}
                  <div className="col-span-5 bg-[#2b2d31] p-2.5 flex flex-col border-r border-[#1f2023] space-y-3">
                    <div className="flex items-center justify-between px-2 py-1.5 rounded-md bg-[#35373c] text-white font-bold text-xs">
                      <div className="flex items-center gap-1.5 truncate">
                        <div className="w-4 h-4 rounded bg-[#e50914] flex items-center justify-center text-[10px] text-white">
                          <Headphones className="w-2.5 h-2.5" />
                        </div>
                        <span className="truncate">Roynix Music Studio</span>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                    </div>

                    <div className="space-y-3 overflow-y-auto pr-1">
                      <div>
                        <div className="px-2 text-[10px] font-bold text-red-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                          <ChevronDown className="w-2.5 h-2.5" />
                          <span>Audio Channels</span>
                        </div>
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1.5 px-2 py-1 rounded text-xs bg-[#35373c] text-[#ff4d58] font-bold cursor-pointer">
                            <Hash className="w-3.5 h-3.5 text-red-400" />
                            <span>music</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-zinc-400 hover:bg-[#35373c]/50 cursor-pointer">
                            <Hash className="w-3.5 h-3.5 text-zinc-400" />
                            <span>commands</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-zinc-400 hover:bg-[#35373c]/50 cursor-pointer">
                            <Hash className="w-3.5 h-3.5 text-zinc-400" />
                            <span>playlists</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-zinc-400 hover:bg-[#35373c]/50 cursor-pointer">
                            <Hash className="w-3.5 h-3.5 text-zinc-400" />
                            <span>settings</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-zinc-700/60 px-2 space-y-1">
                        <div className="text-[10px] font-mono text-zinc-400">AUDIO ENGINE</div>
                        <div className="text-[11px] font-bold text-white flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                          <span>Lavalink v4 Active</span>
                        </div>
                        <div className="text-[10px] text-zinc-400 font-mono">24-bit / 48kHz Opus</div>
                      </div>
                    </div>
                  </div>

                  {/* Music Chat & Player View */}
                  <div className="col-span-7 bg-[#313338] flex flex-col justify-between">
                    <div className="h-10 px-3 bg-[#313338] border-b border-[#26282c] flex items-center justify-between text-zinc-200">
                      <div className="flex items-center gap-1.5">
                        <Hash className="w-4 h-4 text-red-400" />
                        <span className="font-bold text-xs text-white">music</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-red-950 text-red-400 font-mono ml-1">PLAYING</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-zinc-400">
                        <Bell className="w-3.5 h-3.5" />
                        <Users className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Rich Now Playing Embed matching the image */}
                    <div className="p-3 space-y-3 overflow-y-auto max-h-[290px]">
                      <div className="flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#180a0d] border border-red-500/50 flex items-center justify-center flex-shrink-0 text-red-500 font-bold text-[10px]">
                          <Headphones className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="font-bold text-xs text-white">ROYNIX Music</span>
                            <span className="bg-[#5865f2] text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">
                              BOT
                            </span>
                            <span className="text-[10px] text-zinc-400 font-mono ml-auto">Lossless Stream</span>
                          </div>

                          <div className="bg-[#2b2d31] rounded-lg border-l-4 border-[#e50914] p-3 space-y-2.5 shadow-md">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">
                                Now Playing
                              </span>
                              <span className="text-[10px] font-mono text-zinc-400">Volume: 100%</span>
                            </div>

                            {/* Track display with Artwork */}
                            <div className="flex items-center gap-3 bg-[#1e1f22] p-2.5 rounded-lg border border-zinc-800">
                              <div className="w-10 h-10 rounded bg-[#15080a] border border-red-500/40 flex items-center justify-center text-lg flex-shrink-0">
                                🎵
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="font-bold text-xs text-white truncate">
                                  Alan Walker - Faded
                                </div>
                                <div className="text-[10px] text-zinc-400 truncate">
                                  YouTube & Spotify • Requested by: @Admin
                                </div>
                              </div>
                            </div>

                            {/* Progress bar */}
                            <div className="space-y-1 font-mono text-[9px]">
                              <div className="w-full bg-zinc-700 h-1 rounded-full overflow-hidden flex">
                                <div className="bg-[#e50914] h-full w-[38%]" />
                              </div>
                              <div className="flex justify-between text-zinc-400">
                                <span>1:24</span>
                                <span>3:32</span>
                              </div>
                            </div>

                            {/* Interactive control bar */}
                            <div className="flex items-center justify-between pt-1 border-t border-zinc-700/60">
                              <div className="flex items-center gap-1.5">
                                <span className="p-1 rounded bg-zinc-800 text-zinc-300"><SkipBack className="w-3 h-3" /></span>
                                <span className="p-1.5 rounded bg-[#e50914] text-white"><Play className="w-3 h-3 fill-white" /></span>
                                <span className="p-1 rounded bg-zinc-800 text-zinc-300"><SkipForward className="w-3 h-3" /></span>
                                <span className="p-1 rounded bg-zinc-800 text-zinc-300"><Repeat className="w-3 h-3" /></span>
                                <span className="p-1 rounded bg-zinc-800 text-zinc-300"><Shuffle className="w-3 h-3" /></span>
                              </div>
                              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 bg-[#313338] border-t border-[#26282c] flex items-center justify-between">
                      <a
                        href={WHOP_PURCHASE_URL_MUSIC}
                        target="_self"
                        className="text-[11px] font-bold text-red-400 hover:text-white flex items-center gap-1"
                      >
                        <span>Buy Roynix Music on Whop ($49.99)</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                      <span className="text-[10px] font-mono text-zinc-500">Save 15%</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 2: Roynix Music Bot Graphic Showcase (Official Banner) */}
              {currentSlide === 2 && (
                <div className="p-4 bg-[#0d0e12] flex flex-col justify-between items-center animate-in fade-in duration-300 flex-1 relative overflow-hidden">
                  
                  {/* Render the cropped high-res graphic card */}
                  <div className="w-full relative rounded-xl overflow-hidden border border-red-500/30 shadow-lg group">
                    <img 
                      src="/images/roynix-music-card.png" 
                      alt="Roynix Music Bot Official Whop Showcase"
                      className="w-full h-auto object-cover max-h-[300px]"
                    />
                    
                    {/* Hover purchase overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
                      <span className="text-white font-bold text-sm tracking-tight text-center">
                        Roynix Music Bot Source Code License
                      </span>
                      <a
                        href={WHOP_PURCHASE_URL_MUSIC}
                        target="_self"
                        className="px-5 py-2.5 rounded-full bg-[#e50914] hover:bg-red-600 text-white font-bold text-xs shadow-lg transition-transform hover:scale-105 flex items-center gap-1.5"
                      >
                        <span>Buy on Whop for $49.99</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Highlights Bar */}
                  <div className="w-full grid grid-cols-4 gap-2 pt-3 text-center font-mono text-[10px]">
                    <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                      High Quality
                    </div>
                    <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-red-400 font-bold">
                      YouTube
                    </div>
                    <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-green-400 font-bold">
                      Spotify
                    </div>
                    <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                      Fast & Lag-Free
                    </div>
                  </div>

                </div>
              )}

              {/* Bottom Carousel Navigation Dots & Indicators */}
              <div className="px-4 py-2 bg-[#111214] border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setCurrentSlide(0)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === 0 ? 'w-6 bg-brand-lime' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                    }`}
                    title="Slide 1: Titan Moderation Bot"
                  />
                  <button
                    onClick={() => setCurrentSlide(1)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === 1 ? 'w-6 bg-[#e50914]' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                    }`}
                    title="Slide 2: Roynix Music Player"
                  />
                  <button
                    onClick={() => setCurrentSlide(2)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === 2 ? 'w-6 bg-red-500' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                    }`}
                    title="Slide 3: Roynix Music Banner Showcase"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={currentSlide === 0 ? WHOP_PURCHASE_URL_TITAN : WHOP_PURCHASE_URL_MUSIC}
                    target="_self"
                    className="text-[11px] font-semibold text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>{currentSlide === 0 ? 'Titan on Whop ($29.29)' : 'Roynix Music on Whop ($49.99)'}</span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
