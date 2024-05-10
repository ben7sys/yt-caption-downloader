# yt-caption-downloader
a simple youtube caption downloader using youtube api

# Inspiration:
https://github.com/1c7/Youtube-Auto-Subtitle-Download
Script injection mit Tampermonkey Browser Erweiterung

Da kann ich mir das sparen:

:D :) :( :( :(

Bitte hilf mir mein Konzept für mein Projekt yt-caption-downloader zu verbessern und zu perfektionieren.
Ich suche eine schnelle, sichere aber einfache Möglichkeit, mithilfe der YouTube API die Subtitles eines YouTube-Videos herunterzuladen.

Ich möchte gerne ein Benutzer-Webinterface haben.
Später soll die Webseite auf einem Docker-Container Web-Server verfügbar sein.

Das Webinterface:
Ein Eingabefeld für die Youtube-Url und ein Pfeilbutton der auch mit Enter ausgeführt wird
Von der eingebenen YT-Url sollen nun alle verfügbaren Subtitels in einer Liste unterhalb angezeigt werden
In der Liste befindet sich ein Download-Button für jedes gefundene Subtitle
Der Download Button löst den Download des gewählten Subtitels als Textdatei auf das lokale Filesystem aus (Browser Download Dialog)
Es wird zudem ein Einstellungsfenster benötigt in dem folgende Einstellungen vorgenommen werden können:
YOUTUBE_API_KEY
LANGUAGE1 
LANGUAGE2

Dateistruktur von Github Copilot

```
yt-caption-downloader/
├── Dockerfile
├── README.md
├── package.json
├── src/
│   ├── index.js
│   ├── api/
│   │   ├── youtube.js
│   ├── components/
│   │   ├── App.js
│   │   ├── Settings.js
│   │   ├── VideoInput.js
│   │   ├── SubtitleList.js
│   │   ├── SubtitleDownloadButton.js
│   ├── utils/
│   │   ├── validateUrl.js
│   ├── config/
│   │   ├── index.js
├── public/
│   ├── index.html
│   ├── css/
│   │   ├── main.css
├── tests/
│   ├── api/
│   │   ├── youtube.test.js
│   ├── components/
│   │   ├── App.test.js
│   │   ├── Settings.test.js
│   │   ├── VideoInput.test.js
│   │   ├── SubtitleList.test.js
│   │   ├── SubtitleDownloadButton.test.js
│   ├── utils/
│   │   ├── validateUrl.test.js
├── .env
├── .gitignore
```

In dieser Struktur:

- Dockerfile enthält die Anweisungen zum Erstellen Ihres Docker-Containers.
- README.md ist die Dokumentation Ihres Projekts.
- package.json enthält die Metadaten Ihres Projekts und seine Abhängigkeiten.
- src/ enthält den Quellcode Ihrer Anwendung.
- public/ enthält statische Dateien wie HTML und CSS.
- tests/ enthält Ihre Testdateien.
- .env enthält Umgebungsvariablen wie Ihre YouTube-API-Schlüssel.
- .gitignore listet die Dateien und Verzeichnisse auf, die von Git ignoriert werden sollen.


# Um mit Ihrem Projekt zu beginnen, folgen Sie diesen Schritten:

1. **Projektverzeichnis erstellen**: Erstellen Sie ein neues Verzeichnis für Ihr Projekt und navigieren Sie in dieses Verzeichnis.

```bash
mkdir yt-caption-downloader
cd yt-caption-downloader
```

2. **Node.js-Projekt initialisieren**: Initialisieren Sie ein neues Node.js-Projekt in diesem Verzeichnis.

```bash
sudo apt install nodejs npm -y
npm init -y
```

3. **Verzeichnisse erstellen**: Erstellen Sie die Verzeichnisse, die in der Dateistruktur aufgeführt sind.

```bash
mkdir -p src/api src/components src/utils src/config public/css tests/api tests/components tests/utils
```

4. **Dateien erstellen**: Erstellen Sie die Dateien, die in der Dateistruktur aufgeführt sind.

```bash
touch Dockerfile README.md package.json src/index.js src/api/youtube.js src/components/App.js src/components/Settings.js src/components/VideoInput.js src/components/SubtitleList.js src/components/SubtitleDownloadButton.js src/utils/validateUrl.js src/config/index.js public/index.html public/css/main.css .env .gitignore
```

5. **Pakete installieren**: Installieren Sie die Pakete, die Sie für Ihr Projekt benötigen. Zum Beispiel könnten Sie `express` für den Server, `axios` für HTTP-Anfragen und `dotenv` für die Umgebungsvariablenverwaltung benötigen.

```bash
npm install express axios dotenv
```

**Weitere Befehle**

```bash
npm test
```

6. **Code schreiben**: Beginnen Sie mit dem Schreiben Ihres Codes. Sie könnten mit dem Hauptservercode in `src/index.js` beginnen und dann die einzelnen Komponenten und Hilfsfunktionen implementieren.

7. **Testen**: Schreiben Sie Tests für Ihren Code und führen Sie diese aus, um sicherzustellen, dass alles wie erwartet funktioniert.

8. **Dokumentation**: Aktualisieren Sie Ihre `README.md`-Datei mit Anweisungen zur Installation und Verwendung Ihres Projekts.

9. **Dockerisierung**: Schreiben Sie Ihr `Dockerfile` und testen Sie die Dockerisierung Ihrer Anwendung.

10. **Deployment**: Wenn Sie mit der Entwicklung fertig sind und alle Tests bestanden haben, können Sie Ihre Anwendung bereitstellen.



