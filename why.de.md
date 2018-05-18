# Warum brauchen Reise-Apps HTTPS?

[**TDLR: HTTPS is wichtig.**](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https)

---

Wir benutzen Reise-Apps für Routenplanung in vielen Bereichen unseres Lebens. Deswegen übermitteln sie sehr sensible Informationen über uns:

- Die Namen von [POIs](https://de.wikipedia.org/wiki/Point_of_Interest) ermöglichen Rückschlüsse auf das Arbeits- und Privatleben der Nutzenden.
- Man könnte tägliche, wöchentliche und monatliche Muster erkennen, bspw. wie of eine Person ihre Ärztin besucht.
- Viele Anfragen werden kurz vor einer Fahrt gemacht, sodass die Muster in den Daten beinahe in Echtzeit Aussagen ermöglichen.

Abgesehen von der Tatsache, dass all diese Informationen bei dem Anbieter der App landen, **sollten man sie nicht auf dem Weg dorthin abfangen können**. Es ist erwiesen, dass:

- sowohl Personen mit krimineller Motivation als auch Anbieter von Wifi-/Internetinfrastruktur Daten darüber sammeln, wonach Nutzende wann und wo suchen,
- großflächige Massenüberwachung an vielen Stellen zwischen Nutzenden und App-Anbieter genutzt wird.

Obwohl es hard ist, gegen alle diese Gefahren zu schützen, **können eine ganze Gruppe dieser durch verschlüsselte Übertragung verhindert werden**.

Man könnte argumentieren, dass es im Jahr 2018 einfach unverantwortlich ist, Reise-Apps unverschlüsselt kommunizieren zu lassen.

## Wie machen wir es besser?

- besorgt euch ein [SSL certificate](https://de.wikipedia.org/wiki/Transport_Layer_Security#TLS_in_der_Praxis) (kostenlos mit [LetsEncrypt](https://letsencrypt.org))
- aktiviert [HTTPS](https://en.wikipedia.org/wiki/HTTPS) in eurem Webserver
- am Wichtigsten: **stellt eure Apps um, sodass sie *nur* HTTPS verwenden**
- leitet HTTP-Requests zu HTTPS um
