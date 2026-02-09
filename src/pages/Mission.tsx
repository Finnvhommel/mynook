import React from 'react';
import { ArrowLeft, Target, Heart } from 'lucide-react';

interface MissionProps {
  onNavigate: (page: string) => void;
}

export default function Mission({ onNavigate }: MissionProps) {
  return (
    <div className="min-h-screen bg-paper text-ink px-6 py-12">
      <div className="max-w-3xl mx-auto">
        
        {/* Terug knop */}
        <button 
          onClick={() => onNavigate('home')}
          className="group flex items-center gap-2 text-ink/60 hover:text-ink transition-colors mb-12 font-serif"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Terug naar home
        </button>

        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 tracking-tight border-b border-ink/10 pb-6">
          Onze Missie
        </h1>

        <div className="space-y-8 font-serif">
          <p className="text-xl md:text-2xl text-ink/80 leading-relaxed">
            De smartphone is in veel opzichten zijn oorspronkelijke nut voorbijgegaan. 
            MyNookApp is opgericht om de controle terug te geven aan de gebruiker.
          </p>

          <div className="grid gap-8 md:grid-cols-2 py-8">
            <div className="p-6 rounded-2xl bg-ink/5 border border-ink/10">
              <Target className="w-8 h-8 text-ink mb-4" />
              <h3 className="text-xl font-bold mb-2">Focus Herstellen</h3>
              <p className="text-ink/60 leading-relaxed">
                We helpen je om fysieke barrières te creëren voor digitale verleidingen, 
                zodat je aandacht blijft bij wat echt telt.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-ink/5 border border-ink/10">
              <Heart className="w-8 h-8 text-ink mb-4" />
              <h3 className="text-xl font-bold mb-2">Digitaal Welzijn</h3>
              <p className="text-ink/60 leading-relaxed">
                Technologie moet ons dienen, niet andersom. Wij streven naar een gezonde 
                balans tussen online zijn en het echte leven.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 font-serif">Waarom we dit doen</h2>
            <p className="text-lg text-ink/70 leading-relaxed mb-12">
              Ik merkte zelf dat ik en veel mensen om me heen tijdens het studeren vaak
              moeite hebben om de focus echt te houden op wat op dat moment belangrijk is:
              studeren. Om mezelf en mijn medestudenten een handje te helpen heb ik MyNook
              ontwikkeld.
            </p>
            
            {/* AANGEPAST: De definitie in exact dezelfde stijl als de homescreen footer */}
            <div className="border-t border-ink/10 pt-12 flex flex-col items-start text-left opacity-80">
              <div className="flex flex-wrap items-baseline gap-4 border-b border-ink/20 pb-2 mb-4 w-fit">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink tracking-tight">
                  nook
                </h2>
                <p className="font-serif italic text-sm text-ink/60">
                  [noek] zn.
                </p>
              </div>
              
              <p className="font-serif text-lg text-ink/80 leading-relaxed max-w-xl">
                een kleine ruimte of hoekje, met name een die rust en geborgenheid biedt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}