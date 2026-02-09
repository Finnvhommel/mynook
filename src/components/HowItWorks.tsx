import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function HowItWorks() {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      title: "Kies je apps",
      description: "Selecteer in de app welke apps je wilt blokkeren en dempen.",
      details: "Omdat sommige apps uiteraard erg handig zijn, kun je zelf kiezen welke apps je wél en niet kunt gebruiken tijdens een sessie. Ook kun je kiezen welke apps wel en niet meldingen mogen sturen."
    },
    {
      number: "02",
      title: "Scan je Tag",
      description: "Houd je telefoon tegen de tag aan. Je zit nu in een Nook!",
      details: "Door je telefoon tegen een NFC tag (bijvoorbeeld je bankpas) te houden, start je een sessie. De door jou geselecteerde apps zijn nu geblokkeerd. Je kunt nu je telefoon meenemen naar de studieplek, je tag ergens anders laten, en maximaal focussen!"
    },
    {
      number: "03",
      title: "Klaar?",
      description: "Een sessie stopt wanneer dezelfde tag opnieuw wordt gescant. Je kunt nu alle apps weer gebruiken.",
      details: "Doel bereikt? Scan de tag opnieuw om alle apps weer te deblokkeren. Je kunt nu je sessie terugkijken bij geschiedenis!"
    }
  ];

  const handleStepClick = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <section className="py-12 md:py-24 bg-paper relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Z-index lager (0) zodat uitklappers eroverheen kunnen indien nodig */}
        <div className="text-center mb-12 relative z-0">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-2">Hoe werkt het?</h2>
          <p className="text-ink/60 text-lg font-sans">
            Simpel. Fysiek. Effectief.
          </p>
        </div>

        <div className="
          /* LAYOUT: Onder elkaar op mobiel (smooth), naast elkaar op desktop */
          flex flex-col md:grid md:grid-cols-3 gap-6
        ">
          
          {steps.map((step, index) => {
            const isOpen = openStep === index;

            return (
              <div 
                key={index}
                onClick={() => handleStepClick(index)}
                className={`
                  relative flex flex-col items-start p-8
                  rounded-[2rem] cursor-pointer
                  bg-paper group
                  transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                  border-2
                  
                  /* Z-INDEX FIX: De open kaart komt nu ALTIJD bovenop de rest */
                  ${isOpen ? 'z-20 scale-[1.02] shadow-xl border-gold' : 'z-10 border-gold/10 hover:border-gold/60 hover:scale-[1.01] hover:shadow-md'}
                `}
              >
                {/* Header rij: Nummer + Plus Icoon */}
                <div className="w-full flex justify-between items-start mb-4">
                  <span className={`
                    font-racing text-6xl md:text-7xl transition-colors duration-500
                    ${isOpen ? 'text-gold' : 'text-gold/20 group-hover:text-gold/60'}
                  `}>
                    {step.number}
                  </span>
                  
                  {/* HET SIGNAAL: Een subtiel plusje dat draait */}
                  <div className={`
                    p-2 rounded-full border border-gold/10 bg-gold/5
                    transition-all duration-500
                    ${isOpen ? 'bg-gold text-white rotate-45' : 'text-gold/60 group-hover:bg-gold group-hover:text-white'}
                  `}>
                    <Plus className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>

                <h3 className="font-racing text-2xl text-ink mb-2">
                  {step.title}
                </h3>
                
                <p className="text-ink/70 leading-relaxed font-sans text-base md:text-lg">
                  {step.description}
                </p>

                {/* ANIMATIE WRAPPER */}
                <div 
                  className={`
                    grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                    ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] md:group-hover:grid-rows-[1fr]'}
                  `}
                >
                  <div className="overflow-hidden">
                    {/* Padding zit hier binnenin, zodat hij niet verspringt */}
                    <div className={`
                      pt-6 transition-all duration-500
                      ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0'}
                    `}>
                      <p className="text-ink/60 text-sm md:text-base font-sans leading-relaxed border-t border-gold/20 pt-4">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}