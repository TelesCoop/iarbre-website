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
├── deploy/           # Playbooks Ansible (preprod, prod)
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

L'environnement preprod est protégé par authentification HTTP basique. Les credentials sont stockés dans le vault Ansible.

## 🤖 Workflows CI/CD

| Workflow | Trigger | Rôle |
|---|---|---|
| `website-checks.yml` | push / pull_request | Build Hugo de validation |
| `website.yml` | push sur `main` ou `dev` | Déploiement prod ou preprod |

### Secrets GitHub requis

- `ANSIBLE_VAULT_KEY` — mot de passe du vault Ansible (`deploy/vault.key`)
- `SSH_PRIVATE_KEY` — clé privée SSH pour la connexion aux serveurs cibles

## 🛠️ Déploiement Ansible

Les playbooks Ansible vivent dans `deploy/`. Voir `deploy/README.md` pour le détail.

### Déploiement manuel

```bash
cd deploy
ansible-playbook website.yml -l preprod          # ou prod
```

### Architecture des hôtes

Les deux environnements (`prod`, `preprod`) cohabitent sur le même serveur physique, distingués par leur `project_slug` :

- prod : `/telescoop/iarbre_website/`
- preprod : `/telescoop/iarbre_website_preprod/`

## 🤝 Contribution

1. Créer une branche depuis `dev` : `git checkout -b ma-feature`
2. Ouvrir une PR vers `dev` — le build Hugo est vérifié automatiquement
3. Une fois validée, merge dans `dev` (déclenche le déploiement preprod)
4. Le merge `dev` → `main` déclenche le déploiement production

## 📚 Liens utiles

- [Documentation Hugo](https://gohugo.io/documentation/)
- [Dépôt de la plateforme IA·rbre](https://github.com/TelesCoop/iarbre)
- [Documentation du projet](https://docs.iarbre.fr)
