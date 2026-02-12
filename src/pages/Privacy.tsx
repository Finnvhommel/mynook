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
          Laatst bijgewerkt: 12 februari 2026
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
              MyNook is ontworpen om uw privacy te waarborgen. De kernfunctionaliteit werkt lokaal, maar wij verzamelen beperkte anonieme gegevens om de app te verbeteren.
            </p>
            <ul className="space-y-4 ml-4">
              <li>
                <strong>Persoonlijke gegevens:</strong> Wij verzamelen, bewaren of verzenden geen persoonlijk identificeerbare informatie (zoals namen, e-mailadressen of telefoonnummers).
              </li>
              <li>
                <strong>App-gebruiksstatistieken (Lokaal):</strong> Gedetailleerde informatie over welke specifieke apps u blokkeert, wordt uitsluitend lokaal op uw apparaat opgeslagen.
              </li>
              <li>
                <strong>Anonieme Prestatiegegevens (Cloud):</strong> Om inzicht te krijgen in de stabiliteit en het gebruik van de app, verzenden wij na een sessie automatisch een anoniem logbestand naar onze database. Deze gegevens bevatten:
                <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
                  <li>Een willekeurig gegenereerd anoniem ID (niet te herleiden naar uw persoon).</li>
                  <li>De naam en duur (in minuten) van uw focussessie.</li>
                  <li>Technische specificaties (Toesteltype, Android-versie en App-versie) voor het oplossen van bugs.</li>
                </ul>
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
              Wij verkopen, verhandelen of delen geen gegevens met derden. Er is geen advertentienetwerk of analyse-software van derden in de app aanwezig die uw gedrag volgt voor commerciële doeleinden. De anonieme prestatiegegevens worden uitsluitend door het ontwikkelingsteam van MyNook gebruikt.
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