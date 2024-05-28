const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347087808527";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_54_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkwLFxuICAgICAgICA2MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDgzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOSxcbiAgICAgICAgNDksXG4gICAgICAgIDk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDc3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxLFxuICAgICAgICA2MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgODAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY1LFxuICAgICAgICA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAyOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDExNixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFJMlp0M3pTbTlKVkhlV2JPcUZaN08xeVJpSk5kTHZzZ0MzeEtqenJjQ0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9seXgtVG5iUTNpcmMtQ2FJMXdqS2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjQ0NjRjMmQtMGI2My00Yjk5LTk3NTUtMGZlMmYzNDlhYjE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOSxcbiAgICAgIDI1MSxcbiAgICAgIDEwMSxcbiAgICAgIDIxLFxuICAgICAgOTYsXG4gICAgICAxODAsXG4gICAgICA0NyxcbiAgICAgIDIxNSxcbiAgICAgIDE4MixcbiAgICAgIDMyLFxuICAgICAgMjgsXG4gICAgICAxMDYsXG4gICAgICA4LFxuICAgICAgMjcsXG4gICAgICA1NixcbiAgICAgIDExLFxuICAgICAgMTQzLFxuICAgICAgNTgsXG4gICAgICAyNDQsXG4gICAgICAxMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzYsXG4gICAgICA1MSxcbiAgICAgIDU0LFxuICAgICAgNzQsXG4gICAgICAyNTUsXG4gICAgICAyNDMsXG4gICAgICAyMjksXG4gICAgICAyMTMsXG4gICAgICA0OCxcbiAgICAgIDcyLFxuICAgICAgMTk5LFxuICAgICAgMTcsXG4gICAgICA1LFxuICAgICAgNTEsXG4gICAgICA0OSxcbiAgICAgIDE5OSxcbiAgICAgIDE1OSxcbiAgICAgIDIxMCxcbiAgICAgIDEyOCxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFTWUg1WDVIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDg3ODA4NTI3OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjYwMDE0NzIzNzY4NDk6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3JEcDVNQkVQUFEyTElHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqL25GMldvU1BOdmVDVTJ2bjN6Z2NCMFZaU2lSKzNycW02MkswdmhyR0dvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjc0U0tyNW1zNldkZjdjV1FYaWplcFRsUm5ORFdXeDB6Wk1kamczMDE5Y0wxTk9qSU1LUzNyWXl1NXRpUDhheXRBWjRJQTYwY01taE5DMXh1Y3JkSkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJCMXoxMUJzOFRDb2UwQkJ1YkE3V3NTdjQ0WU9RdVFYaE80SWpxb2Y3TGxRenRodFJnaDJZOFdZa2FVZ25yc2Z2c21ld25uUVFFbTRNZTQramNkaUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODc4MDg1Mjc6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY5MjI0OTFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
