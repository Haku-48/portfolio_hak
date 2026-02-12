// List of all the tools i learned to use

// imports 
import GitLogo from '../tools/git.svg?react';
import VSCLogo from '../tools/vscode.svg?react';
import PostGresLogo from '../tools/postgresql.svg?react';
import NodeLogo from '../tools/nodedotjs.svg?react';
import ReactLogo from '../tools/react.svg?react';
import IntellijLogo from '../tools/intellij.svg?react';
import MavenLogo from '../tools/maven.svg?react';
import CargoLogo from '../tools/cargo.svg?react';
import CICDLogo from '../tools/cicd.svg?react';
import TailwindLogo from '../tools/tailwindcss.svg?react';
import ViteLogo from '../tools/vite.svg?react';
import MongoLogo from '../tools/mongodb.svg?react';

// list
const tools = [
    {
        name: "Git",
        logo: GitLogo,
        description: "Outils indispensable (à mes yeux comme à beaucoup d'autres) pour la gestion de versions et le suivi de projet.",
        learned: "2023",
        flag: "École"
    },
    {
        name: "VSCode",
        logo: VSCLogo,
        description: "Éditeur de code offrant une grande flexibilité grâce à ses nombreuses extensions.",
        learned: "2024",
        flag: "École"
    },
    {
        name: "PostGreSQL",
        logo: PostGresLogo,
        description: "Programme de gestion de base de donnée relationnelle permettant des requêtes SQL avancées.",
        learned: "2024",
        flag: "École"
    },
    {
        name: "Node.js",
        logo: NodeLogo,
        description: "Plateforme de développement JavaScript open-source agissant côté serveur.",
        learned: "2025",
        flag: "École"
    },
    {
        name: "React",
        logo: ReactLogo,
        description: "Bibliothèque JavaScript open-source utilisée dans la création d'interfaces utilisateur dynamiques.",
        learned: "2025",
        flag: "École"
    },
    {
        name: "IntellijIDEA",
        logo: IntellijLogo,
        description: "IDE utile pour le développement Java et le suivi de projets complexes.",
        learned: "2025",
        flag: "Temps-Libre"
    },
    {
        name: "Maven",
        logo: MavenLogo,
        description: "Outil de gestion de dépendances et d'automatisation de production de projets Java",
        learned: "2025",
        flag: "École"
    },
    {
        name: "Cargo",
        logo: CargoLogo,
        description: "Outil de gestion de dépendances et d'automatisation de production de projets Rust",
        learned: "2025",
        flag: "Temps-Libre"
    },
    {
        name: "CI/CD",
        logo: CICDLogo,
        description: "Processus d'automatisation des tests permettant un déploiement serein.",
        learned: "2026",
        flag: "École"
    },
    {
        name: "TailwindCSS",
        logo: TailwindLogo,
        description: "Framework CSS utilitaire utilisant des règles de style déja définies.",
        learned: "2026",
        flag: "Temps-Libre"
    },
    {
        name: "Vite",
        logo: ViteLogo,
        description: "Outil de build rapide pour projets front-end.",
        learned: "2026",
        flag: "Temps-Libre"
    },
    {
        name: "MongoDB",
        logo: MongoLogo,
        description: "Base de données NoSQL orientée documents.",
        learned: "2026",
        flag: "École"
    }
]

export default tools;