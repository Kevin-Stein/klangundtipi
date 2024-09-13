import React from "react";
import styled from "styled-components";

export default function DSGVO() {
  return (
      <>
          <StyledTitle>DATENSCHUTZHINWEISE</StyledTitle>
        <StyledDSGVOSection>
          <StyledTitleList>
            <li>
              <h2>
                Informationen über die Verarbeitung Ihrer Daten gemäß Art. 13 der Datenschutz-Grundverordnung (DS-GVO)
              </h2>
              <ol>
                <li>
                  <h3>Verantwortlicher und Datenschutzbeauftragter</h3>
                  <StyledFirstListItem>
                    <li>Verantwortlich für diese Website ist [Name, Postadresse, E-Mail-Adresse des Verantwortlichen].</li>
                    <li>
                      Verantwortlich für diese Website ist [Name, Postadresse, E-Mail-Adresse des Verantwortlichen]. oder
                      über die Adresse [ggf. auch die Postadresse des Datenschutzbeauftragten].
                    </li>
                  </StyledFirstListItem>
                </li>
                <li>
                  <h3>
                    Daten, die für die Bereitstellung der Website und die Erstellung der Protokolldateien verarbeitet werden
                  </h3>
                  <StyledList>
                    <li>
                      <h3>Welche Daten werden für welchen Zweck verarbeitet?</h3>
                      <p>
                        Bei jedem Zugriff auf Inhalte der Website werden vorübergehend Daten gespeichert, die möglicherweise
                        eine Identifizierung zulassen. Die folgenden Daten werden hierbei erhoben:
                      </p>
                      <StyledInnerList>
                        <li>Datum und Uhrzeit des Zugriffs</li>
                        <li>IP-Adresse</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>Website, von der aus die Website aufgerufen wurde</li>
                        <li>Websites, die über die Website aufgerufen werden</li>
                        <li>Besuchte Seite auf unserer Website</li>
                        <li>Meldung, ob der Abruf erfolgreich war</li>
                        <li>Übertragene Datenmenge</li>
                        <li>Informationen über den Browsertyp und die verwendete Version</li>
                        <li>Betriebssystem</li>
                      </StyledInnerList>
                      <p>
                        Die vorübergehende Speicherung der Daten ist für den Ablauf eines Websitebesuchs erforderlich, um
                        eine Auslieferung der Website zu ermöglichen. Eine weitere Speicherung in Protokolldateien erfolgt,
                        um die Funktionsfähigkeit der Website und die Sicherheit der informationstechnischen Systeme
                        sicherzustellen. In diesen Zwecken liegt auch unser berechtigtes Interesse an der Datenverarbeitung.
                      </p>
                    </li>
                    <li>
                      <h3>Auf welcher Rechtsgrundlage werden diese Daten verarbeitet?</h3>
                      <p>Die Daten werden auf der Grundlage des Art. 6 Abs. 1 Buchstabe f DS-GVO verarbeitet.</p>
                    </li>
    
                    <li>
                      <h3> Wie lange werden die Daten gespeichert?</h3>
                      <p>
                        Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung nicht mehr
                        erforderlich sind. Bei der Bereitstellung der Website ist dies der Fall, wenn die jeweilige Sitzung
                        beendet ist. Die Protokolldateien werden […, maximal bis zu 24 Stunden] direkt und ausschließlich
                        für Administratoren zugänglich aufbewahrt. Danach sind sie nur noch indirekt über die Rekonstruktion
                        von Sicherungsbändern verfügbar und werden nach […, maximal vier Wochen] endgültig gelöscht.
                      </p>
                    </li>
                  </StyledList>
                </li>
                <li>
                  <h3>Betroffenenrechte</h3>
                  <StyledList>
                    <li>
                      <h3> Recht auf Auskunft</h3>
                      <p>
                        Sie können Auskunft nach Art. 15 DS-GVO über Ihre personenbezogenen Daten verlangen, die wir
                        verarbeiten.
                      </p>
                    </li>
                    <li>
                      <h3>Recht auf Widerspruch</h3>
                      <p>Sie haben ein Recht auf Widerspruch aus besonderen Gründen (siehe unter Punkt II).</p>
                    </li>
                    <li>
                      <h3> Recht auf Berichtigung</h3>
                      <p>
                        Sollten die Sie betreffenden Angaben nicht (mehr) zutreffend sein, können Sie nach Art. 16 DS-GVO
                        eine Berichtigung verlangen. Sollten Ihre Daten unvollständig sein, können Sie eine
                        Vervollständigung verlangen.
                      </p>
                    </li>
                    <li>
                      <h3> Recht auf Löschung</h3>
                      <p>Sie können nach Art. 17 DS-GVO die Löschung Ihrer personenbezogenen Daten verlangen</p>
                    </li>
                    <li>
                      <h3>Recht auf Einschränkung der Verarbeitung</h3>
                      <p>
                        Sie haben nach Art. 18 DS-GVO das Recht, eine Einschränkung der Verarbeitung Ihrer personenbezogenen
                        Daten zu verlangen.
                      </p>
                    </li>
                    <li>
                      <h3>Recht auf Beschwerde</h3>
                      <p>
                        Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen
                        Datenschutzrecht verstößt, haben Sie nach Ar. 77 Abs. 1 DS-GVO das Recht, sich bei einer
                        Datenschutzaufsichtsbehörde eigener Wahl zu beschweren. Hierzu gehört auch die für den
                        Verantwortlichen zuständige Datenschutzaufsichtsbehörde: Landesbeauftragte für Datenschutz und
                        Informationsfreiheit Nordrhein-Westfalen, https://www.ldi.nrw.de/kontakt/ihre-beschwerde.
                      </p>
                    </li>
                    <li>
                      <h3>Recht auf Datenübertragbarkeit</h3>
                      <p>
                        Für den Fall, dass die Voraussetzungen des Art. 20 Abs. 1 DS-GVO vorliegen, steht Ihnen das Recht
                        zu, sich Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
                        automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Erfassung der Daten zur
                        Bereitstellung der Website und die Speicherung der Protokolldateien sind für den Betrieb der
                        Internetseite zwingend erforderlich. Sie beruhen daher nicht auf einer Einwilligung nach Art. 6 Abs.
                        1 Buchstabe a DS-GVO oder auf einem Vertrag nach Art. 6 Abs. 1 Buchstabe b DS-GVO, sondern sind nach
                        Art. 6 Abs. 1 Buchstabe f DS-GVO gerechtfertigt. Die Voraussetzungen des Art. 20 Abs. 1 DSGVO sind
                        demnach insoweit nicht erfüllt.
                      </p>
                    </li>
                  </StyledList>
                </li>
              </ol>
            </li>
            <li>
              <h2>Recht auf Widerspruch gemäß Art. 21 Abs. 1 DS-GVO</h2>
              <p>
                Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die
                Verarbeitung Ihrer personenbezogenen Daten, die aufgrund von Artikel 6 Abs. 1 Buchstabe f DS-GVO erfolgt,
                Widerspruch einzulegen. Der Verantwortliche verarbeitet die personenbezogenen Daten dann nicht mehr, es sei
                denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die die Interessen, Rechte und
                Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder
                Verteidigung von Rechtsansprüchen. Die Erfassung der Daten zur Bereitstellung der Website und die
                Speicherung der Protokolldateien sind für den Betrieb der Internetseite zwingend erforderlich.
              </p>
            </li>
          </StyledTitleList>
        </StyledDSGVOSection>
      </>
  );
}

const StyledDSGVOSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
 color: var(--color-primary-2);
`;

const StyledTitle = styled.h1`
  font-family: var(--font-secondary);
  text-align: center;
  font-size: 1.5rem;
    color: var(--color-primary-2);
`;
const StyledTitleList = styled.ol`
  list-style-type: upper-roman;
  font-size: .9rem;
  margin: 0;
    padding: 0;
`;
const StyledList = styled.ul`
  list-style-type: lower-alpha;
`;
const StyledInnerList = styled.ul`
  list-style-type: "- ";
`;
const StyledFirstListItem = styled.ul`
  list-style-type: none;
`;

