import Availability from './Availability';

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-24 md:py-32 relative text-center">
      
      <div className="max-w-4xl w-full flex flex-col items-center space-y-8">
        
        {/* De focus-zin van gisteren */}
        <div className="animate-fade-in">
          <h2 className="font-['Racing_Sans_One'] text-4xl md:text-6xl lg:text-7xl text-ink leading-tight tracking-wide">
            Herover je focus. <br /> 
            Ontdek je Nook.
          </h2>
        </div>

        {/* De specifieke sub-tekst van gisteren */}
        <div className="max-w-2xl">
          <p className="font-racing text-lg md:text-xl text-ink/70 leading-relaxed">
            De gesloten Android test is nu live! Klik hieronder om een downloadlink te ontvangen of schrijf je in voor de wachtlijst op iOS.
          </p>
        </div>

        {/* De Availability knoppen (alleen hier, niet meer dubbel in Home.tsx) */}
        <div className="animate-fade-in-up delay-200">
          <Availability />
        </div>
        
      </div>
    </section>
  );
}

export default Hero;