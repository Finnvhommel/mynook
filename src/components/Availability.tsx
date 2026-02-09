import { Smartphone, Clock } from 'lucide-react';

function Availability() {
  return (
    // AANPASSING: py-16 veranderd naar py-6 voor veel minder witruimte
    <section className="py-6 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-row gap-3 md:gap-6 justify-center items-stretch">
          
          {/* ANDROID KNOP */}
          <a
            href="https://tally.so/r/Pd59vd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gold text-white px-4 md:px-8 py-6 rounded-lg hover:bg-gold/90 transition-all duration-300 flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <Smartphone className="w-6 h-6 md:w-8 md:h-8 mb-1" />
              <span className="font-racing text-lg md:text-2xl tracking-wide leading-tight">
                Android
              </span>
            </div>
            
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="font-sans text-[10px] md:text-sm bg-white/20 px-2 md:px-3 py-1 rounded-full">
                Beta
              </span>
              <span className="font-sans text-[10px] md:text-sm font-bold border-b border-white/40 pb-0.5 leading-tight">
                Registreer voor test
              </span>
            </div>
          </a>

          {/* iOS KNOP */}
          <a
            href="https://tally.so/r/682KAO"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gold text-white px-4 md:px-8 py-6 rounded-lg hover:bg-gold/90 transition-all duration-300 flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <Clock className="w-6 h-6 md:w-8 md:h-8 mb-1" />
              <span className="font-racing text-lg md:text-2xl tracking-wide leading-tight">
                Apple iOS
              </span>
            </div>
            
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="font-sans text-[10px] md:text-sm bg-white/20 px-2 md:px-3 py-1 rounded-full whitespace-nowrap">
                Mei 2026
              </span>
              <span className="font-sans text-[10px] md:text-sm font-bold border-b border-white/40 pb-0.5 leading-tight">
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