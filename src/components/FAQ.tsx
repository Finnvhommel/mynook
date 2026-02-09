import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string | React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Welke tags kan ik gebruiken?',
    answer: 'Vrijwel elke NFC-tag werkt. Denk aan je bankpas, OV-chipkaart of studentenpas',
  },
  {
    id: 2,
    question: 'Is MyNook gratis?',
    answer: 'De huidige testversie is volledig gratis. We geloven in digitale rust voor iedereen.',
  },
  {
    id: 3,
    question: 'Wat gebeurt er met mijn data?',
    answer: 'Niets. Je data is van jou. Alles blijft 100% lokaal op je eigen apparaat.',
  },
  {
    id: 4,
    question: 'Wat is een Nook?',
    answer: (
      <div className="flex flex-col items-start text-left opacity-90 mt-2">
        <div className="flex flex-wrap items-baseline gap-3 border-b border-ink/20 pb-2 mb-3 w-fit">
          <h2 className="font-serif text-3xl font-bold text-ink tracking-tight">
            nook
          </h2>
          <p className="font-serif italic text-sm text-ink/60">
            [noek] zn.
          </p>
        </div>
        
        <p className="font-serif text-lg text-ink/80 leading-relaxed max-w-xl">
          een kleine ruimte of hoekje, met name een die rust en geborgenheid biedt.
        </p>
      </div>
    ),
  },
];

function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-16 text-center">
          Veelgestelde vragen
        </h2>

        <div className="space-y-0">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`${index !== faqItems.length - 1 ? 'border-b border-ink/10' : ''}`}
              >
                <button
                  onClick={() => toggleOpen(item.id)}
                  className="w-full py-6 flex items-start justify-between gap-4 hover:text-gold transition-colors duration-200 text-left group"
                >
                  <span className={`font-sans font-medium text-lg transition-colors duration-200 ${isOpen ? 'text-gold' : 'text-ink group-hover:text-gold'}`}>
                    {item.question}
                  </span>
                  
                  {/* Icoon met rotatie-animatie */}
                  <div className={`flex-shrink-0 text-gold mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {/* DE ANIMATIE MAGIC */}
                <div 
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'}
                  `}
                >
                  <div className="overflow-hidden">
                    {/* Inhoud container */}
                    <div className="font-sans text-ink/70 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;