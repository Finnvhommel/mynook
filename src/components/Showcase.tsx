function Showcase() {
  return (
    <section className="py-12 bg-paper overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* AANPASSING: flex-row zorgt dat ze ALTIJD naast elkaar staan. 
            gap-2 op mobiel houdt ze dicht bij elkaar. */}
        <div className="flex flex-row justify-center items-center gap-2 md:gap-12">
          
          {/* Linker afbeelding: w-40 op mobiel (voldoende voor 2 naast elkaar), w-80 op desktop */}
          <div className="relative w-40 md:w-80 transform -rotate-2 hover:rotate-0 transition-transform duration-500 ease-in-out z-10">
            <img 
              src="/mockup-timer.png" 
              alt="MyNook App Timer" 
              className="w-full h-auto drop-shadow-xl rounded-[1.5rem] md:rounded-[2.5rem]" 
            />
          </div>

          {/* Rechter afbeelding: mt-8 voor de verspringing, ook op mobiel */}
          <div className="relative w-40 md:w-80 transform rotate-2 hover:rotate-0 transition-transform duration-500 ease-in-out mt-8">
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