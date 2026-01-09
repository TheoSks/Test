# Sales Analytics Dashboard

Un tableau de bord moderne et interactif pour visualiser les données de ventes et les performances commerciales.

## Aperçu

Ce projet présente un tableau de bord élégant avec :
- Résumé de croissance des ventes
- Graphique interactif des ventes mensuelles
- Top des catégories de vente
- Liste des commandes récentes
- Carte de mise à niveau du plan

## Design System

### Palette de Couleurs

- **Mint** : #9AE382 (RGB 154, 227, 130)
- **Sand** : #EADCCE (RGB 234, 220, 206)
- **Beige** : #F3EFE7 (RGB 234, 239, 231)
- **Crimson** : #C30117 (RGB 185, 1, 23)
- **Teal** : #1C4B41 (RGB 28, 75, 65)

### Typographie

Police principale : Space Grotesk (avec fallback sur Segoe UI)

## Fonctionnalités

### Interactivité

- ✅ Recherche en temps réel dans les commandes
- ✅ Animations des graphiques au chargement
- ✅ Navigation interactive dans la sidebar
- ✅ Effets de survol sur les éléments
- ✅ Graphiques interactifs avec affichage des valeurs

### Raccourcis Clavier

- `Ctrl/Cmd + K` : Focus sur la barre de recherche
- `Ctrl/Cmd + P` : Imprimer le rapport

### Design Responsive

- Adapté aux écrans desktop (1200px+)
- Tablettes (768px - 1200px)
- Mobile (< 768px)

## Structure du Projet

```
dashboard/
├── index.html          # Structure HTML principale
├── styles.css          # Styles et design system
├── script.js           # Fonctionnalités JavaScript
└── README.md           # Documentation
```

## Utilisation

### Lancement Simple

1. Ouvrez le fichier `index.html` dans votre navigateur préféré
2. Le dashboard est prêt à l'emploi !

### Serveur Local (Recommandé)

Pour une meilleure expérience, utilisez un serveur local :

```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server

# Avec PHP
php -S localhost:8000
```

Ensuite, accédez à `http://localhost:8000` dans votre navigateur.

## Composants

### 1. Sidebar
Navigation latérale avec icônes et badge AI

### 2. Header
- Titre du dashboard
- Barre de recherche
- Actions rapides (imprimer, résumé, notifications)

### 3. Sales Growth Summary
- Revenu total avec pourcentage de croissance
- Moyenne mensuelle
- Mois le plus haut/bas
- Graphique à barres interactif

### 4. Top Selling Categories
- Tech & Electronics
- Pet Supplies
- Real Estate Insurance

### 5. Recent Orders
Table des dernières commandes avec :
- Nom du client avec avatar
- Statut (Pending, Canceled)
- Montant
- Date

### 6. Upgrade Card
Carte promotionnelle avec :
- Appel à l'action
- Statistiques de ventes
- Badge d'amélioration

## Personnalisation

### Modifier les Couleurs

Éditez les variables CSS dans `styles.css` :

```css
:root {
    --color-mint: #9AE382;
    --color-teal: #1C4B41;
    /* ... autres couleurs */
}
```

### Ajouter des Données

Modifiez les valeurs dans `index.html` ou créez une intégration avec une API pour des données dynamiques.

### Étendre les Fonctionnalités

Le fichier `script.js` contient des fonctions modulaires pour :
- Animations
- Filtrage
- Interactions
- Mises à jour en temps réel

## Technologies Utilisées

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox, Animations)
- JavaScript Vanilla (ES6+)
- Font Awesome 6.4.0 (Icônes)

## Compatibilité Navigateurs

- Chrome (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Edge (dernières versions)

## Améliorations Futures

- [ ] Intégration avec une API backend
- [ ] Graphiques plus avancés (Chart.js / D3.js)
- [ ] Mode sombre/clair
- [ ] Exportation des données (PDF, Excel)
- [ ] Authentification utilisateur
- [ ] Filtres de dates personnalisés
- [ ] Notifications en temps réel

## Performance

- Animations optimisées avec CSS transforms
- Lazy loading des éléments
- Debouncing sur les événements de recherche et resize
- Code modulaire et maintenable

## Licence

Ce projet est libre d'utilisation pour des fins éducatives et commerciales.

## Auteur

Créé avec ❤️ pour démontrer les capacités de développement frontend moderne.

---

**Note** : Ce dashboard est une démonstration. Pour une utilisation en production, ajoutez :
- Validation des données
- Gestion d'erreurs robuste
- Tests unitaires
- Optimisations de sécurité
- Backend API
