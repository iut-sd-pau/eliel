# Invitation - Anniversaire d'Eliel (1 an)

Site d'invitation interactif : enveloppe cliquable -> ouverture animee avec son
-> invitation complete (photo, animations, ballons, confettis, musique de fond, dress code).

## Contenu du dossier
- `index.html` - la page
- `style.css` - le design
- `script.js` - les interactions (ouverture, son, confettis, compte a rebours)
- `assets/eliel.jpg` - la photo
- `assets/music.mp3` - musique de fond (boucle)
- `assets/open.mp3` - son d'ouverture de l'enveloppe

## Mettre en ligne avec GitHub Pages (gratuit)

1. Cree un nouveau repo GitHub (public), par exemple `invitation-eliel`.
2. Mets tous les fichiers de ce dossier (en gardant la structure, y compris le
   dossier `assets/`) a la racine du repo.
3. Va dans **Settings > Pages** du repo.
4. Dans "Build and deployment", choisis **Deploy from a branch**, branche
   `main`, dossier `/ (root)`, puis **Save**.
5. Au bout d'une a deux minutes, le site sera disponible a une adresse du type :
   `https://TON-PSEUDO-GITHUB.github.io/invitation-eliel/`
6. Partage ce lien sur WhatsApp - il s'affiche comme un lien cliquable classique,
   et s'ouvre dans le navigateur avec toutes les animations et le son.

## Notes
- Le son ne se lance qu'apres le clic sur l'enveloppe (obligatoire sur mobile,
  aucun navigateur n'autorise la musique automatique avant une interaction).
- La date de la fete (17 juillet 2026, 12h00) est definie dans `script.js`
  (variable `target` dans `startCountdown`) si jamais tu dois la modifier.
- Pour changer un texte (lieu, dress code, heure...), tout se trouve
  directement et lisiblement dans `index.html`.
