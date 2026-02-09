import { Smartphone, Clock } from 'lucide-react';

function Availability() {
  return (
    <section className="pt-6 pb-0 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-row gap-3 md:gap-6 justify-center items-stretch">
          
          {/* ANDROID KNOP */}
          <a
            href="https://tally.so/r/Pd59vd"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1 
              bg-gold/80 backdrop-blur-md border border-white/30
              text-white 
              px-4 md:px-8 py-6 
              rounded-2xl 
              hover:bg-gold/90 transition-all duration-300 
              /* AANPASSING: active:scale-95 toegevoegd voor het inveren */
              active:scale-95 transform
              flex flex-col items-center justify-center gap-4 
              shadow-lg hover:shadow-xl hover:-translate-y-1
            "
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <Smartphone className="w-6 h-6 md:w-8 md:h-8 mb-1 drop-shadow-sm" />
              <span className="font-racing text-lg md:text-2xl tracking-wide leading-tight drop-shadow-sm">
                Android
              </span>
            </div>
            
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="font-sans text-[10px] md:text-sm bg-white/20 border border-white/10 px-2 md:px-3 py-1 rounded-full backdrop-blur-sm">
                Beta
              </span>
              <span className="font-sans text-[10px] md:text-sm font-bold border-b border-white/40 pb-0.5 leading-tight shadow-sm">
                Registreer voor test
              </span>
            </div>
          </a>

          {/* iOS KNOP */}
          <a
            href="https://tally.so/r/682KAO"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1 
              bg-gold/80 backdrop-blur-md border border-white/30
              text-white 
              px-4 md:px-8 py-6 
              rounded-2xl 
              hover:bg-gold/90 transition-all duration-300 
              /* AANPASSING: active:scale-95 toegevoegd */
              active:scale-95 transform
              flex flex-col items-center justify-center gap-4 
              shadow-lg hover:shadow-xl hover:-translate-y-1
            "
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <Clock className="w-6 h-6 md:w-8 md:h-8 mb-1 drop-shadow-sm" />
              <span className="font-racing text-lg md:text-2xl tracking-wide leading-tight drop-shadow-sm">
                Apple iOS
              </span>
            </div>
            
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="font-sans text-[10px] md:text-sm bg-white/20 border border-white/10 px-2 md:px-3 py-1 rounded-full whitespace-nowrap backdrop-blur-sm">
                Verwacht: mei 2026
              </span>
              <span className="font-sans text-[10px] md:text-sm font-bold border-b border-white/40 pb-0.5 leading-tight shadow-sm">
                Meld je aan
              </span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Availability;