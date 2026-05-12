---
title: ⚙️ Méthodologie des créations des calques
draft: false
publishDate: 2025-10-16T16:17:00
layout: post
author: L'équipe IA.rbre
summary: Quelles données et méthodes pour produire les différentes calques ?
image: "cover.jpg"
---

**Méthodologie des créations des calques**

Le projet IA.rbre se fait dans une démarche ouverte, explicable et réplicable.

C'est pourquoi nous documentons nos [méthodologies](https://docs.iarbre.fr/methodology/vulnerability/) de créations de données.

![Méthodologie des créations des calques](Capture%20d%27%C3%A9cran%202026-02-05%20115144.png)

Ainsi pour le calque de plantabilité vous pouvez retrouver par exemple un [tableau récapitualif](https://docs.iarbre.fr/methodology/plantability/#tableau-recapitulatif) des données que nous utilisons ainsi que la source.

| Nom | Facteur | Source | Lien |
| --- | --- | --- | --- |
| Statio Vélov | Statio Vélov | Transport et Mobilité | https://data.grandlyon.com/portail/fr/jeux-de-donnees/stations-velo-v-metropole-lyon/info |
| Arbres d’alignement | - Souches ou emplacements libres - Arbres | Environnement Energie Climat | https://data.grandlyon.com/portail/fr/jeux-de-donnees/arbres-alignement-metropole-lyon/info |
| Points d'arrets TCL | Arrêt transport en commun | SYTRAL | https://data.grandlyon.com/portail/fr/jeux-de-donnees/points-arret-reseau-transports-commun-lyonnais/info |
| La Fibre Grand Lyon | Réseau fibre | Grand Lyon THD | https://data.grandlyon.com/portail/fr/jeux-de-donnees/reseau-initiative-publique-fibre-grand-lyon/info |
| Marchés forains | Marchés forains | Agriculture et alimentation | https://data.grandlyon.com/portail/fr/jeux-de-donnees/marches-forains-metropole-lyon/info |
| Pistes cyclables | Pistes cyclables | Transport et Mobilité | https://data.grandlyon.com/portail/fr/jeux-de-donnees/amenagements-cyclables-metropole-lyon/info |
| Plan d’eau de détail | Plan d’eau | Territoire Infrastructures | https://data.grandlyon.com/portail/fr/jeux-de-donnees/plans-eau-detail-metropole-lyon/info |
| Plan d'eau et fleuves | Plan d’eau | Territoire Infrastructures | https://data.grandlyon.com/portail/fr/jeux-de-donnees/plans-eau-importants-metropole-lyon/info |
| Ponts | Ponts | Territoire Infrastructures | https://data.grandlyon.com/portail/fr/jeux-de-donnees/ponts-metropole-lyon/info |
| Voies ferrées | Voies ferrées | Territoire Infrastructures | https://data.grandlyon.com/portail/fr/jeux-de-donnees/voies-ferrees-metropole-lyon/info |
| Tracé du métro | Tracé du métro | SYTRAL | https://data.grandlyon.com/portail/fr/jeux-de-donnees/lignes-metro-funiculaire-reseau-transports-commun-lyonnais-v2/info |
| Tracé du tramway | Tracé du tramway | SYTRAL | https://data.grandlyon.com/portail/fr/jeux-de-donnees/lignes-tramway-reseau-transports-commun-lyonnais-v2/info |
| Tracé de bus | Tracé de bus | SYTRAL | https://apidf-preprod.cerema.fr/swagger/#/Cartofriches%20(acc%C3%A8s%20libre) |
| Cartofriches | Friches | CEREMA | https://apidf-preprod.cerema.fr/swagger/#/Cartofriches%20(acc%C3%A8s%20libre) |
| Réseau de chaleur urbain | Réseau de chaleur urbain | Environnement Energie Climat | https://data.grandlyon.com/portail/fr/jeux-de-donnees/canalisations-des-reseaux-de-chaleur-et-de-froid-de-la-metropole-de-lyon--copie/info |
| Parkings surfaciques | Parkings | Transport et Mobilité, EFFIA | Service voirie |
| Batiments | - Bâtiment - Proximité façade | IGN BD TOPO | https://geoservices.ign.fr/bdtopo |
| EVA 2015 | - Strate arborée - Strate basse et pelouse - Espaces agricoles - Forêts - Espaces artificalisées | Géomatique | Géomatique |
| Signalisation tricolore et lumineuse matériel | Signalisation tricolore et lumineuse matériel | Territoire Infrastructures | Service voirie |
| Assainissement | Assainissement | Eau | Service eau |
| Espace public | - Parcs et jardins publics - Giratoires - Espaces jeux et pietonnier - Friche naturelle | Territoire Infrastructures | Service voirie |
| Réseau gaz | Rsx gaz | GRDF | GRDF |
| Lignes souterraines basse et moyenne tension | Rsx souterrains ERDF | Enedis | Enedis |
| Ligne aérienne basse et moyenne tension | Rsx aériens ERDF | Enedis | Enedis |
| Place stationnement PMR | PMR | Territoire Infrastructures | Service voirie |
| Station autopartage | Auto-partage | Territoire Infrastructures | Service voirie |
| Complément à Fibre Grand Lyon open-source | Réseau fibre | Territoire Infrastructures | Service voirie |

Vous pouvez aussi trouver des informations sur la [pondération](https://docs.iarbre.fr/methodology/plantability/#ponderation-des-facteurs) de ces différentes données.

Nous avons [des tableaux similaires](https://docs.iarbre.fr/methodology/data/#tableau-recapitulatif) avec explications pour les 3 facteurs de la la vulnérabilité à la chaleur.
Nous avons aussi rédigé des [explications](https://docs.iarbre.fr/methodology/lcz/#arbre-de-decision) sur la méthode du CEREMA de production des Zones Climatiques Locales (ZCL).

Si vous aviez encore d'autres questions, n'hésitez pas à nous contacter sur contact@telescoop.fr pour que l'on puisse en discuter !
