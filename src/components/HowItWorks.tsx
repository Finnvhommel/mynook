export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Kies je apps",
      description: "Selecteer in de app welke apps je wilt blokkeren."
    },
    {
      number: "02",
      title: "Scan je Tag",
      description: "Leg je telefoon tegen de MyNook tag. De blokkade start."
    },
    {
      number: "03",
      title: "Herover focus",
      description: "Je kunt pas weer bij je apps als je opnieuw scant."
    }
  ];

  return (
    // AANPASSING 1: py-8 veranderd naar py-4 (sectie ruimte geminimaliseerd)
    <section className="py-4 md:py-20 bg-paper overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        
        {/* AANPASSING 2: mb-8 veranderd naar mb-4 (titel dichter op de blokken) */}
        <div className="text-center px-6 mb-4">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-2">Hoe werkt het?</h2>
          <p className="text-ink/60 text-lg font-sans">
            Simpel. Fysiek. Effectief.
          </p>
        </div>

        <div className="
          flex flex-row md:grid md:grid-cols-3 gap-4 md:gap-8 
          overflow-x-auto snap-x snap-mandatory 
          /* AANPASSING 3: pb-8 veranderd naar pb-4 (minder witruimte onderaan) */
          px-6 pb-4 md:pb-0
          [-webkit-overflow-scrolling:touch] 
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
        ">
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="
                snap-center flex-shrink-0 w-[80vw] md:w-auto
                /* AANPASSING 4: p-8 veranderd naar p-6 (kaartjes zelf compacter) */
                flex flex-col items-start p-6
                rounded-[2rem] 
                border-2 border-gold/20 hover:border-gold transition-colors duration-300
                bg-paper
                relative group
                shadow-sm md:shadow-none
                last:mr-6
              "
            >
              {/* mb-4 veranderd naar mb-2 voor strakkere tekst-plaatsing */}
              <span className="font-racing text-6xl md:text-7xl text-gold/20 md:text-gold/20 group-hover:text-gold transition-colors duration-300 mb-2 md:mb-6">
                {step.number}
              </span>
              <h3 className="font-racing text-2xl text-ink mb-2">
                {step.title}
              </h3>
              <p className="text-ink/70 leading-relaxed font-sans text-base md:text-lg">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>

      <div className="md:hidden absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-paper to-transparent pointer-events-none" />
      
    </section>
  );
}