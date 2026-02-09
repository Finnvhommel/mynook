import { NfcIcon, Users, Shield } from 'lucide-react';

function Features() {
  const features = [
    {
      icon: NfcIcon,
      title: 'Geen afleiding',
      description: 'Scan een tag om door jou geselecteerde apps te blokkeren. Scan de tag opnieuw om weer toegang te krijgen tot de apps',
    },
    {
      icon: Users,
      title: 'Samen Sterker',
      description: "Ga je samen studeren? Houd elkaars telefoon tegen elkaar aan om samen een sessie te starten. Motiveer vrienden zonder afleiding.",
    },
    {
      icon: Shield,
      title: 'Privacy Eerst',
      description: 'Jouw data verlaat je telefoon nooit. Geen accounts, geen tracking, puur lokaal.',
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white/40 backdrop-blur-sm p-8 rounded-lg border border-ink/10 hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-ink mb-4">
                  {feature.title}
                </h3>
                <p className="font-sans text-ink/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
