---
title: "Végéstrate"
description: "Herbe, arbustes et arbres cartographiés à 20 cm avec leur hauteur sur toute la Métropole de Lyon comparés avec l'inventaire Espaces Végétalisés et Artificialisés (EVA) de la Métropole de Lyon, par Geofit."
layout: vegestrate
image: "/vegestrate/figures/tassin_vegestrate.jpg"
report: "rapport_eva_vegestrate_2023.pdf"
docs: "https://docs.iarbre.fr/methodology/eva_vegestrate_2023/"
map: "https://carte.iarbre.fr/vegestrate"

header:
  eyebrow: "Végéstrate"
  title: "La végétation de votre territoire, arbre par arbre"
  text: "Herbe, arbustes et arbres cartographiés à 20 cm, avec leur hauteur, à partir du [LiDAR](#lidar) et des orthophotographies. Une méthode ouverte, recalculée automatiquement à chaque nouvelle prise de vue aérienne."

intro:
  title: "Deux façons de cartographier la végétation"
  text: "Végéstrate et EVA décrivent toutes deux la végétation de la Métropole de Lyon, avec des méthodes et des cahiers des charges différents. Végéstrate est calculée automatiquement, EVA est dessinée à la main et permet de connaitre aussi les usages."
  items:
    - name: "Végéstrate"
      text:
        - "Végéstrate est une [méthode ouverte](https://github.com/TelesCoop/vegestrate) développée par TelesCoop avec le laboratoire LIRIS. Elle produit une carte de la végétation à 20 cm, classée en herbe, arbuste (1,5 à 5 m) et arbre (plus de 5 m) ou selon le modèle de hauteur."
        - "Elle croise deux sources : le LiDAR, qui mesure la hauteur de la végétation, et l'orthophotographie, analysée par FLAIR-HUB, un modèle d'intelligence artificielle de l'IGN qui reconnaît l'herbe et complète le LiDAR, notamment pour les zones proches des bâtiments."
        - "La méthode est décrite dans un [article scientifique](https://isprs-annals.copernicus.org/articles/XII-4-W2-2026/203/2026/isprs-annals-XII-4-W2-2026-203-2026.pdf) publié dans les ISPRS Annals (Villarroya-Palau et al., 2026)."
    - name: "EVA 2023"
      text:
        - "EVA ([Espaces Végétalisés et Artificialisés](https://www.data.gouv.fr/datasets/classification-2015-des-espaces-vegetalises-et-artificialises-des-communes-de-la-metropole-de-lyon)) est l'inventaire de l'occupation du sol de la Métropole de Lyon, réalisé par la société Geofit par photo-interprétation : des opérateurs observent l'orthophotographie et dessinent à la main des zones, auxquelles ils attribuent une classe (forêt, prairie, culture, jardin, surface imperméabilisée...) et une classe de hauteur. Ils partent principalement des zones classées précédemment comme végétales et des zones où un changement a été détecté automatiquement."
        - "Par règle de saisie, aucune zone ne fait moins de 100 m² ni moins de 3 m de large."
    - name: "Le LiDAR, c'est quoi ?"
      id: lidar
      text:
        - "Le LiDAR (Light Detection And Ranging, « détection et mesure de distance par la lumière ») est un scan 3D par laser. Ici il est embarqué dans un avion et la mesure est faite vue du ciel. Le LiDAR envoie des impulsions laser et mesure le temps que met chaque écho à revenir, ce qui donne la position de chaque point touché et donc sa hauteur vu du ciel. Sur la métropole de Lyon c'est du LiDAR THD : 30 points/m² en moyenne, pouvant atteindre 100 points/m² en zone urbaine dense."
        - "Végéstrate utilise le [LiDAR 2023 de la Métropole de Lyon](https://data.grandlyon.com/portail/fr/jeux-de-donnees/nuage-de-points-lidar-2023-de-la-metropole-de-lyon/info), diffusé sur data.grandlyon.com. Ce LiDAR est déjà pré-classé et permet de détecter la végétation grâce à la signature de retour : avec une grande densité de points là où il y a de la végétation des points vont traverser et rebondir au sol et se perdre alors que sur une surface lisse de toit ou de sol les rebonds seront plus réguliers."
    - name: "L'orthophotographie, c'est quoi ?"
      id: orthophotographie
      text:
        - "Une orthophotographie est une photographie géoréférencée prise selon un angle définie (ici à la verticale), puis corrigée des déformations dues au relief et à l'objectif. Ici c'est une orthophotographie aérienne, qui a été prise au même moment que le LiDAR. Elle se superpose ainsi exactement à une carte : chaque pixel est à sa position réelle au sol. Les images ont une résolution de 5 cm que nous dégradons à 20 cm pour correspondre à la résolution d'entraînement de FLAIR-HUB."
        - "Elle montre les couleurs et les textures, ce qui permet de reconnaître l'herbe ou un arbre, mais pas leur hauteur. L'[orthophotographie 2023 de la Métropole de Lyon](https://data.grandlyon.com/portail/fr/jeux-de-donnees/dalles-d-orthophotographie-2023-de-la-metropole-de-lyon/donnees) est l'image de base d'EVA comme de Végéstrate."

