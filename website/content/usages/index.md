---
title: "Usages"
description: "Plan Climat, cours d'école, 300 000 arbres, îlots de chaleur : comment la Métropole de Lyon et ses partenaires utilisent les données IA·rbre."
layout: usages
map: "https://carte.iarbre.fr"

header:
  eyebrow: "Usages"
  title: "Ce que les territoires font avec IA·rbre"
  text: "Diagnostiquer, décider, agir, suivre : les services de la Métropole de Lyon, les communes et leurs partenaires s'appuient sur les données IA·rbre pour adapter la ville au dérèglement climatique."

figures:
  - value: "150"
    text: "visiteurs uniques par mois sur la carte, un outil destiné aux professionnels de l'urbanisme et du climat"
  - value: "4"
    text: "directions métiers qui travaillent ensemble : Plan Climat, Patrimoine végétal, Urbanisme et Cycle de l'Eau"
  - value: "5 min"
    text: "par visite en moyenne ; 80 visites par mois dépassent 3 minutes, certaines durent jusqu'à 2 h"
  - value: "SIG"
    text: "Données également récupérées via des flux WFS, WMS et les rasters en accès direct pour être retravaillées dans les SIGs des services"
figures_note: "Calques les plus consultés : vulnérabilité à la chaleur, confort thermique, ombre, et croisement plantabilité × vulnérabilité."

intro:
  title: "Une donnée pour les grands plans réglementaires comme le Plan Climat"
  text: "Toute intercommunalité de plus de 20 000 habitants doit adopter un [Plan Climat Air Énergie Territorial](/actualites/pcaet-agir-localement-pour-le-climat/) (PCAET) et le faire vivre en quatre temps : diagnostic, stratégie, programme d'actions, suivi. Les calques IA·rbre (plantabilité, vulnérabilité à la chaleur, inventaire du végétal [Végéstrate](/vegestrate/)) nourrissent chacune de ces étapes, et au-delà les documents d'urbanisme, le suivi de politiques publiques et les projets des communes."

