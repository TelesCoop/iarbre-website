# 🌳 iarbre-website

Site vitrine du projet **IA·rbre** — plateforme collaborative pour la végétalisation urbaine et l'adaptation au changement climatique.

Site en production : [iarbre.fr](https://iarbre.fr)

## 📁 Structure du dépôt

```
iarbre-website/
├── website/          # Site statique Hugo
│   ├── content/      # Contenu éditorial (articles, pages)
│   ├── layouts/      # Templates HTML Hugo
│   ├── assets/       # SCSS, JS, images sources
│   ├── static/       # Fichiers servis tels quels (favicon, images…)
│   ├── data/         # Données structurées (YAML/JSON)
│   └── hugo.toml     # Configuration Hugo
├── deploy/           # Playbooks Ansible (preprod, prod, feature)
└── .github/workflows # CI/CD GitHub Actions
```

## 🚀 Développement local

### Prérequis

- [Hugo extended](https://gohugo.io/installation/) ≥ `0.145.0` (la version `extended` est requise pour la compilation SCSS)

### Installation

```bash
git clone git@github.com:TelesCoop/iarbre-website.git
cd iarbre-website/website
hugo server
```

Le site est disponible sur [http://localhost:1313](http://localhost:1313) avec rechargement automatique.

## 🌐 Environnements

| Branche | URL | Auth | Déploiement |
|---|---|---|---|
| `main` | [iarbre.fr](https://iarbre.fr) | publique | automatique au push |
| `dev` | [preprod.iarbre.fr](https://preprod.iarbre.fr) | htpasswd | automatique au push |
| feature `<branch>` | `feature-<branch>.iarbre.fr` | htpasswd | automatique à l'ouverture de PR |

Les environnements preprod et feature sont protégés par authentification HTTP basique. Les credentials sont stockés dans le vault Ansible.

## 🤖 Workflows CI/CD

| Workflow | Trigger | Rôle |
|---|---|---|
| `website-checks.yml` | push / pull_request | Build Hugo de validation |
| `website.yml` | push sur `main` ou `dev` | Déploiement prod ou preprod |
| `deploy-feature.yml` | ouverture / synchronize de PR | Déploiement d'un environnement éphémère |
| `delete-feature.yml` | fermeture de PR | Suppression de l'environnement éphémère |

### Secrets GitHub requis

- `ANSIBLE_VAULT_KEY` — mot de passe du vault Ansible (`deploy/vault.key`)
- `SSH_PRIVATE_KEY` — clé privée SSH pour la connexion aux serveurs cibles

## 🛠️ Déploiement Ansible

Les playbooks Ansible vivent dans `deploy/`. Voir `deploy/README.md` pour le détail.

### Déploiement manuel

```bash
cd deploy
ansible-playbook website.yml -l preprod          # ou prod
ansible-playbook website.yml -l feature -e branch=<branch-name>
```

### Architecture des hôtes

Les trois environnements (`prod`, `preprod`, `feature`) cohabitent sur le même serveur physique, distingués par leur `project_slug` :

- prod : `/telescoop/iarbre_website/`
- preprod : `/telescoop/iarbre_website_preprod/`
- feature : `/telescoop/iarbre_website-feature-<branch>/`

## 🤝 Contribution

1. Créer une branche depuis `dev` : `git checkout -b ma-feature`
2. Ouvrir une PR vers `dev` — un environnement de preview est déployé automatiquement
3. Une fois validée, merge dans `dev` (déclenche le déploiement preprod)
4. Le merge `dev` → `main` déclenche le déploiement production

## 📚 Liens utiles

- [Documentation Hugo](https://gohugo.io/documentation/)
- [Dépôt de la plateforme IA·rbre](https://github.com/TelesCoop/iarbre)
- [Documentation du projet](https://docs.iarbre.fr)
