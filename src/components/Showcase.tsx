function Showcase() {
  return (
    // AANPASSING 1: py-24 veranderd naar py-12.
    // Dit halveert de ruimte boven en onder de hele sectie.
    <section className="py-12 bg-paper overflow-hidden">
      
      {/* AANPASSING 2: max-w-6xl naar max-w-5xl. 
          Dit maakt de container iets smaller, waardoor de focus meer op het midden ligt. */}
      <div className="max-w-5xl mx-auto px-6">
        
        {/* AANPASSING 3: gap-12 md:gap-24 verkleind naar gap-6 md:gap-12.
            De telefoons staan nu veel dichter bij elkaar. */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          
          {/* Linker afbeelding */}
          {/* Ik heb de rotatie iets subtieler gemaakt (-3 naar -2 graden) voor een strakkere look */}
          <div className="relative w-64 md:w-80 transform -rotate-2 hover:rotate-0 transition-transform duration-500 ease-in-out z-10">
            <img 
              src="/mockup-timer.png" 
              alt="MyNook App Timer" 
              // drop-shadow-2xl veranderd naar drop-shadow-xl voor een iets minder 'zweverig' effect
              className="w-full h-auto drop-shadow-xl rounded-[2.5rem]" 
            />
          </div>

          {/* Rechter afbeelding */}
          {/* AANPASSING 4: md:mt-16 verkleind naar md:mt-8.
              De rechter telefoon hangt nu minder ver naar beneden. */}
          <div className="relative w-64 md:w-80 transform rotate-2 hover:rotate-0 transition-transform duration-500 ease-in-out md:mt-8">
            <img 
              src="/mockup-history.png" 
              alt="MyNook App Geschiedenis" 
              className="w-full h-auto drop-shadow-xl rounded-[2.5rem]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Showcase;