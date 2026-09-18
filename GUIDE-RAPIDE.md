# 🚀 Guide Rapide - Site Propulsion

## ⚡ Démarrage Rapide

### 1. Voir le Site en Local
```bash
cd /home/mika/Desktop/Projects/propulsion
npm run dev
```
Puis ouvrez : **http://localhost:3000**

### 2. Créer le Build de Production
```bash
npm run build
npm start
```

### 3. Déployer sur Internet
**Option Simple - Vercel (Gratuit) :**
```bash
npm i -g vercel
vercel --prod
```
Suivez les instructions à l'écran.

---

## 📞 Contacts Importants Intégrés

- **WhatsApp 1 :** +237 682 36 57 61
- **WhatsApp 2 :** +237 672 52 94 78  
- **Email :** info@claudel-noubissie.com
- **Domaine prévu :** propulsion.cm

---

## 🎨 Sections du Site

1. **Hero** - Présentation avec +3 500 membres
2. **À Propos** - Vision et mission de Propulsion
3. **Packs** - Standard (10K FCFA), Pro (50K FCFA), Élite (250K FCFA)
4. **Programmes** - Apéros, Brainstorming, Tontine, etc.
5. **Témoignages** - Vidéos membres
6. **Footer** - Contacts et liens

---

## ✏️ Modifications Courantes

### Changer un Numéro WhatsApp
**Fichier :** `app/components/WhatsAppButton.tsx`
```typescript
const whatsappNumbers = [
  { number: "+237XXXXXXXXX", label: "WhatsApp 1" },
  ...
];
```

### Modifier les Tarifs
**Fichier :** `app/page.tsx`
Chercher "Pack Standard", "Pack Pro", "Pack Élite" et modifier les prix.

### Ajouter des Vidéos
1. Placer les vidéos dans `public/videos/`
2. Modifier la section témoignages dans `app/page.tsx`

### Changer les Couleurs
**Fichier :** `app/globals.css`
```css
:root {
  --propulsion-purple: #8b35d1;
  --propulsion-pink: #e91e63;
}
```

---

## 🔍 SEO - Actions Après Déploiement

### Google Search Console
1. Aller sur https://search.google.com/search-console
2. Ajouter propulsion.cm
3. Vérifier la propriété
4. Soumettre le sitemap : `https://propulsion.cm/sitemap.xml`

### Tester le Référencement
- Taper `site:propulsion.cm` sur Google
- Vérifier que le site apparaît

---

## 📱 Fonctionnalités Clés

✅ **Boutons WhatsApp flottants** - Contact direct
✅ **Design responsive** - Fonctionne sur mobile, tablette, ordinateur
✅ **Vidéos intégrées** - Témoignages de membres
✅ **Navigation fluide** - Scroll automatique entre sections
✅ **SEO optimisé** - Mots-clés pour Google
✅ **Couleurs Propulsion** - Violet, rose, or

---

## 📊 Statistiques à Suivre

Une fois déployé, surveillez :
- Nombre de visiteurs
- Clics sur les boutons WhatsApp
- Provenance des visiteurs (Google, Facebook, etc.)

**Outil recommandé :** Google Analytics

---

## ⚠️ Important

- **Email contact@propulsion.cm** : À configurer après achat du domaine
- **URL Facebook** : À valider et ajouter
- **SSL/HTTPS** : Doit être actif sur le domaine
- **Vidéos** : 3 vidéos sont déjà dans `public/videos/`

---

## 🆘 Besoin d'Aide ?

**Client :** Dr Claudel NOUBISSIE  
**Email :** info@claudel-noubissie.com  
**Développeur :** TCHINDA MBA CHRISTIAN MIKA

---

## 📚 Documentation Complète

Pour plus de détails, consultez :
- `LIVRAISON-PROPULSION.md` - Document complet
- `SEO-GUIDE.md` - Guide SEO détaillé
- `README.md` - Informations Next.js

---

**Le site est prêt ! Bon succès avec Propulsion ! 🚀**
