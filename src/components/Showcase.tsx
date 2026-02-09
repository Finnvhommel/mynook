function Showcase() {
  return (
    // AANPASSING: py-12 verlaagd naar py-6 om verticale witruimte te halveren
    <section className="py-6 bg-paper overflow-hidden">
      
      {/* AANPASSING: max-w-5xl verhoogd naar max-w-7xl voor meer ruimte op desktop.
          px-4 weggehaald op mobiel (px-0) zodat ze de rand kunnen raken. */}
      <div className="max-w-7xl mx-auto px-0 md:px-4">
        
        <div className="flex flex-row justify-center items-center gap-2 md:gap-16">
          
          {/* Linker afbeelding */}
          {/* AANPASSING: w-40 vervangen door w-[46vw]. 
              Dit betekent: pak 46% van de schermbreedte. 2x46% + gap vult het hele scherm.
              Desktop: md:w-96 (was w-80), dus flink groter. */}
          <div className="relative w-[46vw] md:w-96 transform -rotate-2 hover:rotate-0 transition-transform duration-500 ease-in-out z-10">
            <img 
              src="/mockup-timer.png" 
              alt="MyNook App Timer" 
              className="w-full h-auto drop-shadow-xl rounded-[1.5rem] md:rounded-[2.5rem]" 
            />
          </div>

          {/* Rechter afbeelding */}
          {/* Ook hier w-[46vw] en md:w-96 */}
          <div className="relative w-[46vw] md:w-96 transform rotate-2 hover:rotate-0 transition-transform duration-500 ease-in-out mt-6 md:mt-12">
            <img 
              src="/mockup-history.png" 
              alt="MyNook App Geschiedenis" 
              className="w-full h-auto drop-shadow-xl rounded-[1.5rem] md:rounded-[2.5rem]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Showcase;