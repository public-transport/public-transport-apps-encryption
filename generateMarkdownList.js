'use strict'

const list = require('./list.json')

const writeLine = l => process.stdout.write(l+"\n")
const emoji = v => {
    if (v === true) return '✅'
    if (v === false) return '❌'
    return '❔'
}

const writeRow = app => {
    const agency = `[${app.agency.code}](${app.agency.website})`
    const os = app.os
    let version
    if (os === 'android')
        version = `[${app.version}](https://play.google.com/store/apps/details?id=${app.appId})`
    else if (os === 'ios')
        version = `[${app.version}](https://itunes.apple.com/app/${app.appId})`
    else
        version = `[${app.version}](${app.appId})`
    const official = emoji(app.official)
    const https = emoji(app.usesHttps)
    const devideId = emoji(app.sendsDeviceId)
    const certPinning = emoji(app.certificatePinning)

    writeLine(`${agency}|${os}|${version}|${official}|${https}|${devideId}|${certPinning}`)
}

const main = () => {
    writeLine("# Which public transport apps use secure communication via HTTPS?")
    writeLine("")
    writeLine("**A machine-readable version of this list can be found [here](list.json).**")
    writeLine("")

    // HAFAS
    writeLine("## *HAFAS*-based")
    writeLine("")
    writeLine("agency | os | version | official? | HTTPS? | sends device-unique ID? | cert pinning?")
    writeLine("-------|----|---------|-----------|--------|-------------------------|--------------")
    const hafasApps = list.filter(e => e.system === 'hafas')
    for (let hafasApp of hafasApps) writeRow(hafasApp)
    writeLine("")

    // EFA
    writeLine("## *EFA*-based")
    writeLine("")
    writeLine("agency | os | version | official? | HTTPS? | sends device-unique ID? | cert pinning?")
    writeLine("-------|----|---------|-----------|--------|-------------------------|--------------")
    const efaApps = list.filter(e => e.system === 'efa')
    for (let efaApp of efaApps) writeRow(efaApp)
    writeLine("")

    // fiffi
    writeLine("## *fiffi*-based")
    writeLine("")
    writeLine("agency | os | version | official? | HTTPS? | sends device-unique ID? | cert pinning?")
    writeLine("-------|----|---------|-----------|--------|-------------------------|--------------")
    const fiffiApps = list.filter(e => e.system === 'fiffi')
    for (let fiffiApp of fiffiApps) writeRow(fiffiApp)
    writeLine("")

    // fiffi
    writeLine("## apps using the [iRail API](https://api.irail.be/)")
    writeLine("")
    writeLine("agency | os | version | official? | HTTPS? | sends device-unique ID? | cert pinning?")
    writeLine("-------|----|---------|-----------|--------|-------------------------|--------------")
    const iRailApps = list.filter(e => e.agency.id === 'be-irail')
    for (let iRailApp of iRailApps) writeRow(iRailApp)
    writeLine("")

    // other apps
    writeLine("## Other apps")
    writeLine("")
    writeLine("agency | os | version | official? | HTTPS? | sends device-unique ID? | cert pinning?")
    writeLine("-------|----|---------|-----------|--------|-------------------------|--------------")
    const otherApps = list.filter(e => {
        const _e = JSON.stringify(e)
        return (
            !hafasApps.map(n => JSON.stringify(n)).includes(_e)
        &&  !efaApps.map(n => JSON.stringify(n)).includes(_e)
        &&  !fiffiApps.map(n => JSON.stringify(n)).includes(_e)
        &&  !iRailApps.map(n => JSON.stringify(n)).includes(_e)
        )
    })
    for (let otherApp of otherApps) writeRow(otherApp)
}

main()
