# 🚀 BWS Schoonmaak - Netlify Deployment Guide

Deze handleiding toont hoe je de BWS Schoonmaak website gratis kunt hosten op Netlify.

## 📋 Voorbereiding

### 1. Vereisten
- GitHub account
- Netlify account (gratis)
- Node.js 18+ geïnstalleerd (voor lokale ontwikkeling)

### 2. Code uploaden naar GitHub
```bash
# Maak een nieuwe repository aan op GitHub
# Clone je repository lokaal
git clone https://github.com/[jouw-username]/bwsschoonmaak.git
cd bwsschoonmaak

# Voeg alle bestanden toe
git add .
git commit -m "Initial commit: BWS Schoonmaak website"
git push origin main
```

## 🌐 Netlify Deployment

### Optie 1: Via GitHub (Aanbevolen)

1. **Log in op Netlify**
   - Ga naar [netlify.com](https://netlify.com)
   - Klik op "Sign up" of "Log in"
   - Log in met je GitHub account

2. **Nieuwe site aanmaken**
   - Klik op "New site from Git"
   - Kies "GitHub"
   - Selecteer je `bwsschoonmaak` repository

3. **Build instellingen**
   ```
   Build command: npm run build
   Publish directory: out
   ```

4. **Deploy!**
   - Klik op "Deploy site"
   - Netlify genereert automatisch een URL zoals `https://amazing-name-123456.netlify.app`

### Optie 2: Drag & Drop

1. **Lokaal builden**
   ```bash
   npm install
   npm run build
   ```

2. **Upload naar Netlify**
   - Sleep de `out` folder naar netlify.com
   - Je site is live!

## ⚙️ Configuratie

### Custom Domain (Optioneel)

1. **Domain toevoegen**
   - Ga naar Site settings → Domain management
   - Klik "Add custom domain"
   - Voer `bwsschoonmaak.nl` in

2. **DNS configureren**
   ```
   Type: A Record
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: bwsschoonmaak.netlify.app
   ```

3. **SSL Certificate**
   - Wordt automatisch gegenereerd door Netlify
   - HTTPS wordt automatisch ingeschakeld

### Environment Variables

1. **Ga naar Site settings → Environment variables**
2. **Voeg toe:**
   ```
   NEXT_PUBLIC_SITE_URL=https://bwsschoonmaak.nl
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX (optioneel)
   ```

### Contact Form Setup

Het contactformulier werkt automatisch met Netlify Forms:

1. **Formulier is automatisch geconfigureerd**
   - `data-netlify="true"` is al toegevoegd
   - Spam bescherming is ingebouwd

2. **Ontvangen berichten bekijken**
   - Ga naar je Netlify dashboard
   - Klik op "Forms" in het menu
   - Zie alle ingediende formulieren

3. **Email notificaties instellen**
   - Ga naar Site settings → Forms
   - Klik "Form notifications"
   - Voeg email toe waar je notificaties wilt ontvangen

## 🔄 Automatische Updates

### Continuous Deployment

Elke keer dat je code pusht naar GitHub:
1. Netlify detecteert de wijziging automatisch
2. Voert `npm run build` uit
3. Publiceert de nieuwe versie
4. Je site is binnen 1-2 minuten bijgewerkt

### Build Status

```bash
# Bekijk build logs in Netlify dashboard
# Of voeg een build badge toe aan je README:
```
[![Netlify Status](https://api.netlify.com/api/v1/badges/[jouw-site-id]/deploy-status)](https://app.netlify.com/sites/[jouw-site-naam]/deploys)

## 📊 Analytics & Monitoring

### Google Analytics (Optioneel)

1. **Google Analytics account aanmaken**
   - Maak een GA4 property aan
   - Kopieer je Measurement ID (G-XXXXXXXXXX)

2. **Toevoegen aan Netlify**
   ```
   Environment Variable:
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. **Herdeployment triggeren**
   - Ga naar Deploys → Trigger deploy

### Netlify Analytics

- Automatisch beschikbaar in je dashboard
- Pageviews, unique visitors, top pages
- Bandwidth en performance metrics

## 🛠️ Troubleshooting

### Build Errors

```bash
# Controleer lokaal of alles werkt:
npm install
npm run build
npm run preview

# Typische problemen:
# 1. Node.js versie - gebruik Node 18+
# 2. Dependencies - check package.json
# 3. Environment variables - check .env.example
```

### Form Issues

```bash
# Als contactformulier niet werkt:
# 1. Check of data-netlify="true" bestaat
# 2. Controleer name attributes op inputs
# 3. Bekijk Netlify Forms dashboard
```

### Performance

```bash
# Site optimalisatie:
# 1. Images zijn al geoptimaliseerd
# 2. CSS/JS wordt automatisch geminified
# 3. CDN wordt automatisch gebruikt
```

## 🔒 Security

### Automatisch geconfigureerd:
- ✅ HTTPS/SSL certificaat
- ✅ Security headers (CSP, XSS protection)
- ✅ Spam bescherming formulieren
- ✅ DDoS bescherming

### Extra beveiliging:
```bash
# Password bescherming (betaalde plannen):
# Site settings → Access control

# Branch deploys (ontwikkeling):
# Automatisch gegenereerd voor elke branch
```

## 💰 Kosten

### Gratis tier limits:
- **Bandwidth:** 100GB/maand
- **Build tijd:** 300 minuten/maand  
- **Sites:** Onbeperkt
- **Forms:** 100 submissions/maand

### Voor BWS Schoonmaak:
Dit is ruim voldoende! Een gemiddelde bedrijfswebsite gebruikt:
- ~1-5GB bandwidth/maand
- ~10-30 build minuten/maand
- ~5-20 form submissions/maand

## 📞 Support

### Netlify Support:
- [Netlify Docs](https://docs.netlify.com)
- [Community Forum](https://community.netlify.com)
- [Status Page](https://netlifystatus.com)

### BWS Schoonmaak Technical:
- Email: info@bwsschoonmaak.nl
- Telefoon: 06 38935230

---

## 🎉 Success!

Na deployment heb je:
- ✅ Gratis, snelle website hosting
- ✅ Automatische HTTPS
- ✅ CDN worldwide
- ✅ Werkend contactformulier
- ✅ Automatic deployments
- ✅ Performance monitoring

**Je website is nu live en klaar voor klanten!** 🚀

---

*Laatste update: 2024 - BWS Schoonmaak Deployment Guide*
