# Webbutveckling 3 - Moment 2

## Syfte med automatisering ##
Varför inte underlätta det arbete du lägger ner? Visst kan det verka som en liten sak att kopiera filer och uppdatera dessa på olika platser, men slår du ihop alla hundratals gånger som du måste göra detta under ett projekt så blir det en ganska lång tid. Automatisera, så slipper du!

## Paket som ingår ##
1. Gulp - Öppnar upp för användandet av automatisering.
2. Gulp clean-css - Minifierar CSS-filer för att dessa skall bli så små som möjligt.
3. Gulp uglify - Minifierar JavaScript-filer för att dessa skall bli så små som möjligt.
4. Gulp concat - Slår ihop filer med samma filändelser till en och samma fil.

## Tasks ##
1. Default - Körs när du initierar gulp, håller koll på dina filer och om dessa uppdateras.
2. Watch - Säger till vilka filändelser, i vilka mappar, som skall övervakas och skickar sedan dessa till de korrekta tasksen för uppdatering.
3. Update-images - Uppdaterar filer i mappen "src/images".
4. Update-html - Uppdaterar filer i mappen "src/html" med filändelsen .html.
4. Minify-js - Konkatinerar och minifierar filer i mappen src/js med filändelsen .js.
5. Minify-css - Konkatinerar och minifierar filer i mappen "src/css" med filändelsen .css.
