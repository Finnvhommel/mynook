import Availability from './Availability';

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-24 md:py-32 relative text-center">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-4xl w-full flex flex-col items-center space-y-8">
        
        {/* AANPASSING: Hier verander je 'animate-fade-in' naar 'animate-blur-in' */}
        <div className="animate-blur-in">
          <h2 className="
            font-['Racing_Sans_One'] 
            text-4xl md:text-6xl lg:text-7xl 
            text-ink
            leading-tight tracking-wide
          ">
            Herover je focus. <br /> 
            Ontdek je Nook.
          </h2>
        </div>

        <div className="max-w-2xl">
          {/* Je kunt de paragraaf ook een vertraging geven als je wilt, 
              bijvoorbeeld door hier ook animate-blur-in te gebruiken maar met delay */}
          <p className="font-racing text-lg md:text-xl text-ink/70 leading-relaxed animate-fade-in-up delay-100">
            De gesloten Android test is nu live! Klik hieronder om een downloadlink te ontvangen of schrijf je in voor de wachtlijst op iOS.
          </p>
        </div>

        <div className="animate-fade-in-up delay-200 w-full">
          <Availability />
        </div>
        
      </div>
    </section>
  );
}

export default Hero;