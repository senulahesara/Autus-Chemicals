import React from 'react';
import { ArrowRight, Box, Target, Zap, LayoutGrid } from 'lucide-react';

export default function ThemeTestPage() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8 md:p-24 selection:bg-[#01CD61] selection:text-[#0B0525]">
      
      {/* Hero Section - Typography Test */}
      <section className="max-w-5xl mx-auto mb-20 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground border border-border text-sm font-medium mb-4">
          <Zap size={16} className="text-[#01CD61]" />
          <span>Premium White Theme Test</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary">
          Industrial Solutions,<br />
          <span className="text-muted-foreground">Minimalist Approach.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Testing our new Design System. We've dropped the heavy dark mode for a pristine, 
          forced white aesthetic with subtle brand accents and sharp typography.
        </p>
        
        <div className="flex items-center justify-center gap-4 pt-8">
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#01CD61] text-black font-medium rounded-xl hover:bg-[#01CD61]/90 transition-all duration-300 shadow-sm">
            Primary Action <ArrowRight size={18} />
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-foreground font-medium rounded-full border border-border hover:bg-secondary transition-all duration-300">
            Secondary Button
          </button>
        </div>
      </section>

      {/* Bento Grid Section - Card & Hover Effect Test */}
      <section className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <LayoutGrid size={24} className="text-[#0089F7]" />
          <h2 className="text-2xl font-semibold tracking-tight">Bento Grid System</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Large Bento Box (Spans 2 columns) */}
          <div className="md:col-span-2 group bg-card border border-border p-10 rounded-[1.5rem] transition-all duration-500 hover:border-[#01CD61] hover:shadow-sm">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-[#01CD61]/10 transition-colors">
              <Box size={24} className="text-foreground group-hover:text-[#01CD61] transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Core Chemicals</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Testing the elevated surface. This card uses the `--card` background with our refined 24px border radius. 
              Hover over this card to see the border transform into the Autus Green accent.
            </p>
          </div>

          {/* Card 2: Standard Bento Box */}
          <div className="group bg-card border border-border p-10 rounded-[1.5rem] transition-all duration-500 hover:border-[#0089F7] hover:shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-[#0089F7]/10 transition-colors">
                <Target size={24} className="text-foreground group-hover:text-[#0089F7] transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">Precision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Notice how the text selection works? Try selecting this paragraph. It should highlight in vibrant green.
              </p>
            </div>
          </div>

          {/* Card 3: Standard Bento Box */}
          <div className="group bg-card border border-border p-10 rounded-[1.5rem] transition-all duration-500 hover:border-[#E6007E] hover:shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-foreground">Color Tokens</h3>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#01CD61]"></div>
                <span className="text-sm font-medium">Primary Green</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0089F7]"></div>
                <span className="text-sm font-medium">Accent Cyan</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-foreground border border-border"></div>
                <span className="text-sm font-medium">Dark Slate (Text)</span>
              </div>
            </div>
          </div>

          {/* Card 4: Wide Content Box (Spans 2 columns) */}
          <div className="md:col-span-2 group bg-secondary/50 border border-border p-10 rounded-[1.5rem] flex items-center justify-between">
             <div>
               <h3 className="text-xl font-bold mb-2">Ready to Build?</h3>
               <p className="text-muted-foreground">The foundation is set. Next step: Sanity CMS Schemas.</p>
             </div>
             <button className="px-6 py-3 bg-white border border-border rounded-full font-medium hover:bg-gray-50 transition-colors">
                View Architecture
             </button>
          </div>

        </div>
      </section>

    </main>
  );
}