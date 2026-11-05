# Reprise du site MADE BY ALGERIANS dans Codex

**État du site :** publié en version 48 le 4 novembre 2026.  
**URL publique :** https://made-by-algerians-shop.prefix-unripe-7w.chatgpt.site/

## Démarrage rapide

1. Décompresser cette archive.
2. Ouvrir le dossier `site/` dans Codex.
3. Lire d’abord `Contexte_MBA_2026-11-04.md` et ce fichier.
4. Le site est un site statique HTML/CSS/JavaScript. La version publiée se trouve dans `site/dist/`.
5. Le manifeste `site/.openai/hosting.json` contient l’identité du projet Sites actuel. Ne pas créer un nouveau projet si l’objectif est de poursuivre le site existant; vérifier les droits et la source avant de publier.

L’archive contient le dépôt Git et son historique, le manifeste du projet, les pages web et les visuels intégrés au site. Le lien public donne accès à la consultation, mais pas automatiquement aux droits d’édition du site dans un autre compte.

## Mise à jour livraison / panier

- Une page publique `site/dist/livraison.html` présente les tarifs domicile et Stop Desk pour les 58 wilayas.
- Les tarifs indiqués sont les mêmes pour livraison, pickup et échange.
- Le site ne montre pas les frais de retour ni les frais de recouvrement : ces données concernent la relation avec le transporteur ou ne sont pas renseignées pour les clients.
- Dans `site/dist/commande.html`, le client choisit sa wilaya et le mode (domicile ou Stop Desk). `site/dist/assets/store.js` recalcule les frais de base et le total estimé.
- Le supplément de 50 DA par tranche de 1 kg à partir de 5 kg n’est pas inclus automatiquement dans le total : le poids réel du colis n’est pas disponible dans les fiches produit. Le total est donc clairement présenté comme estimatif, hors supplément de poids éventuel.
- Pour les codes 50 et 54, le tarif Stop Desk est 0 DA dans le barème transmis. Le site reproduit la valeur et indique de confirmer la disponibilité du mode.
- La livraison du pack de trois polos reste offerte selon l’offre affichée sur le site.

Fichiers principaux touchés :

- `site/dist/assets/store.js` : navigation partagée, table des tarifs, calcul automatique du panier, FAQ.
- `site/dist/assets/store.css` : mise en page de la grille des tarifs et styles du formulaire.
- `site/dist/livraison.html` : nouvelle page de tarifs.
- Les pages HTML utilisent les ressources versionnées `store.css?v=47` et `store.js?v=47` pour éviter l’ancien cache navigateur.

## Consignes de continuité

- Langue principale : français.
- Direction : élégante, premium, algérienne, streetwear; titres Bebas Neue, textes Arial semi-bold.
- Site grand public uniquement; personnalisation réservée aux entreprises/professionnels.
- T-shirt oversize : 250 g/m², correction la plus récente; ne pas remettre 280 g/m².
- Les fiches HOUMTI Casbah, Bab El Oued, Saint-Eugène – Bologhine et Belcourt – Belouizdad sont déjà dans la catégorie oversize.
- Les tarifs et prix commerciaux sont ceux du dossier de contexte et doivent être revalidés avant toute nouvelle communication.
- Ne pas afficher les tarifs de retour au public.

## Liens utiles

- Accueil / Boutique : https://made-by-algerians-shop.prefix-unripe-7w.chatgpt.site/
- Tarifs de livraison : https://made-by-algerians-shop.prefix-unripe-7w.chatgpt.site/livraison.html
- Panier : https://made-by-algerians-shop.prefix-unripe-7w.chatgpt.site/commande.html
- Oversize : https://made-by-algerians-shop.prefix-unripe-7w.chatgpt.site/tshirt-oversize.html

