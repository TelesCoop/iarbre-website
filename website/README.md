# Site Hugo iarbre.fr

Voir le [README à la racine](../README.md) pour la documentation complète.

## Démarrer en local

```bash
hugo server
```

Le site est servi sur [http://localhost:1313](http://localhost:1313).

## Build de production

```bash
hugo build --minify
```

Le site statique est généré dans `public/`.

## Structure Hugo

| Dossier | Rôle |
|---|---|
| `content/` | Contenu éditorial (articles, pages) |
| `layouts/` | Templates HTML |
| `assets/` | Sources SCSS/JS traitées par le pipeline Hugo |
| `static/` | Fichiers servis tels quels (favicon, images publiques) |
| `data/` | Données structurées (YAML/JSON) accessibles depuis les templates |
| `archetypes/` | Templates pour `hugo new content` |
