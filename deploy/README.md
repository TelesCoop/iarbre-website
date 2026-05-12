# Déploiement Ansible

Playbooks de déploiement du site `iarbre.fr` (Hugo statique).

## Structure

```
deploy/
├── ansible.cfg
├── hosts                       # Inventaire (prod, preprod, feature)
├── vault.key                   # Mot de passe du vault (gitignored)
├── website.yml                 # Playbook principal : build + serve via nginx
├── cleanup.yml                 # Suppression d'un environnement feature
├── group_vars/
│   ├── all/
│   │   ├── vars.yml            # Variables communes
│   │   ├── cross_env_vars.yml
│   │   └── cross_env_vault.yml # Vault chiffré (credentials)
│   ├── prod/vars.yml
│   ├── preprod/vars.yml
│   └── feature/vars.yml        # Variables paramétrées par `branch`
└── telescoop-deploy/           # Rôles et tâches partagés (sous-module)
```

## Vault

Le vault Ansible est chiffré avec `vault.key` (jamais committé).

```bash
# Voir le contenu
ansible-vault view group_vars/all/cross_env_vault.yml

# Éditer
ansible-vault edit group_vars/all/cross_env_vault.yml
```

**Variables sensibles** :
- `vault_website_username` / `vault_website_password` — credentials htpasswd (preprod, feature)
- `vault_github_actions_ssh_private_key` — clé SSH consommée par les workflows CI

## Première installation d'un nouveau serveur

1. Générer une nouvelle `vault.key` :
   ```bash
   ./generate_vault_key_on_first_install.sh
   ```
2. Initialiser le vault avec les credentials du nouveau projet
3. Mettre à jour le secret `ANSIBLE_VAULT_KEY` sur GitHub
4. Premier déploiement : Ansible génère une clé SSH `id_ed25519_website` sur le serveur — la clé publique doit être ajoutée comme **deploy key read-only** au repo GitHub :
   ```bash
   ssh -p 42722 ubuntu@<host> "sudo cat /home/iarbre/.ssh/id_ed25519_website.pub"
   gh repo deploy-key add /dev/stdin -R TelesCoop/iarbre-website -t "<host> deploy key"
   ```
5. Relancer le playbook — le clone réussit cette fois.

## Cohabitation avec le projet principal `iarbre`

Le serveur héberge aussi le projet [iarbre](https://github.com/TelesCoop/iarbre) (carte interactive). Pour éviter tout conflit de chemins :

- `base_project_slug: iarbre_website` (distinct de `iarbre`)
- Deploy key SSH dédiée : `id_ed25519_website` (vs `id_ed25519_backend` pour iarbre)
- L'utilisateur Unix `iarbre` (UID 10045) est partagé — c'est intentionnel pour mutualiser les permissions.

## Commandes utiles

```bash
# Vérifier sans appliquer
ansible-playbook website.yml -l preprod --check --diff

# Forcer un rebuild même sans changement de code
ansible-playbook website.yml -l preprod -e force_update=true

# Supprimer un environnement feature
ansible-playbook cleanup.yml -l feature -e branch=<branch-name>
```
