import React, { useState } from 'react';
import { 
  ArrowRight, 
  Play, 
  Code2, 
  ShieldCheck, 
  Layers, 
  Hash, 
  ChevronDown, 
  Bell, 
  Pin, 
  Users, 
  Send,
  Ban,
  Trash2,
  Headphones,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Heart
} from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onViewSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onViewSolutions }) => {
  const [selectedChannel, setSelectedChannel] = useState<'mod-logs' | 'automod' | 'welcome' | 'music'>('mod-logs');

  return (
    <section id="home" className="relative pt-6 pb-12 sm:pt-8 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Outer Dark Hero Container matching design mockup */}
      <div className="relative rounded-3xl bg-[#090b0e] border border-zinc-800/80 overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-14">
        
        {/* Crisp Electric Green Polygon / Diagonal Graphic on Right Edge */}
        <div className="absolute -right-20 -bottom-24 w-96 h-96 bg-brand-lime opacity-[0.22] blur-3xl rounded-full pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-36 h-72 sm:w-48 sm:h-96 pointer-events-none hidden lg:block overflow-hidden opacity-90">
          <svg viewBox="0 0 200 400" fill="none" className="w-full h-full">
            <polygon points="120,400 200,400 200,80 80,400" fill="#a3e635" />
            <polygon points="40,400 100,400 200,160 200,240" fill="#84cc16" opacity="0.6" />
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
            
            {/* Top Studio Badge with pulsing green indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 w-fit text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
              <span>DISCORD BOT DEVELOPMENT STUDIO</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-[54px] font-extrabold text-white tracking-tight leading-[1.12]">
              Powering the Next Generation of{' '}
              <span className="text-brand-lime block sm:inline">Discord Communities.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl">
              Discover professionally engineered Discord bots built for moderation, automation, security and community management.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-lime text-zinc-950 font-bold text-sm sm:text-base hover:bg-brand-lime-hover hover:shadow-glow-lime transition-all duration-150 active:scale-95 cursor-pointer shadow-md"
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
                <Code2 className="w-4 h-4 text-brand-lime" />
                <span>Source Code</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-lime" />
                <span>Secure & Reliable</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-lime" />
                <span>Developer Friendly</span>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Discord Interface Mockup */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center">
            <div className="w-full max-w-[560px] bg-[#1e1f22] rounded-2xl border border-zinc-800 shadow-hero-mockup overflow-hidden text-zinc-300 font-sans text-xs select-none">
              
              {/* macOS Window Title Bar */}
              <div className="bg-[#111214] px-4 py-2.5 flex items-center justify-between border-b border-zinc-800/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ed6a5e]" />
                  <span className="w-3 h-3 rounded-full bg-[#f5bf4f]" />
                  <span className="w-3 h-3 rounded-full bg-[#61c554]" />
                </div>
                <div className="text-[11px] text-zinc-400 font-medium">
                  Titan Moderation — Discord v14
                </div>
                <div className="w-12" />
              </div>

              {/* Discord App Window Body: Sidebar + Chat Area */}
              <div className="grid grid-cols-12 min-h-[360px] bg-[#313338]">
                
                {/* Left Channel Sidebar */}
                <div className="col-span-5 bg-[#2b2d31] p-2.5 flex flex-col border-r border-[#1f2023] space-y-3">
                  
                  {/* Server Header Dropdown */}
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-[#35373c] cursor-pointer text-white font-bold text-xs">
                    <div className="flex items-center gap-1.5 truncate">
                      {/* Discord Shield Icon */}
                      <div className="w-4 h-4 rounded bg-[#5865f2] flex items-center justify-center text-[10px]">
                        🛡️
                      </div>
                      <span className="truncate">Titan Moderation</span>
                    </div>
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                  </div>

                  {/* Channel Categories */}
                  <div className="space-y-3 overflow-y-auto pr-1">
                    
                    {/* Category: Community */}
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
                          onClick={() => setSelectedChannel('music')}
                          className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs cursor-pointer transition-colors ${
                            selectedChannel === 'music' 
                              ? 'bg-[#35373c] text-[#ff4d58] font-bold' 
                              : 'text-zinc-400 hover:bg-[#35373c]/50 hover:text-zinc-200'
                          }`}
                        >
                          <Hash className="w-3.5 h-3.5 text-red-400" />
                          <span>music</span>
                          <span className="ml-auto text-[9px] px-1 rounded bg-red-950/80 text-red-400 font-mono">NEW</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-zinc-400 hover:bg-[#35373c]/50 hover:text-zinc-200 cursor-pointer">
                          <Hash className="w-3.5 h-3.5 text-zinc-400" />
                          <span>rules</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-zinc-400 hover:bg-[#35373c]/50 hover:text-zinc-200 cursor-pointer">
                          <Hash className="w-3.5 h-3.5 text-zinc-400" />
                          <span>announcements</span>
                        </div>
                      </div>
                    </div>

                    {/* Category: Moderation */}
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
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-zinc-400 hover:bg-[#35373c]/50 hover:text-zinc-200 cursor-pointer">
                          <Hash className="w-3.5 h-3.5 text-zinc-400" />
                          <span>staff-chat</span>
                        </div>
                      </div>
                    </div>

                    {/* Category: Support */}
                    <div>
                      <div className="px-2 text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <ChevronDown className="w-2.5 h-2.5" />
                        <span>Support</span>
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-zinc-400 hover:bg-[#35373c]/50 hover:text-zinc-200 cursor-pointer">
                          <Hash className="w-3.5 h-3.5 text-zinc-400" />
                          <span>help</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-zinc-400 hover:bg-[#35373c]/50 hover:text-zinc-200 cursor-pointer">
                          <Hash className="w-3.5 h-3.5 text-zinc-400" />
                          <span>tickets</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Right Chat Messages Area */}
                <div className="col-span-7 bg-[#313338] flex flex-col justify-between">
                  
                  {/* Channel Header */}
                  <div className="h-10 px-3 bg-[#313338] border-b border-[#26282c] flex items-center justify-between text-zinc-200">
                    <div className="flex items-center gap-1.5">
                      <Hash className="w-4 h-4 text-zinc-400" />
                      <span className="font-bold text-xs text-white">{selectedChannel}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-zinc-400">
                      <Bell className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                      <Pin className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                      <Users className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                    </div>
                  </div>

                  {/* Channel Messages List */}
                  <div className="p-3 space-y-3.5 overflow-y-auto max-h-[300px]">
                    {selectedChannel === 'mod-logs' && (
                      <>
                        {/* Bot Message 1: Member Banned Embed */}
                        <div className="flex items-start gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-[#111214] border border-purple-500/40 flex items-center justify-center flex-shrink-0 text-purple-400 font-black text-[10px]">
                            Ψ
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className="font-bold text-xs text-white">Titan</span>
                              <span className="bg-[#5865f2] text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase tracking-wider">
                                BOT
                              </span>
                            </div>

                            {/* Red Embed: Member Banned */}
                            <div className="bg-[#2b2d31] rounded border-l-4 border-[#ed4245] p-2.5 text-[11px] space-y-1.5 shadow-sm">
                              <div className="flex items-center gap-1.5 font-bold text-[#ed4245]">
                                <Ban className="w-3.5 h-3.5" />
                                <span>Member Banned</span>
                              </div>
                              <div className="text-zinc-300 space-y-0.5 leading-relaxed font-mono text-[10px]">
                                <div><span className="text-zinc-400">User:</span> <span className="text-zinc-200">@example</span></div>
                                <div><span className="text-zinc-400">Moderator:</span> <span className="text-purple-300">@Admin</span></div>
                                <div><span className="text-zinc-400">Reason:</span> <span className="text-zinc-200">Toxic behavior</span></div>
                                <div><span className="text-zinc-400">Time:</span> <span className="text-zinc-400">Today at 18:24</span></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bot Message 2: Message Deleted Embed */}
                        <div className="flex items-start gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-[#111214] border border-purple-500/40 flex items-center justify-center flex-shrink-0 text-purple-400 font-black text-[10px]">
                            Ψ
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className="font-bold text-xs text-white">Titan</span>
                              <span className="bg-[#5865f2] text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase tracking-wider">
                                BOT
                              </span>
                            </div>

                            {/* Yellow Embed: Message Deleted */}
                            <div className="bg-[#2b2d31] rounded border-l-4 border-[#faa81a] p-2.5 text-[11px] space-y-1.5 shadow-sm">
                              <div className="flex items-center gap-1.5 font-bold text-[#faa81a]">
                                <Trash2 className="w-3.5 h-3.5" />
                                <span>Message Deleted</span>
                              </div>
                              <div className="text-zinc-300 space-y-0.5 leading-relaxed font-mono text-[10px]">
                                <div><span className="text-zinc-400">User:</span> <span className="text-zinc-200">@example</span></div>
                                <div><span className="text-zinc-400">Channel:</span> <span className="text-zinc-200">#general</span></div>
                                <div><span className="text-zinc-400">Content:</span> <span className="text-zinc-300 italic">"spamming links..."</span></div>
                                <div><span className="text-zinc-400">Time:</span> <span className="text-zinc-400">Today at 18:21</span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {selectedChannel === 'automod' && (
                      <>
                        <div className="flex items-start gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-[#111214] border border-purple-500/40 flex items-center justify-center flex-shrink-0 text-purple-400 font-black text-[10px]">
                            Ψ
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className="font-bold text-xs text-white">Titan AutoMod</span>
                              <span className="bg-[#5865f2] text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase tracking-wider">
                                BOT
                              </span>
                            </div>
                            <div className="bg-[#2b2d31] rounded border-l-4 border-[#5865f2] p-2.5 text-[11px] space-y-1.5 shadow-sm">
                              <div className="flex items-center gap-1.5 font-bold text-[#5865f2]">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                <span>Invite Link Intercepted</span>
                              </div>
                              <div className="text-zinc-300 space-y-0.5 leading-relaxed font-mono text-[10px]">
                                <div><span className="text-zinc-400">Trigger:</span> <span className="text-zinc-200">discord.gg/scam-link-test</span></div>
                                <div><span className="text-zinc-400">Action:</span> <span className="text-brand-lime">Purged + 15m Timeout</span></div>
                                <div><span className="text-zinc-400">Latency:</span> <span className="text-zinc-400">12ms regex scan</span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {selectedChannel === 'welcome' && (
                      <>
                        <div className="flex items-start gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-[#111214] border border-purple-500/40 flex items-center justify-center flex-shrink-0 text-purple-400 font-black text-[10px]">
                            Ψ
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className="font-bold text-xs text-white">Titan Gatekeeper</span>
                              <span className="bg-[#5865f2] text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase tracking-wider">
                                BOT
                              </span>
                            </div>
                            <div className="bg-[#2b2d31] rounded border-l-4 border-[#23a55a] p-2.5 text-[11px] space-y-1.5 shadow-sm">
                              <div className="flex items-center gap-1.5 font-bold text-[#23a55a]">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                <span>Verified Member Joined</span>
                              </div>
                              <div className="text-zinc-300 space-y-0.5 leading-relaxed font-mono text-[10px]">
                                <div><span className="text-zinc-400">Member:</span> <span className="text-zinc-200">@community_dev</span></div>
                                <div><span className="text-zinc-400">Assigned Role:</span> <span className="text-purple-300">@Member</span></div>
                                <div><span className="text-zinc-400">Account Age:</span> <span className="text-zinc-400">842 days (Verified)</span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {selectedChannel === 'music' && (
                      <>
                        <div className="flex items-start gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-[#180a0d] border border-red-500/40 flex items-center justify-center flex-shrink-0 text-red-500 font-bold text-[10px]">
                            <Headphones className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className="font-bold text-xs text-white">ROYNIX Music</span>
                              <span className="bg-[#5865f2] text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase tracking-wider">
                                BOT
                              </span>
                              <span className="text-[10px] text-zinc-400 font-mono ml-auto">24-bit / 48kHz</span>
                            </div>

                            {/* Music Player Embed matching uploaded image */}
                            <div className="bg-[#2b2d31] rounded border-l-4 border-[#e50914] p-3 text-[11px] space-y-2 shadow-sm">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">
                                  Now Playing
                                </span>
                              </div>

                              <div className="flex items-center gap-2.5 bg-[#1e1f22] p-2 rounded">
                                <div className="w-8 h-8 rounded bg-red-950/80 border border-red-600/40 flex items-center justify-center text-sm">
                                  🎧
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="font-bold text-xs text-white truncate">
                                    Alan Walker - Faded
                                  </div>
                                  <div className="text-[10px] text-zinc-400">
                                    YouTube Music • 3:32
                                  </div>
                                </div>
                              </div>

                              {/* Progress bar */}
                              <div className="space-y-0.5 font-mono text-[9px]">
                                <div className="w-full bg-zinc-700 h-1 rounded-full overflow-hidden flex">
                                  <div className="bg-[#e50914] h-full w-[38%]" />
                                </div>
                                <div className="flex justify-between text-zinc-400">
                                  <span>1:24</span>
                                  <span>3:32</span>
                                </div>
                              </div>

                              {/* Interactive controls */}
                              <div className="flex items-center justify-between pt-1 border-t border-zinc-700/50">
                                <div className="flex items-center gap-1.5">
                                  <span className="p-1 rounded bg-zinc-800 text-zinc-300"><SkipBack className="w-3 h-3" /></span>
                                  <span className="p-1 rounded bg-[#e50914] text-white"><Play className="w-3 h-3 fill-white" /></span>
                                  <span className="p-1 rounded bg-zinc-800 text-zinc-300"><SkipForward className="w-3 h-3" /></span>
                                  <span className="p-1 rounded bg-zinc-800 text-zinc-300"><Repeat className="w-3 h-3" /></span>
                                  <span className="p-1 rounded bg-zinc-800 text-zinc-300"><Shuffle className="w-3 h-3" /></span>
                                </div>
                                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 cursor-pointer" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Channel Input Bar Placeholder */}
                  <div className="p-2.5 bg-[#313338] border-t border-[#26282c]">
                    <div className="bg-[#383a40] text-zinc-400 px-3 py-1.5 rounded-md flex items-center justify-between text-[11px]">
                      <span>Message #{selectedChannel}</span>
                      <Send className="w-3 h-3 text-zinc-500" />
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
