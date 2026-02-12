# Portfolio de Haku-48

Portfolio de Haku-48

## Why

En tant qu'étudiant en informatique, j'ai compris l'importance d'un portfolio quand ma recherche de stage a commencé. Un portfolio, c'est la porte d'entré des compétences d'un développeur. Il faut toujours un endroit pour pouvoir présenter ses différents projets ainsi que ses compétences.

Aprés avoir commencé à développer un portfolio en **HTML+CSS+Javascript**, j'ai voulu aller plus loin encore afin d'apprendre à utiliser les outils suivant :

- TailwindCSS : Pour moi qui ait quelques problèmes avec CSS, ce framework facilite grandement l'attribution de règles de styles en utilisant des classes avec des règles déja définies.
- React : Bien que j'ai découvert cette bibliothèque JavaScript lors de ma deuxième année d'étude, la mettre en pratique dans le développement de ce portfolio me permet de découvrir encore plus de ses fonctionnalitées.
- Vite : L'utilisation de vite m'a permis d'initialiser et de gérer de façon claire le build de mon portfolio ainsi que son execution
- TypeScript : Ayant été initié à JavaScript en première année d'étude, la découverte de TypeScript m'a obligé à fournir un code plus strict au regard des types afin de maximiser sa fiabilité.

## Mise en place d'une structure Responsive

TailwindCSS implémente des règles qui permettent d'avoir une structure **Responsive**, _cad_ qui répond différement selon la taille de l'écran sur lequel le portfolio apparait. Mon Portfolio est ainsi adapté à n'importe quelle taille d'écran, même si certaines informations ne pourront pas apparaitre sur des écran trop petits et sont donc remplacés par des messages indicatifs

## Limitations du nombre de requêtes GET
Afin de limiter le nombre de requêtes GET :
* Conversions des différentes images *png* en *webp* via **convertio.co**.
* Utilisation du plugin **SVGR** afin de ne pas créer de requêtes pour les nombreux fichiers *svg* utilisés.

# Commandes

Lancer en mode developpeur

```bash
npm run dev
```

Avoir une preview de prod

```bash
npm run build
npm run preview
```
