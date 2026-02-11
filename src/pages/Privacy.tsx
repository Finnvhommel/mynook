import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="bg-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link
          to="/"
          className="flex items-center gap-2 text-ink/60 hover:text-gold transition-colors duration-200 mb-12 font-sans w-fit"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Terug naar Home</span>
        </Link>

        <h1 className="font-serif text-5xl md:text-6xl font-bold text-ink mb-4">
          Privacybeleid
        </h1>

        <p className="font-sans text-ink/60 mb-12 text-sm">
          Laatst bijgewerkt: 8 februari 2026
        </p>

        <div className="font-sans text-ink/70 leading-relaxed space-y-8">
          <p>
            MyNook ("wij", "ons", of "onze") hecht grote waarde aan uw privacy. Dit privacybeleid legt uit hoe wij omgaan met gegevens binnen de MyNook-applicatie.
          </p>

          <div>
            <h2 className="font-serif text-2xl font-bold text-ink mb-4">
              1. Gegevensverzameling en Gebruik
            </h2>
            <p className="mb-3">
              MyNook is ontworpen om volledig lokaal op uw apparaat te werken.
            </p>
            <ul className="space-y-3 ml-4">
              <li>
                <strong>Persoonlijke gegevens:</strong> Wij verzamelen, bewaren of verzenden geen persoonlijk identificeerbare informatie (zoals namen, e-mailadressen of telefoonnummers) naar externe servers.
              </li>
              <li>
                <strong>App-gebruiksstatistieken:</strong> Informatie over welke apps u blokkeert of hoe lang u gefocust bent, wordt uitsluitend lokaal op uw apparaat opgeslagen in de beveiligde opslag van de app. Wij hebben geen toegang tot deze gegevens.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-ink mb-4">
              2. Gevoelige Machtigingen
            </h2>
            <p className="mb-3">
              Om de kernfunctionaliteit van de app te bieden, vragen wij de volgende machtigingen:
            </p>
            <ul className="space-y-3 ml-4">
              <li>
                <strong>Toegankelijkheidsservice (Accessibility Service):</strong> Wij gebruiken deze service uitsluitend om te detecteren welke app op de voorgrond draait, zodat wij afleidende apps kunnen blokkeren wanneer een sessie actief is. Wij verzamelen of verzenden geen tekstinvoer of scherminhoud.
              </li>
              <li>
                <strong>Meldingstoegang (Notification Listener):</strong> Dit wordt gebruikt om meldingen van geblokkeerde apps tijdelijk te onderdrukken tijdens een actieve Nook-sessie.
              </li>
              <li>
                <strong>NFC (Near Field Communication):</strong> Wordt uitsluitend gebruikt om de unieke ID van een tag te lezen om een sessie te starten of te stoppen.
              </li>
              <li>
                <strong>QUERY_ALL_PACKAGES:</strong> Deze machtiging is noodzakelijk om u een lijst van uw geïnstalleerde applicaties te tonen, zodat u zelf kunt kiezen welke apps u wilt blokkeren.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-ink mb-4">
              3. Delen van Gegevens met Derden
            </h2>
            <p>
              Wij verkopen, verhandelen of delen geen gegevens met derden. Er is geen advertentienetwerk of analyse-software van derden in de app aanwezig die uw gedrag volgt.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-ink mb-4">
              4. Opslag en Beveiliging
            </h2>
            <p>
              Alle instellingen en sessiegeschiedenis worden opgeslagen in de SharedPreferences van uw apparaat. Deze gegevens worden verwijderd wanneer u de applicatie deïnstalleert.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-ink mb-4">
              5. Contact
            </h2>
            <p>
              Als u vragen heeft over dit privacybeleid, kunt u contact met ons opnemen via:{' '}
              <a href="mailto:finnvhommel@gmail.com" className="text-gold hover:underline">
                finnvhommel@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}