figures:
  - value: "92,5 %"
    text: "Végéstrate et EVA sont d'accord à la question « végétal ou pas ? »"
  - value: "98 %"
    text: "de la surface des forêts d'EVA 2023 retrouvée boisée par Végéstrate"
  - value: "20 cm"
    text: "la taille d'un pixel Végéstrate, quand EVA ne dessine aucune zone de moins de 100 m²"
  - value: "≈ 12 h"
    text: "de calcul sur une seule machine GPU pour toute la Métropole, incluant le téléchargement du LiDAR et des orthophotographies"

compare:
  title: "Voir la différence"
  text: "Faites glisser le curseur pour passer d'EVA 2023 à Végéstrate sur cinq lieux représentatifs de 1 km². Les deux sont posés sur l'orthophotographie 2023 qui sert de base aux deux données."
  places:
    - key: tassin
      label: "Pavillonnaire"
    - key: presquile
      label: "Centre-ville"
    - key: tete_or
      label: "Grand parc"
    - key: vallee_chimie
      label: "Industrie"
    - key: monts_or
      label: "Campagne"

reasons:
  title: "Pourquoi elles ne disent pas toujours la même chose"
  text: "EVA et Végéstrate voient la végétation aux mêmes endroits. Leurs écarts proviennent de deux différences principales."
  items:
    - title: "Les contours"
      image: zoom_bords
      text: "EVA trace à la main des contours simplifiés ; Végéstrate suit chaque pixel de 20 cm. Plus de la moitié du désaccord (58 %) se trouve à moins de 2 m d'un contour EVA."
    - title: "La taille minimale"
      image: zoom_alignements
      text: "EVA ne dessine pas de zone de moins de 100 m² : un arbre d'alignement ou un arbre isolé n'y figure pas. Végéstrate est capable de les cartographier un par un."

balance:
  title: "Forces et limites de chaque donnée"
  text: "EVA décrit l'usage du sol en plus de la couverture physique ; Végéstrate apporte une plus grande précision et une hauteur mesurée."
  methods:
    - name: "EVA 2023"
      strengths:
        - "Décrit l'usage du sol : cultures, prairies, jardins collectifs"
        - "Couvre aussi les zones sans image aérienne (camp militaire du Mont Verdun), complétées à partir de sources secondaires (OSM, IGN)"
      limits:
        - "Aucune zone de moins de 100 m², contours simplifiés"
        - "Campagne manuelle à relancer à chaque mise à jour"
    - name: "Végéstrate"
      strengths:
        - "Chaque arbre compte : pixel de 20 cm, arbres d'alignement, arbres de cour, petites haies"
        - "Une hauteur mesurée par le LiDAR pour chaque zone de végétation"
        - "Recalcul automatique à chaque campagne LiDAR et orthophotographie, avec la même méthode pour comparer les années entre elles"
        - "Méthode ouverte : code public et documenté, que chacun peut relire et ré-implémenter ailleurs"
      limits:
        - "Décrit la couverture physique et pas l'usage"
        - "Végétation basse de moins de 1,5 m lue comme de l'herbe (seuil adaptable au besoin)"

method:
  title: "Comment nous l'avons vérifié"
  text:
    - "Nous avons comparé EVA 2023 et Végéstrate 2023 sur toute la Métropole de Lyon, pixel par pixel et polygone par polygone."
    - "Cette comparaison mesure l'accord entre les deux sources."
    - "Quand elles divergent, le rapport décrit où et dans quelles situations."
---
