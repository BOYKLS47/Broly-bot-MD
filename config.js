import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  [24102692931', 'Owner', true],
  ['24102692931']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['24102692931', '573143917092']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '𝙶𝙾𝙳' 
global.author = '𝙺𝙰𝙻𝚈𝚂' 

//--info FG
global.botName = '𝙺𝙰𝙻𝚈𝚂'
global.fgig = 'https://instagram.com/brayanff502' 
global.fgsc = 'https://github.com/El-brayan502/Broly-bot-MD' 
global.fgyt = 'https://youtube.com/Naufrapo'
global.fgpyp = 'https://paypal.me/broly'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.id_canal = '120363312092804854@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VajUPbECxoB0cYovo60W'
global.bgp = 'https://chat.whatsapp.com/LQalZQmmYuqAdvsxyHUjno'
global.bgp2 = 'https://chat.whatsapp.com/LQalZQmmYuqAdvsxyHUjno'
global.bgp3 = 'https://chat.whatsapp.com/BoaRPJlKLnN4Ay3ebSTaDi' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
