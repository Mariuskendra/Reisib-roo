# A-rühm kooliprojekt

**Üksiku saare ellujäämisbüroo**: Kuressaare Ametikooli projekt "Salajane internet" (2026).

Palju õnne, sa võitsid reisi! Aga kuhu? Keeruta loosiratast, vaata, kuhu õnn sind viib, ja paki seljakotti viis eset. Kas valisid õigesti, selgub kohale jõudes.

> See on õppeprojekti demo. Päris makseid, kontosid ega andmete saatmist ei ole.

## Tiim

| Nimi | Rühm | Põhiülesanded |
| :--- | :--- | :--- |
| Marius Kendra | TAK-24 | JavaScript, planeerimine, GitHub |
| Marko Põlluäär | TA-25 | Planeerimine, GitHub, dokumentatsioon |
| Kerdo Sepp | TAK-25 | JavaScript, HTML, CSS |
| Reelika Brandt | TA-26 | HTML, CSS |
| Eliis Elenor Viin | TAK-26 | HTML, CSS |
| Martin Rosing | TA-26 | HTML, CSS |

Idee ja sisuga (tekstid, saarte lood, pildid ja nende optimeerimine) tegelevad kõik.

## Kuidas see töötab

### 1. Loosiratas
Kasutaja vajutab nuppu **spin**, ratas keerleb ja peatub juhuslikul sihtkohal. Valikus on kuus saart:

- Kaleidoskoobi saar
- Juustusaar
- Paradiisisaar
- Saaremaa
- Hawaii
- Hollikas

### 2. Varustuse valik
Pealkirjas on võidetud sihtkoht. Kasutaja valib riiulist seljakotti **kuni 5 eset** ja vajutab **Edasi**.

Valikus olevad esemed:

| :--- | :--- | :--- |
| veefilter | võrkkiik | kummipart |
| wifi-ruuter | skafander (kosmoseülikond) | nuga |
| kütusekanister | hiired | päikesepatareiga raadio |
| vibu | raamat | päikeseprillid |

### 3. Tulemus
JavaScript kontrollib saart ja valitud esemeid ning avab sobiva tulemuslehe. Igal saarel on oma reeglid:

| Saar | Reegel | Tulemus |
| :--- | :--- | :--- |
| Kaleidoskoobi saar | esemed ei loe | Õnnelik lõpp: värviline maailm, hõljuvad tegelased |
| Saaremaa | esemed ei loe | Pettus: konto tühjeneb |
| Hawaii | esemed ei loe | Õnnetus: vulkaanipurse |
| Hollikas | esemed ei loe | Magasid sisse ega jõudnud reisile |
| Paradiisisaar | **nuga JA veefilter** | Ellujäämine |
| | muu valik | Surm: vesi pole joodav või loomad ründavad |
| Juustusaar (tegelikult Kuu) | **skafander JA kütusekanister** | Jõuad tagasi koju |
| | skafander, aga kütust pole | Jääd kosmosesse |
| | skafandrit pole | Surm |

Kokku on **9 tulemuslehte**.

## Failide struktuur

Failinimed

/
├── README.md                  projekti kirjeldus (see fail)
├── index.html                 1. vaade: loosiratas
├── varustus.html              2. vaade: esemete valik
│
├── kaleidoskoop.html          tulemus: õnnelik lõpp
├── saaremaa.html              tulemus: pettus
├── hawaii.html                tulemus: vulkaan
├── hollikas.html              tulemus: magasid sisse
├── paradiis-elus.html         tulemus: jäid ellu
├── paradiis-surm.html         tulemus: surm
├── juustusaar-koju.html       tulemus: jõudsid tagasi
├── juustusaar-kosmos.html     tulemus: jäid kosmosesse
├── juustusaar-surm.html       tulemus: surm
│
├── [mobiilivaate failid]      [täpsustada failinimed]
│
│── style.css                  kogu kujundus
│
│── app.js                     loosiratas, reeglid
│── items.js                   esemete haldus
│── backpack.js                esemete valiku loogika
│    
├── img/                       pildid (esemed, taustad)
└── docs/
    ├── ai-kasutamine.md       kus ja kuidas AI-d kasutasime
    └── kontrollipaevik.md     kontrollid ja testid
```

## Kuidas avada

Ava `index.html` brauseris.
Veebiversioon: [link]

## Reeglid tiimile

1. **Enne tööd tee `git pull`**, et sul oleks teiste uusim kood.
2. **Tee väikseid commit'e** ja kirjuta selgelt, mida muutsid, näiteks `Lisasin Hawaii tulemuslehe`.
3. **Failinimed kirjuta väikeste tähtedega ja ilma täpitähtedeta**: `kutusekanister.png`, mitte `Kütusekanister.PNG`.
4. **Pildid pane `img/` kausta** ja viita neile nii: `img/nuga.png` (ilma kaldkriipsuta alguses).
5. **Igal pildil on `alt`-tekst**, mis kirjeldab pilti.
6. **Igal HTML-lehel on sama `<head>`**: sama `css/style.css`, `<meta name="viewport" content="width=device-width, initial-scale=1">` ja oma `<title>`.
7. **Igal tulemuslehel on nupp "Proovi uuesti"**, mis viib tagasi loosiratta juurde.
8. **Kui muudad `style.css`-i või `app.js`-i, ütle teistele**, sest neid faile kasutavad kõik.

## Funktsioonid

- [ ] Loosiratas annab juhusliku sihtkoha
- [ ] Varustuse lehel on pealkirjas õige sihtkoht
- [ ] Esemete valik (kuni 5)
- [ ] Eseme saab seljakotist tagasi riiulile panna
- [ ] Teade, kui valitakse üle 5 eseme või vajutatakse "Edasi" tühja seljakotiga
- [ ] Reeglid avavad õige tulemuslehe
- [ ] Abifunktsioon: [nt esemete filter otstarbe järgi]
- [ ] "Proovi uuesti" igal tulemuslehel
- [ ] Vau-hetk / easter egg: [mis]
- [ ] Töötab telefonis ja arvutis

## Materjalide allikad

| Fail | Allikas |
| :--- | :--- |
| [img/...] | [link või "loodud AI-ga, tööriist X"] |

## Teadaolevad puudused

- [täidetakse viimasel päeval]
