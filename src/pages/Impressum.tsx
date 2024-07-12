import React from 'react';

export function Impressum() {
  return (
    <section className="p-4 max-w-3xl mx-auto">
      <h2 className="text-center font-semibold text-2xl">Impressum</h2>
      <div className="bg-white rounded-lg p-6 mt-8 shadow-lg">
        <h3 className="font-semibold text-xl mb-4">Angaben gemäß § 5 TMG</h3>
        <p>
          Max Muster<br />
          Musterweg<br />
          12345 Musterstadt<br />
        </p>

        <h3 className="font-semibold text-xl mt-6 mb-4">Vertreten durch:</h3>
        <p>
          Max Muster<br />
        </p>

        <h3 className="font-semibold text-xl mt-6 mb-4">Kontakt</h3>
        <p>
          Telefon: 01234-789456<br />
          Fax: 1234-56789<br />
          E-Mail: <a href="mailto:max@muster.de" className="text-main hover:underline">max@muster.de</a><br />
        </p>

        <h3 className="font-semibold text-xl mt-6 mb-4">Registereintrag</h3>
        <p>
          Eintragung im Registergericht: Musterstadt<br />
          Registernummer: 12345<br />
        </p>

        <h3 className="font-semibold text-xl mt-6 mb-4">Umsatzsteuer-ID</h3>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: Musterustid.<br />
        </p>

        <h3 className="font-semibold text-xl mt-6 mb-4">Wirtschafts-ID</h3>
        <p>
          Musterwirtschaftsid<br />
        </p>

        <h3 className="font-semibold text-xl mt-6 mb-4">Aufsichtsbehörde</h3>
        <p>
          Musteraufsicht Musterstadt<br />
        </p>

        <h3 className="font-semibold text-xl mt-6 mb-4">Haftungsausschluss</h3>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <h3 className="font-semibold text-xl mt-6 mb-4">Datenschutz</h3>
        <p>
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
        </p>
        <p>
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          Website Impressum erstellt durch <a href="https://www.impressum-generator.de" className="text-main hover:underline">impressum-generator.de</a> von der Kanzlei Hasselbach.
        </p>
      </div>
    </section>
  );
}
