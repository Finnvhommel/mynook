export default function Showcase() {
  return (
    <section className="py-24 bg-paper overflow-hidden">
      {/* AANPASSING 1: 
        Verwijder 'flex-col' en gebruik altijd 'flex-row'. 
        'px-4' geeft net wat meer ruimte aan de zijkant op mobiel.
        'gap-3' zorgt voor een kleine witruimte tussen de telefoons op mobiel.
      */}
      <div className="max-w-7xl mx-auto px-4 flex flex-row justify-center items-center gap-3 md:gap-20">
        
        {/* Screenshot 1 */}
        <img 
          src="/mockup-timer.png" 
          alt="MyNook Timer" 
          /* AANPASSING 2:
            - 'w-[48%]' zorgt dat ze elk net minder dan de helft pakken op mobiel.
            - 'rounded-[1.5rem]' is iets subtieler voor de kleinere afbeelding op mobiel.
          */
          className="w-[48%] md:w-[45%] max-w-[550px] h-auto drop-shadow-2xl rounded-[1.5rem] md:rounded-[2.5rem]" 
        />

        {/* Screenshot 2 */}
        <img 
          src="/mockup-history.png" 
          alt="MyNook Geschiedenis" 
          className="w-[48%] md:w-[45%] max-w-[550px] h-auto drop-shadow-2xl rounded-[1.5rem] md:rounded-[2.5rem]" 
        />

      </div>
    </section>
  );
}