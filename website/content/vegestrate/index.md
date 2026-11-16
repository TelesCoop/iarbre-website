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
  text: "Herbe, arbustes et arbres cartographiés à 20 cm, avec leur hauteur, à partir du LiDAR et des orthophotographies. Une méthode ouverte, recalculée automatiquement à chaque nouvelle prise de vue aérienne."

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
