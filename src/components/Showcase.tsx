export default function Showcase() {
  return (
    <section className="py-8 md:py-24 bg-paper overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-2 md:px-6 flex flex-row justify-center items-center gap-3 md:gap-20">
        
        {/* Screenshot 1 (Timer) */}
        <img 
          src="/mockup-timer.png" 
          alt="MyNook Timer" 
          /* AANPASSING: 'animate-float' toegevoegd. 
             Deze begint direct met bewegen.
          */
          className="w-[49%] md:w-96 h-auto rounded-[1.5rem] md:rounded-[2.5rem] animate-float" 
        />

        {/* Screenshot 2 (History) */}
        <img 
          src="/mockup-history.png" 
          alt="MyNook Geschiedenis" 
          /* AANPASSING: 'animate-float-delayed' toegevoegd.
             Deze wacht 3 seconden (de helft van de animatie).
             Hierdoor gaat deze omlaag als de andere omhoog gaat. 
             Dit 'tegenovergestelde' effect oogt heel natuurlijk en rustgevend.
          */
          className="w-[49%] md:w-96 h-auto rounded-[1.5rem] md:rounded-[2.5rem] animate-float-delayed" 
        />

      </div>
    </section>
  );
}