steps:
  - title: "Diagnostiquer"
    text: "Comprendre où le territoire est vulnérable et où se trouve le végétal."
    stories:
      - title: "Cartographier la vulnérabilité à la chaleur, de jour comme de nuit"
        themes: ["Chaleur"]
        problem: "Où les habitants sont-ils les plus exposés lors des épisodes de forte chaleur, croiser cette information avec des critères économiques et sociaux"
        data: "Calque de vulnérabilité à la chaleur, jour et nuit. Calque de confort thermique. Calque d'ombre"
        who: "Métropole de Lyon, dans le cadre du PCAET"
        link: "/actualites/vulnerabilite-chaleur-lyon/"
      - title: "Affiner l'étude des îlots de chaleur urbains"
        featured: true
        themes: ["Chaleur", "Végétation"]
        problem: "Modéliser les îlots de chaleur à l'échelle de la ville demande une description fine de la végétation, arbre par arbre."
        data: "Végéstrate"
        who: "Météo-France, pour une étude commandée par la Ville de Lyon"
        link: "/vegestrate/"
      - title: "Mesurer l'accès des habitants au végétal (3-30-300)"
        themes: ["Végétation"]
        problem: "3 arbres visibles depuis chaque logement, 30 % de canopée par quartier, un parc à moins de 300 m : où en est le territoire ?"
        data: "Végéstrate, calque 3-30-300"
        who: "Métropole de Lyon, dans le cadre du PCAET"
        link: "/vegestrate/"

  - title: "Décider"
    text: "Fixer des objectifs et des règles à partir d'un état des lieux chiffré."
    stories:
      - title: "Concevoir une aide à la végétalisation des espaces privés"
        themes: ["Végétation"]
        problem: "Une grande part du végétal se trouve dans les jardins et les cours privés. Combien, et où, pour cibler une politique de soutien ?"
        data: "Végéstrate"
        who: "Équipe Plan Climat de la Métropole de Lyon"
        result: "Des statistiques sur le végétal en domaine privé pour élaborer la politique publique de soutien à la végétalisation du PCAET."
        link: "/vegestrate/"
      - title: "Élaborer le schéma directeur de végétalisation"
        themes: ["Végétation"]
        problem: "Définir à l'échelle de la métropole où et comment renforcer la place du végétal. Ce schéma directeur rentre dans la composition réglementaire du Plan Nature."
        data: "Calque de plantabilité et Végéstrate"
        who: "UrbaLyon, agence d'urbanisme de l'aire métropolitaine lyonnaise"
        link: "/vegestrate/"
      - title: "Quantifier les espaces végétalisés à préserver du PLU-H"
        themes: ["Végétation"]
        problem: "Le PLU-H protège des espaces végétalisés. Les données permettent d'objectiver leur statut actuel et le potentiel de chaque zone."
        data: "Végéstrate et calque de plantabilité"
        who: "Métropole de Lyon, urbanisme"
        link: "/vegestrate/"

  - title: "Agir"
    text: "Choisir où intervenir, au plus près du terrain."
    stories:
      - title: "Prioriser la végétalisation des cours d'école"
        featured: true
        themes: ["Végétation", "Chaleur"]
        problem: "Quelles cours d'école végétaliser en premier ? Grâce aux données on peut se faire une première idée pour orienter des relevés de terrain et les croiser avec d'autres critères internes."
        data: "Végéstrate"
        who: "Villes de Lyon et de Villeurbanne"
        link: "/vegestrate/"
      - title: "Trouver de la place pour 300 000 arbres"
        featured: true
        themes: ["Végétation"]
        problem: "La Métropole s'est fixé l'objectif de planter 300 000 arbres entre 2021 et 2030. Il faut trouver les petits espaces auxquels on ne pense pas."
        data: "Calque de plantabilité, croisé avec la connaissance des réseaux et des sols"
        who: "Métropole de Lyon, service gestionnaire de son patrimoine"
        link: "/actualites/origine-calque-plantabilite/"
      - title: "Repérer les zones plantables oubliées"
        themes: ["Végétation"]
        problem: "Rillieux-la-Pape connaît bien ses zones plantables. Le calque aide ses équipes à repérer celles auxquelles elles n'avaient pas pensé."
        data: "Calque de plantabilité"
        who: "Ville de Rillieux-la-Pape"
        link: "/actualites/origine-calque-plantabilite/"

  - title: "Suivre"
    text: "Mesurer les effets des politiques dans la durée."
    stories:
      - title: "Suivre l'évolution du végétal sur un mandat"
        themes: ["Végétation"]
        problem: "Le pipeline de production de Végéstrate est recalculé automatiquement à chaque nouvelle prise de vue aérienne, avec des scripts versionnés : les indicateurs se comparent d'un millésime à l'autre pour évaluer les politiques de végétalisation. Il est possible de remonter aussi dans le temps pour les campagnes précédentes."
        data: "Végéstrate"
        link: "/vegestrate/"

next:
  title: "Ce que nous construisons avec vous"
  text: "IA·rbre évolue avec les besoins des territoires. Certains usages sont en cours de construction avec les services."
  items:
    - title: "Repérer les espaces refuges de chaleur"
      themes: ["Chaleur"]
      problem: "Identifier des lieux souvent délaissés mais plus supportables lors des fortes chaleurs, pour y proposer des usages temporaires l'été (urbanisme transitoire)."
      data: "Calque de confort thermique"
      who: "Équipe PCAET de la Métropole de Lyon, travail en cours"
    - title: "L'eau en ville"
      themes: ["Eau"]
      problem: "Gestion de l'eau et désimperméabilisation : nos travaux sont en cours autour des questions de ruissellement notamment mais sans cas d'usage abouti à ce jour. Vous avez un enjeu sur l'eau ? Construisons-le ensemble."
      who: "Équipe Ville perméable, Direction du Cycle de l'eau"
      link: "/actualites/ville-permeable-lyon/"
      contact: true
    - title: "Vos usages"
      themes: []
      problem: "Vous utilisez IA·rbre ? Racontez-nous : votre cas peut aider d'autres territoires."
      contact: true

cta:
  title: "Et sur votre territoire ?"
  text: "Explorez la carte, ou contactez-nous pour en parler, que vous soyez à la Métropole de Lyon ou que vous souhaitiez reproduire IA·rbre sur un autre territoire."
---
