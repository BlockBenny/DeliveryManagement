# Coding Task - Deliver Management

## Hosting

Ich werde das Projekt noch auf meinem Server hosten.
Falls Ihr es lokal installieren und laufen lassen wollt, folgt bitte den Anweisungen im Projekt selbst.

- `git clone https://github.com/BlockBenny/DeliveryManagement.git`
- `cd deliverymanagement`
- `npm update`
- `npm run dev`

## Task

Entwickle eine Webapplikation, die es ermöglicht, Lieferungen zu verwalten und zu verfolgen. Die Applikation soll in der Lage sein, Lieferungen hinzuzufügen, zu bearbeiten und zu löschen. Jede Lieferung soll über folgende Felder verfügen:

```
"orderNumber" (string)
"status" (enum)
```

Das Enum "status" soll die folgenden Werte enthalten:

```
"DELIVERED": "Zugestellt"
"PAID": "Bezahlt"
"PAYMENT_OPEN": "Zahlung ausstehend"
```

Die Applikation soll es ermöglichen, das Feld "orderNumber" zu bearbeiten. Es soll auch ein Select-Menü für das Feld "status" vorhanden sein, in dem der Benutzer aus den oben aufgeführten Enum-Werten auswählen kann. Die Daten sollten im Browser persistiert werden. Die App soll in React und Node.js bei Bedarf unter Nutzung von Frameworks deiner Wahl umgesetzt werden.

Bitte hoste das Ergebnis auf GitHub und ermögliche uns den Zugriff darauf. Die App soll von uns einfach gestartet werden können. Bitte dokumentiere eventuelle notwendige Schritte dafür.

## Gedankengänge

### Erste Gedanken

Nach dem Erhalten des Coding Tasks und der Nachfrage bezüglich des Persistierens habe ich mich entschlossen, die Daten in einem Cookie serverseitig zu verarbeiten und im Browser zu speichern.

Dadurch, dass ich die Bonusaufgabe auch gleich mit ins Auge gefasst habe, wollte ich nicht erst ein Client JS gestütztes System bauen, sondern mich gleich auf die Anforderung 'ohne JS' konzentrieren.

Ohne JS First ist das Motto

Damit wir die Funktion auch ohne JS nutzen können, brauchen wir einen Server Side Rendering (SSR) Ansatz, bei dem die HTML page serverseitig gerendered wird und mit Forms arbeitet.

Da die Anforderung React und Node ist, habe ich mir zunächst gedacht eine React Website zu bauen, mit integrierten Node.js Server, welcher die Seite rendered und 'Submits' entgegennimmt, verarbeitet und in das Cookie schreibt.

Im gleichen Gedankengang kam mir dann Next.js in den Sinn, da dieses Framework genau das macht und man das Rad nicht neu erfinden muss. Ich beschloss, eine SSR Anwendung mit Next.js umzusetzen.

### Umsetzung

**Project Setup und erste Request/Responses**

Ich erstellte ein leeres Next.js Projekt mit Typescript, nannte es 'Deliverymanagement' und verkünpfte es mit dem erstellten GitHub Repository.

Nun ging es and die Anforderung. Ich installierte mir ein No-JS Firefox Plugin und erstellte mein erstes Input Feld mit Form Button.

Im API folder unter Pages erstellte ich dann einen Handler, welcher jeden Request entgegennimmt und verarbeitet.

Ich wollte zunächst mal schaffen, Daten vom Client zum Server zu bringen und zu verarbeiten - Ohne JS.

Nachdem das funktionierte habe ich mir das 'cookies-next' package geladen, welches die essenziellen Funktionen getCookie und setCookie hat, um Daten lokal zu speichern.

Nachdem die Daten verarbeitet werden, wird die Seite neu geladen und die eingetragenen Daten werden mit angezeigt.

**Umsetzung der Anforderung**

Zunächst habe ich mich mit der Erstellung eines neuen Eintrags beschäftigt, erstellte ein Input Feld für die Liefernummer und ein select Feld für den Lieferstatus + Speichern Button.

Als die Daten am Server angekommen sind, habe ich jeden Eintrag in ein Object-Array für das Cookie geschrieben

```
[{"orderNumber":"001", orderStatus:"PAID"},{"orderNumber":"002", orderStatus:"DELIVERED"}]
```

Als das funktionierte erstellte ich die Liste mit den schon vorhanden Einträgen und die 2 neuen Buttons Bearbeiten und Löschen.

Bei der Auflistung machte ich die Felder so, dass man Daten ändern kann und mit dem Bearbeiten Button werden diese gespeichert.

Ich musste den Handler für die beiden neuen funktionen erweitern und habe das Ganze danach getestet.

**Design, Test und Abschluss**

Ich wollte nicht allzu viel Zeit in das Design stecken und habe das Ehrenkind Logo, sowie einige CSS Anpassungen gemacht, damit das Tool ein bisschen freundlich aussieht.

Wichtig war mir, dass es sowohl ohne JS, als auch mit JS gleich aussieht.

Nachdem das Tool einigermaßen anzusehen war, habe ich alle möglichen Testfälle geprüft, den Code optimiert und das Ganze eingecheckt.

## Was Fehlt?

Natürlich wollte ich nicht zu viel Zeit in den Task stecken. Für die Erstgedanken, Project Setup und Umsetzung brauchte ich ca. 1,5 Stunden.

Ich mich deshalb auch bewusst dazu entschieden, einige Sachen wegzulassen, was im produktiven Betrieb ein No-Go wäre.

Hier ein paar Sachen, die ich noch umgesetzt hätte im 'echten Leben'

- Validierung auf Serverseite
- Erstellung von Klassen und Enums für das interne Verarbeiten
- Unit Tests
- Projektstruktur mit DataAcces, Model, Logic und View Schicht
- Datensicherung in einer DB + Mapping der Objekte
- Bearbeitungsseite für die Objekte zur klaren Differenzierung der Funktionen und besserer Übersicht
- Darstellen der Lieferungen in einer Table mit Suche, Filter und Sortierung.

Da könnte man ewig so weitermachen.

## Abschlussgedanken

Besonders gefallen hat mir der No-JS Ansatz, da ich seit der Ausbildung nicht mehr mit diesem Ansatz gearbeitet habe. Natürlich gibt es noch etliche Anwendungsfälle für einen solchen Ansatz und konnte deshalb ein bisschen was lernen.

Mit diesem Text beläuft sich die Gesamtzeit auf ca. 2 Stunden

Leider kann so ein kurzer Task nicht ansatzweise das widerspiegeln, was im realen Betrieb gemacht werden muss. Hier ist es ein 'Ich gucke, dass es geht' Ansatz ohne Gedanken über Gesamtarchitektur, Security und richtiges Testen.

Hat Spaß gemacht!

Vielen Dank für das kleine Projekt und hoffentlich bis bald :)

Benny
