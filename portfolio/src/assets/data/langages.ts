// List of all of the langages i learned 

// imports
import BashLogo from '../langage/gnubash.svg?react';
import PythonLogo from '../langage/python.svg?react';
import HtmlLogo from '../langage/html5.svg?react';
import CssLogo from '../langage/css.svg?react';
import JavaScriptLogo from '../langage/javascript.svg?react';
import SqlLogo from '../langage/sql.svg?react';
import JavaLogo from '../langage/java.svg?react';
import PhpLogo from '../langage/php.svg?react';
import CLogo from '../langage/c.svg?react';
import HaskellLogo from '../langage/haskell.svg?react';
import RustLogo from '../langage/rust.svg?react';
import TypeScriptLogo from '../langage/typescript.svg?react'

// list 
const languages = [
    {
        name: "Bash",
        logo: BashLogo,
        description: "Automatisation de tâches et scripts en environnement Unix.",
        learned: "2023",
        flag: "École"
    },
    {
        name: "Python",
        logo: PythonLogo,
        description: "Langage interprété utilisé pour l'écriture de scripts, l'implémentation d'algorithme et le traitement de données.",
        learned: "2023",
        flag: "École"
    },
    {
        name: "HTML",
        logo: HtmlLogo,
        description: "Langage de balise utile pour la structure sémantique de pages web.",
        learned: "2024",
        flag: "École"
    },
    {
        name: "CSS",
        logo: CssLogo,
        description: "Langage de feuille de style permettant une mise en page responsive, des animations et des designs UI pour les pages web.",
        learned: "2024",
        flag: "École"
    },
    {
        name: "JavaScript",
        logo: JavaScriptLogo,
        description: "Langage interprété permettant l'interaction avec les pages et applications web.",
        learned: "2024",
        flag: "École"
    },
    {
        name: "SQL",
        logo: SqlLogo,
        description: "Langage normalisé servant à la conception et aux requêtes de base de données relationnelles.",
        learned: "2024",
        flag: "École"
    },
    {
        name: "Java",
        logo: JavaLogo,
        description: "Langage orienté objet accés sur le développement d'applications robustes. Le meilleur langage (selon moi biensûr).",
        learned: "2024",
        flag: "École"
    },
    {
        name: "PHP",
        logo: PhpLogo,
        description: "Langage de programmation orienté backend qui permet la génération de contenu dynamique.",
        learned: "2024",
        flag: "École"
    },
    {
        name: "C",
        logo: CLogo,
        description: "Programmation bas niveau avec gestion de mémoire.",
        learned: "2024",
        flag: "École"
    },
    {
        name: "Haskell",
        logo: HaskellLogo,
        description: "Langage de programmation fonctionnelle utilisant une logique déclarative.",
        learned: "2025",
        flag: "École"
    },
    {
        name: "Rust",
        logo: RustLogo,
        description: "Programmation système sûre et performante qui permet plus de flexibilité sur la gestion de mémoire.",
        learned: "2025",
        flag: "Temps-Libre"
    },
    {
        name: "TypeScript",
        logo: TypeScriptLogo,
        description: "Considéré comme une extension de JavaScript, utilisant des types déclarés pour une programmation plus sûre.",
        learned: "2026",
        flag: "Temps-Libre"
    }
]

export default languages;