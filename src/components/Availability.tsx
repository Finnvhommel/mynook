import { Smartphone, Clock } from 'lucide-react';

function Availability() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          
          {/* ANDROID KNOP */}
          <a
            href="https://tally.so/r/Pd59vd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-md bg-gold text-white px-8 py-6 rounded-lg hover:bg-gold/90 transition-all duration-300 flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <Smartphone className="w-8 h-8 mb-1" />
              <span className="font-racing text-xl md:text-2xl tracking-wide leading-tight">
                Android
              </span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <span className="font-sans text-sm bg-white/20 px-3 py-1 rounded-full">
                Beta
              </span>
              <span className="font-sans text-sm font-bold border-b border-white/40 pb-0.5">
                Registreer je voor de testversie
              </span>
            </div>
          </a>

          {/* iOS KNOP */}
          <a
            href="https://tally.so/r/682KAO"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-md bg-gold text-white px-8 py-6 rounded-lg hover:bg-gold/90 transition-all duration-300 flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <Clock className="w-8 h-8 mb-1" />
              <span className="font-racing text-xl md:text-2xl tracking-wide leading-tight">
                Apple iOS
              </span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <span className="font-sans text-sm bg-white/20 px-3 py-1 rounded-full">
                Verwacht: Mei 2026
              </span>
              <span className="font-sans text-sm font-bold border-b border-white/40 pb-0.5">
                Meld je aan voor de wachtlijst
              </span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Availability;