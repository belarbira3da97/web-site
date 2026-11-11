# Suivi privé des conversions — MADE BY ALGERIANS

Le site contient désormais le module `site/dist/assets/analytics.js`. Il reste inactif tant que l’identifiant GA4 n’est pas renseigné. Le tableau de bord Google Analytics reste privé dans le compte Google du propriétaire ; l’identifiant `G-…` visible dans le code ne donne aucun accès aux rapports.

## Activation

1. Ouvrir <https://analytics.google.com/> avec le compte Google du propriétaire.
2. Créer un compte `MADE BY ALGERIANS`, puis une propriété GA4 `Site e-commerce MBA`.
3. Créer un flux **Web** pour `https://belarbira3da97.github.io/web-site/` (ou le futur domaine final).
4. Copier l’identifiant de mesure au format `G-XXXXXXXXXX`.
5. Renseigner cet identifiant dans la constante `measurementId` de `site/dist/assets/analytics.js`.
6. Dans **Administration → Gestion des accès à la propriété**, conserver uniquement le compte du propriétaire et les personnes explicitement autorisées.
7. Dans **Administration → Événements clés**, marquer `whatsapp_checkout` comme événement clé. Marquer `professional_lead` séparément pour le B2B.

## Événements suivis

| Événement | Signification |
| --- | --- |
| `page_view` | Page consultée |
| `view_item_list` | Boutique ou collection consultée |
| `view_item` | Fiche produit consultée |
| `add_to_cart` | Produit ajouté au panier |
| `view_cart` | Panier consulté |
| `begin_checkout` | Validation du formulaire de commande |
| `whatsapp_checkout` | Départ vers WhatsApp avec une commande préremplie |
| `whatsapp_click` | Contact WhatsApp général |
| `professional_lead` | Contact depuis l’espace professionnel |

Aucun nom, téléphone, adresse, commune, message WhatsApp ou numéro de commande n’est envoyé à GA4.

## Entonnoir recommandé

Créer une exploration d’entonnoir avec :

1. `view_item`
2. `add_to_cart`
3. `view_cart`
4. `begin_checkout`
5. `whatsapp_checkout`

La vente réelle ne peut pas être déduite d’un clic WhatsApp. Les commandes **confirmées**, **livrées**, **refusées** et le chiffre d’affaires livré doivent rester dans le fichier privé `MADE_BY_ALGERIANS_Gestion_Commandes.xlsx`.

## Lecture hebdomadaire

Reporter chaque semaine dans l’onglet **Conversions hebdo** : sessions, vues produit, ajouts panier, débuts de commande et validations WhatsApp. Compléter ensuite avec les commandes confirmées et livrées issues du tableau de commandes.

Les quatre ratios utiles sont :

- vues produit → ajout panier ;
- ajout panier → WhatsApp ;
- WhatsApp → commande confirmée ;
- commande confirmée → commande livrée.
