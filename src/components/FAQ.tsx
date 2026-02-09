import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
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
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`${index !== faqItems.length - 1 ? 'border-b border-ink/10' : ''}`}
            >
              <button
                onClick={() => toggleOpen(item.id)}
                className="w-full py-6 flex items-start justify-between gap-4 hover:text-gold transition-colors duration-200 text-left group"
              >
                <span className="font-sans font-medium text-lg text-ink group-hover:text-gold transition-colors duration-200">
                  {item.question}
                </span>
                <div className="flex-shrink-0 text-gold mt-1">
                  {openId === item.id ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              {openId === item.id && (
                <div className="pb-6 animate-in fade-in duration-200">
                  <p className="font-sans text-ink/70 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
