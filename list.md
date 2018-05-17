# Which public transport apps use secure communication via HTTPS?

All apps listed below are iOS apps.

## *HAFAS*-based

app | version | HTTPS? | sends device-unique ID? | cert pinning?
----|---------|--------|-------------------------|--------------
INVG | `1.2.1` | ❌ | ❌ | ❌
VVW | `4.0.8` | ❌ | ❌ | ❌
VSN | `4.3.3` | ❌ | ❌ | ❌
mobiliteut.lu | `4.0.24` | ❌ | ❌ | ❌
VMT | `2.0.17-df4f4` | ✅ | ❌ | ❌
VBN | `4.2.10` | ❌ | ❌ | ❌
moobil+ | `4.0.4` | ❌ | ❌ | ❌
CFL mobile | `4.0.0` | ❌ | ❌ | ❌
Fahrinfo Dresden | `3.3` | ✅ | ✅ | ❌
BVG | `6.0.0.52#ec4b3` | ❌ | ❌ | ❌
VBB | `4.1.6` | ❌ | ✅ | ❌
S-Bahn Berlin | `3.0.2` | ❌ | ✅ | ❌
MyHannover | `18.06.1.59` | ❌ | ❌ | ❌
Irish Rail | `3.00.8` | ❌ | ❌ | ❌
mv VRN | `1.4.1` | ✅ | ? | ❌
RATP | `6.8.3` | ❌ | ✅ | ❌
Extra.to | `1.0.0` | ✅ | ❌ | ❌
Arriva bus | `3.2.0` | ❌ | ❌ | ❌
Saarfahrplan | `2.2.5` | ❌ | ? (binary) | ❌
RBS Mobil | `1.0.3` | ❌ | ❌ | ❌
Bilkom | `2.2.2` | ❌ | ? (binary) | ❌
Nah.SH | `3.0.7` | ❌ | ❌ | ❌
MiMuovoInfo | `1.0.6` | ❌ | ❌ | ❌
ÖBB Scotty | `6.2` | ❌ | ❌ | ❌
München Navigator | `4.6.9` | ❌ | ❌ | ❌
NVV (Niederrhein) | `4.0.4` | ❌ | ❌ | ❌
Samtrafiken | `3.0.0` | ❌ | ❌ | ❌
Rejseplanen.dk | `6.0.8 (150)` | ❌ | ❌ | ❌
ZVV | `3.2.16` | ✅ | ? | ✅
DB Navigator | `18.04.04` | ✅ | ? | ✅
INSA | `4.0.2` | ✅ | ? | ✅
Metronom | `2.2.4` | ❌ | ❌ | ❌
VOR | `3.3.1.9` | ❌ | ❌ | ❌

## *fiffi*-based

app | version | HTTPS? | sends device-unique ID? | cert pinning?
----|---------|--------|-------------------------|--------------
Fahrinfo Nürnberg | `3.3` | ✅ | ? | ❌
SWA Augsburg | `1.3` | ✅ | ? | ❌
Stadtwerke Konstanz | `2.1` | ✅ | ? | ❌

## *EVA*-based

app | version | HTTPS? | sends device-unique ID? | cert pinning?
----|---------|--------|-------------------------|--------------
MVV | `4.6.6` | ❌ | ? (EVA) | ❌

## apps using the [iRail API](https://api.irail.be/)

app | version | HTTPS? | sends device-unique ID? | cert pinning?
----|---------|--------|-------------------------|--------------
[BeTrains](https://play.google.com/store/apps/details?id=tof.cv.mpp) | ? | ✅ | ? | ?
[Railer](http://www.railer.be/) | ? | ✅ | ? | ?
[HyperRail](https://play.google.com/store/apps/details?id=be.hyperrail.android) | ? | ✅ | ? | ?
[NextTrain](http://nexttrain.tjeerdytsma.nl/) | ? | ✅ | ? | ?
[BeRail Sailfish OS](https://github.com/iRail/harbour-berail) | ? | ✅ | ? | ?
[FlatTurtle](http://www.getflatturtle.com/) | ? | ✅ | ? | ?

## unknown because they use HTTPS & [certificate pinning](https://en.wikipedia.org/wiki/Transport_Layer_Security#Certificate_pinning) 🔒

These need further investigation.

app | version | HTTPS? | sends device-unique ID? | cert pinning?
----|---------|--------|-------------------------|--------------
SBB | `7.5.0` | ✅ | ? | ✅
RMV | `2.1.1 298 (iOS)` | ✅ | ? | ✅
HVV | `4.1.0.130#22872` | ✅ | ? | ✅
KVB | `2.4.0` | ✅ | ? | ✅
SEPTA | ? | ✅ | ? | ✅
TPG | ? | ✅ | ? | ✅
