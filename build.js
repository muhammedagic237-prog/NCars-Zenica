const fs = require('fs');

// Read AS CAR GROUP as base, then transform it into a completely different site
let html = fs.readFileSync('C:/Users/HP/AS-CAR-GROUP/index.html', 'utf8');

// ═══ REBRAND ═══
html = html.replace(/AS CAR GROUP/g, 'N CARS');
html = html.replace(/As Car Group/g, 'N Cars');
html = html.replace(/asCar/g, 'nCars');
html = html.replace(/as-car-group/g, 'ncars-zenica');

// ═══ TAGLINE ═══
html = html.replace(/Kvalitet\. Garancija\. Povjerenje\./g, 'Uvoz \u00B7 Transport \u00B7 Prodaja Vozila');

// ═══ COLORS — Dark charcoal + Gold ═══
html = html.replace(/--red:#DC2626/g, '--red:#D4A853');
html = html.replace(/--red-hover:#B91C1C/g, '--red-hover:#B8860B');
html = html.replace(/--red-light:#FEE2E2/g, '--red-light:rgba(212,168,83,0.1)');
html = html.replace(/--red-glow:rgba\(220,38,38,0\.15\)/g, '--red-glow:rgba(212,168,83,0.15)');
html = html.replace(/#DC2626/g, '#D4A853');
html = html.replace(/rgba\(220,38,38/g, 'rgba(212,168,83');

// Dark backgrounds
html = html.replace(/--off-white:#FAFAFA/g, '--off-white:#0A0A0A');
html = html.replace(/--g50:#F9FAFB/g, '--g50:#1A1A1A');
html = html.replace(/--g100:#F3F4F6/g, '--g100:#151515');
html = html.replace(/--g200:#E5E7EB/g, '--g200:#1E1E1E');
html = html.replace(/--g300:#D1D5DB/g, '--g300:#333');
html = html.replace(/--g800:#1F2937/g, '--g800:#EDEDED');
html = html.replace(/--g900:#111827/g, '--g900:#F2F2F2');
html = html.replace(/--g700:#374151/g, '--g700:#D1D5DB');
html = html.replace(/--g600:#4B5563/g, '--g600:#A0A0A0');
html = html.replace(/--g500:#6B7280/g, '--g500:#777');
html = html.replace(/--g400:#9CA3AF/g, '--g400:#555');

// Nav and cards dark
html = html.replace(/background:#fff;border-bottom/g, 'background:#0A0A0A;border-bottom');
html = html.replace(/background:#fff}/g, 'background:#151515}');

// ═══ FONTS ═══
html = html.replace(/DM Sans/g, 'Outfit');
html = html.replace(/dm-sans/g, 'outfit');

// ═══ CONTACT INFO ═══
html = html.replace(/Bistua Nuova 103, Zenica 72000/g, 'Zenica, BiH');
html = html.replace(/060 30 17 220/g, '062 223 064');
html = html.replace(/387603017220/g, '38762223064');
html = html.replace(/Pon–Ned: 09–17h/g, 'Pon\u2013Sub: 10\u201318h \u00B7 Ned: Zatvoreno');

// ═══ HERO TEXT ═══
html = html.replace(/Pronađite Vaše Novo Vozilo/g, 'Vozila Koja Govore Za Sebe');
html = html.replace(/Uvoz, transport i prodaja kvalitetnih vozila iz EU\. Sigurna kupovina\./g, 'Uvoz, transport i prodaja provjerenih vozila iz Evropske Unije.');

// ═══ SPLASH — Make it use circle reveal instead of car-door split ═══
// Change splash background
html = html.replace(/\.splash-bg\{position:absolute;inset:0;background:var\(--red\)\}/g, '.splash-bg{position:absolute;inset:0;background:#0A0A0A}');
html = html.replace(/\.splash-left,\.splash-right\{position:absolute;top:0;bottom:0;width:50%;background:var\(--red\)/g, '.splash-left,.splash-right{position:absolute;top:0;bottom:0;width:50%;background:#0A0A0A');
html = html.replace(/.splash-logo\{[^}]+\}/g, '.splash-logo{width:140px;height:140px;opacity:0;transform:scale(0.5) rotateY(90deg);animation:splashLogoIn 1.2s cubic-bezier(0.16,1,0.3,1) 0.3s forwards;margin:0 auto;border-radius:0;overflow:visible;background:transparent;padding:0;filter:drop-shadow(0 0 40px rgba(212,168,83,0.3))}');
html = html.replace(/@keyframes splashLogoIn\{to\{opacity:1;transform:scale\(1\)\}\}/g, '@keyframes splashLogoIn{0%{opacity:0;transform:scale(0.5) rotateY(90deg);filter:blur(20px)}60%{opacity:1;filter:blur(0)}100%{opacity:1;transform:scale(1) rotateY(0)}}');

// ═══ REPLACE VEHICLES ═══
const vehicleRegex = /const VEHICLES=\[[\s\S]*?\];/;
const newVehicles = `const VEHICLES=[
{id:'74287109',make:'Volkswagen',model:'Sharan',title:'VW SHARAN 2.0 103kw FACELIFT',year:2012,km:262329,fuel:'Dizel',kw:103,ks:140,trans:'Manual',color:'Crna',priceNoVAT:15500,priceVAT:15500,status:'na-lageru',featured:true,img:'https://d4n0y8dshd77z.cloudfront.net/listings/74287109/lg/img-1774612588-94e4bbca0e53.jpeg'},
{id:'75338394',make:'Volkswagen',model:'Tiguan',title:'VW TIGUAN 2.0 125kw 4x4',year:2009,km:273090,fuel:'Dizel',kw:125,ks:170,trans:'Manual',color:'Plava',priceNoVAT:15800,priceVAT:15800,status:'na-lageru',featured:false,img:'https://d4n0y8dshd77z.cloudfront.net/listings/75338394/lg/img-1774517470-b62347dde536.jpeg'},
{id:'74287830',make:'Volkswagen',model:'Sharan',title:'VW SHARAN DSG XENON PANORAMA',year:2014,km:230278,fuel:'Dizel',kw:103,ks:140,trans:'Automatik DSG',color:'Crna',priceNoVAT:19500,priceVAT:19500,status:'na-lageru',featured:true,img:'https://d4n0y8dshd77z.cloudfront.net/listings/74287830/lg/img-1774444333-4f0be56fe34e.jpeg'},
{id:'74107299',make:'Volkswagen',model:'Passat CC',title:'VW PASSAT CC 4x4 LED DSG',year:2012,km:254695,fuel:'Dizel',kw:125,ks:170,trans:'Automatik DSG',color:'Crna',priceNoVAT:21000,priceVAT:21000,status:'na-lageru',featured:true,img:'https://d4n0y8dshd77z.cloudfront.net/listings/74107299/lg/img-1775479908-50be0b2dc80e.jpeg'},
{id:'74917746',make:'Volkswagen',model:'Golf GTI',title:'VW GOLF 6 GTI 155kw DSG',year:2009,km:187034,fuel:'Benzin',kw:155,ks:211,trans:'Automatik DSG',color:'Bijela',priceNoVAT:18500,priceVAT:18500,status:'na-lageru',featured:true,img:'https://d4n0y8dshd77z.cloudfront.net/listings/74917746/lg/img-1773069395-f68908c17ad6.jpeg'},
{id:'75314997',make:'Volkswagen',model:'Golf 6',title:'VW GOLF VI 2.0 STYLE',year:2009,km:213923,fuel:'Dizel',kw:81,ks:110,trans:'Manual',color:'Crna',priceNoVAT:11500,priceVAT:11500,status:'na-lageru',featured:false,img:'https://d4n0y8dshd77z.cloudfront.net/listings/75314997/lg/img-1774443184-c317cf46dcaf.jpeg'},
{id:'73640921',make:'Volkswagen',model:'Touran',title:'VW TOURAN 2.0 103kW DSG XENON',year:2011,km:211469,fuel:'Dizel',kw:103,ks:140,trans:'Automatik DSG',color:'Siva',priceNoVAT:14500,priceVAT:14500,status:'na-lageru',featured:false,img:'https://d4n0y8dshd77z.cloudfront.net/listings/73640921/lg/img-1768667576-f70e84933909.jpeg'},
{id:'74864542',make:'Volkswagen',model:'Polo',title:'VW POLO 1.6 TDI 77kw',year:2011,km:249695,fuel:'Dizel',kw:77,ks:105,trans:'Manual',color:'Siva',priceNoVAT:10500,priceVAT:10500,status:'na-lageru',featured:false,img:'https://d4n0y8dshd77z.cloudfront.net/listings/74864542/lg/img-1772885549-46ada39bf29b.jpeg'},
{id:'72291400',make:'Citroen',model:'DS5',title:'CITROEN DS5 BI-XENON EURO6 133kW',year:2015,km:242500,fuel:'Dizel',kw:133,ks:181,trans:'Automatik',color:'Siva',priceNoVAT:20500,priceVAT:20500,status:'na-lageru',featured:true,img:'https://d4n0y8dshd77z.cloudfront.net/listings/72291400/lg/img-1763127372-f38f65b1d9b8.jpeg'},
{id:'72261660',make:'MAN',model:'TGL 8 210',title:'KAMION MAN TGL 8 210',year:2009,km:660000,fuel:'Dizel',kw:0,ks:0,trans:'Manual',color:'Bijela',priceNoVAT:19500,priceVAT:19500,status:'na-lageru',featured:false,img:'https://d4n0y8dshd77z.cloudfront.net/listings/72261660/lg/img-1763043954-384dc3b6ae1b.jpeg'},
{id:'74205191',make:'Volkswagen',model:'Golf 7',title:'VW GOLF VII 2017 EURO6',year:2017,km:231573,fuel:'Dizel',kw:81,ks:110,trans:'Manual',color:'Siva',priceNoVAT:16900,priceVAT:16900,status:'na-lageru',featured:true,img:'https://d4n0y8dshd77z.cloudfront.net/listings/74205191/lg/img-1770641490-02ff8761b4f9.jpeg'}
];`;
html = html.replace(vehicleRegex, newVehicles);

// ═══ META ═══
html = html.replace(/<title>.*?<\/title>/, '<title>N CARS - Premium Polovna Vozila | Zenica</title>');
html = html.replace(/content="N CARS[^"]*"/, 'content="N Cars Zenica - Uvoz, transport i prodaja premium polovnih vozila iz EU."');
html = html.replace(/#DC2626/, '#0A0A0A');

// ═══ FONT LINK ═══
html = html.replace(/family=DM\+Sans/g, 'family=Outfit');

// Data version
html = html.replace(/nCars_dataVersion'\)!=='v\d+'/g, "nCars_dataVersion')!=='v10'");
html = html.replace(/nCars_dataVersion','v\d+'/g, "nCars_dataVersion','v10'");

// ═══ Add grain texture overlay ═══
// skip grain for now

fs.writeFileSync('C:/Users/HP/NCars-Zenica/index.html', html);
console.log('Built NCars site:', html.length, 'chars');
