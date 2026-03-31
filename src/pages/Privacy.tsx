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
          Privacybeleid MyNook
        </h1>

        <p className="font-sans text-ink/60 mb-12 text-sm">
          Laatst bijgewerkt: 31 maart 2026
        </p>

        <div className="font-sans text-ink/70 leading-relaxed space-y-8">
          <p>
            MyNook ("wij", "ons", of "onze") hecht grote waarde aan uw privacy. Dit privacybeleid legt uit hoe wij omgaan met gegevens binnen de MyNook-applicatie, inclusief de nieuwe functies voor accountbeheer en cloud-synchronisatie.
          </p>

          <div>
            <h2 className="font-serif text-2xl font-bold text-ink mb-4">
              1. Gegevensverzameling en Gebruik
            </h2>
            <p className="mb-3">
              MyNook is ontworpen om uw focus te verbeteren met respect voor uw privacy. Wij verzamelen de volgende gegevens:
            </p>
            <ul className="space-y-4 ml-4">
              <li>
                <strong>Accountgegevens:</strong> Wanneer u ervoor kiest om een back-up van uw gegevens te maken via Google Sign-in, verzamelen wij uw e-mailadres en gebruikersnaam. Als u de app anoniem gebruikt, slaan wij alleen een unieke gebruikersnaam en een willekeurig gegenereerd ID op.
              </li>
              <li>
                <strong>Sessiegegevens (Cloud & Lokaal):</strong> Voor gebruikers die zijn ingelogd (anoniem of via Google), worden sessiegegevens (zoals starttijd, duur en het gekozen focusdoel) gesynchroniseerd met onze beveiligde database (Firebase). Dit zorgt ervoor dat u uw voortgang niet verliest bij het wisselen van toestel.
              </li>
              <li>
                <strong>App-gebruiksstatistieken (Lokaal):</strong> Informatie over welke specifieke apps u blokkeert, wordt uitsluitend lokaal op uw apparaat opgeslagen en nooit verzonden naar onze servers.
              </li>
              <li>
                <strong>Technische Gegevens:</strong> Wij verzamelen basisinformatie zoals toesteltype en Android-versie voor het oplossen van bugs en het verbeteren van de stabiliteit.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-ink mb-4">
              2. Gevoelige Machtigingen
            </h2>
            <p className="mb-3">
              Om de kernfunctionaliteit te bieden, gebruikt MyNook de volgende machtigingen:
            </p>
            <ul className="space-y-3 ml-4">
              <li>
                <strong>Toegankelijkheidsservice (Accessibility Service):</strong> Uitsluitend om te detecteren welke app op de voorgrond draait, om afleidende apps te kunnen blokkeren. Wij verzamelen geen tekstinvoer of scherminhoud.
              </li>
              <li>
                <strong>Meldingstoegang:</strong> Om meldingen van geblokkeerde apps te onderdrukken tijdens een sessie.
              </li>
              <li>
                <strong>NFC:</strong> Om unieke ID's van tags te lezen voor het starten/stoppen van sessies.
              </li>
              <li>
                <strong>Bluetooth:</strong> Wordt uitsluitend gebruikt voor de "Samen Focussen" modus om nabijgelegen buddy's te identificeren.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-ink mb-4">
              3. Account- en Gegevensverwijdering
            </h2>
            <p className="mb-3">
              Wij geloven dat u de volledige controle moet hebben over uw gegevens.
            </p>
            <ul className="space-y-3 ml-4">
              <li>
                <strong>In-app verwijdering:</strong> U kunt op elk moment via de instellingen in de app uw volledige account en alle bijbehorende sessiegeschiedenis definitief verwijderen.
              </li>
              <li>
                <strong>Extern verzoek:</strong> Indien u de app niet meer heeft geïnstalleerd en uw gegevens wilt laten verwijderen, kunt u een verzoek indienen via <a href="mailto:finnvhommel@gmail.com" className="text-gold hover:underline">finnvhommel@gmail.com</a>. Wij zullen uw gegevens dan binnen 30 dagen permanent uit onze systemen wissen.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-ink mb-4">
              4. Delen van Gegevens
            </h2>
            <p>
              Wij verkopen of verhandelen uw gegevens niet met derden. Wij maken gebruik van Google Firebase voor de opslag van accounts en sessiegegevens. Deze gegevens worden uitsluitend gebruikt voor de functionaliteit van MyNook.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-ink mb-4">
              5. Opslag en Beveiliging
            </h2>
            <p>
              Gegevens in de cloud worden beveiligd via Firebase Authentication en Firestore Security Rules. Lokale gegevens worden opgeslagen in de beveiligde opslag (SharedPreferences) van uw toestel.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-ink mb-4">
              6. Contact
            </h2>
            <p>
              Bij vragen of verzoeken omtrent uw privacy kunt u contact met ons opnemen via:{' '}
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