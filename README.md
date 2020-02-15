# Tagebuch-App "Memory"

**Studienarbeit Mobile Applikationen WS 2019/20**

**Cross-Platform: Ionic 4 & Angular**

**Verfasser: Lisa Okezie**

## Beschreibung

Der Nutzer kann Tagebucheinträge mit einer Überschrift und Text erstellen. Zusätzlich können die Einträge mit einem Standort und eigenen Tags versehen und als Favorit markiert werden. Beim Hinzufügen und Bearbeiten-Modus kann der Nutzer die entsprechenden Felder für Titel und Text ausfüllen/bearbeiten. Zusätzlich lässt sich ein Modal mit weiteren Bearbeitungsmöglichkeiten wie dem markieren als Favorit, dem Hinzufügen von Tags sowie der Eingabe eines Standorts, öffnen.

In der Detailansicht werden alle angegebenen Informationen dargestellt und der Nutzer hat die Möglichkeit den Eintrag zu bearbeiten oder zu löschen.

In der Listenansicht werden alle Tagebucheinträge ausgegeben, während auf der Übersichtsseite nach Favoriten und Tags gefiltert werden kann.

In den Einstellungen kann der Nutzer eine tägliche Erinnerung einstellen und den Namen des Tagebuchs ändern.


## Probleme

Bei der Entwicklung der App bin ich auf folgende Probleme gestoßen:

###Hinzufügen von Bildern

- Sowohl mit capacitor als auch mit dem Cordova Plugin ausprobiert.
- Kein Imagepicker für die Browser Ansicht, kein Testen der Kamerafunktion im Simulator möglich
- Der Dateipfad der Bilder ließ sich nicht in einem Array speichern und weiter verarbeiten
- Ursprüngliche Verwendung: Bilder zu den Einträgen hinzufügen
- Konsequenz: Funktion weggelassen


### Testen der App auf dem iPhone 

Ich habe die App mit Capacitor gebuildet und den iOS Code in Xcode geöffnet. Dort konnte ich die  App auf dem Simulator testen. Das Installieren der App auf einem iPhone 11  hat zwar funktiniert, jedoch stürtzte die App direkt nach dem Öffnen wieder ab.

Auch die Suche in den verschiedenen Foren sowie in der Ionic / Capacitor Dokumentation zu diesem Problem blieb erfolglos wodurch ich meine iOS App nicht auf einem richtigen Gerät testen konnte. 


## Verwendete Materialien

**Google Fonts**

- Source Sans Pro: https://fonts.google.com/specimen/Source+Sans+Pro
- Lato: https://fonts.google.com/specimen/Lato
