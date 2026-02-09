function Hero() {
  return (
    <section className="flex flex-col items-center px-6 pt-32 pb-8 relative">
      
      {/* De container houdt de algemene space-y op 4 voor subtiele samenhang */}
      <div className="max-w-4xl w-full flex flex-col items-start text-left space-y-4">
        
        {/* De 'Nook' definitie blok */}
        <div className="space-y-6">
          
          {/* Titel + Uitspraak + Onderstreping */}
          <div className="flex flex-wrap items-baseline gap-4 border-b border-ink pb-4 pr-12 w-fit">
            <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold text-ink tracking-tight">
              nook
            </h1>
            <p className="font-serif italic text-2xl md:text-3xl text-ink/60">
              [noek] zn.
            </p>
          </div>

          {/* De betekenis */}
          <p className="font-serif text-xl md:text-2xl text-ink/80 leading-relaxed max-w-2xl">
            een kleine ruimte of hoekje, met name een die rust en geborgenheid biedt.
          </p>
        </div>

       {/* Nieuwe Tagline met Racing Sans One */}
       {/* AANGEPAST: pt-8 toegevoegd om meer lucht te creëren boven deze zin */}
        <div className="pt-8">
          <p className="font-racing text-xl md:text-2xl text-ink/80 leading-relaxed tracking-wide">
            De android test is nu live! Klik hieronder om je aan te melden of schrijf je in voor de wachtlijst op iOS.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hero;