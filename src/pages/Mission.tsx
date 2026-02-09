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
            <div className="max-w-2xl">
  <h2 className="text-3xl font-bold mb-6 font-serif text-ink">Ons verhaal</h2>
  
  <div className="text-lg text-ink/70 leading-relaxed space-y-6">
    {/* Alinea 1: Het probleem */}
    <p>
      In de bibliotheek viel ons als studenten op dat veel mensen
      {/* Hier maken we de haakjes subtiel en cursief */}
      <span className="italic text-ink/50"> (inclusief onszelf) </span>
      continu afgeleid zijn door hun telefoon. Dit is erg zonde, aangezien die tijd écht beter besteed zou kunnen én moeten worden. En dit is niet alleen een probleem tijdens het studeren. Overal waar je kijkt leven mensen in hun scherm in plaats van in de echte wereld.
    </p>

    {/* Alinea 2: De realisatie */}
    <p>
      Natuurlijk is de telefoon een erg handig apparaat, dat gaan we niet ontkennen. Maar moeten we nou echt de hele dag naar dat scherm staren? <strong className="text-ink font-medium">Nee. Absoluut niet.</strong>
    </p>

    {/* Alinea 3: De oplossing (MyNook) */}
    <p>
      Daarom hebben we MyNook bedacht. Met MyNook kies je zelf de apps uit die je op dat moment wel en niet wilt gebruiken. Vervolgens scan je een tag om de sessie te starten. Je kan pas weer bij je apps zodra je dezelfde tag opnieuw scant.
    </p>

    {/* Alinea 4: Hoe het werkt */}
    <p>
      Dit creëert een extra fysieke drempel om je telefoon te openen en je kunt bovendien uiteraard je tag op een andere plek houden zodat het onmogelijk wordt om de door jou geblokkeerde apps te openen. Op deze manier kun je dus gebruik maken van de handige functies van een smartphone zonder alle afleiding.
    </p>

    {/* De 'Closer' - even dikgedrukt als uitsmijter */}
    <p className="font-bold text-ink pt-2">
      En dat is waar we voor staan: Het maximale uit je tijd halen!
    </p>
  </div>
</div>
            
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