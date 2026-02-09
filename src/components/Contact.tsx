import { Mail } from 'lucide-react';

function Contact() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6">
          Contact
        </h2>
        <p className="font-sans text-lg text-ink/70 mb-12 leading-relaxed">
          Vragen, suggesties of feedback? We horen het graag van je.
        </p>
        <a
          href="mailto:finnvhommel@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 border-2 border-ink/30 text-ink font-sans font-medium text-lg rounded-lg hover:border-gold hover:text-gold transition-all duration-300 hover:shadow-lg"
        >
          <Mail className="w-5 h-5" />
          <span>Stuur een bericht</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
