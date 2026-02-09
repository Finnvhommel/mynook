export default function Showcase() {
  return (
    // AANPASSING 1: 'py-8' op mobiel (weinig witruimte), 'md:py-24' op desktop (veel witruimte)
    <section className="py-8 md:py-24 bg-paper overflow-hidden">
      
      {/* AANPASSING 2: 
          - 'px-2': We gebruiken bijna de hele breedte van het scherm (was px-6)
          - 'gap-3': De telefoons staan dichter op elkaar zodat ze zelf groter kunnen zijn
      */}
      <div className="max-w-7xl mx-auto px-2 md:px-6 flex flex-row justify-center items-center gap-3 md:gap-20">
        
        {/* Screenshot 1 */}
        <img 
          src="/mockup-timer.png" 
          alt="MyNook Timer" 
          // AANPASSING 3: w-[49%] pakt echt de maximale helft.
          className="w-[49%] md:w-[45%] max-w-[550px] h-auto drop-shadow-2xl rounded-[1.5rem] md:rounded-[2.5rem]" 
        />

        {/* Screenshot 2 */}
        <img 
          src="/mockup-history.png" 
          alt="MyNook Geschiedenis" 
          className="w-[49%] md:w-[45%] max-w-[550px] h-auto drop-shadow-2xl rounded-[1.5rem] md:rounded-[2.5rem]" 
        />

      </div>
    </section>
  );
}