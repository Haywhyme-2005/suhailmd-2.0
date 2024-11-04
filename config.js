const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_58_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDMzLFxuICAgICAgICA1NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDM5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE0LFxuICAgICAgICAxNyxcbiAgICAgICAgODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAwLFxuICAgICAgICAyMixcbiAgICAgICAgMjUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY0LFxuICAgICAgICAzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg0LFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg0LFxuICAgICAgICA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg0LFxuICAgICAgICA1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0TnZ5d2RXU01ITXYrTlo4MUswVHBXK2JKN2RmWFBmMjdoOGFETG9qdlV3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQNVFQQnJXU1J6V1NqSWk1VzJ0Z05RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZlZWM4ZjcyLTM4ZWUtNGM2ZS1hMzU0LTNlNzNmMjBhZTc4YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICAxMzIsXG4gICAgICA0OSxcbiAgICAgIDEzNyxcbiAgICAgIDE4OSxcbiAgICAgIDEzMCxcbiAgICAgIDI0OSxcbiAgICAgIDExOCxcbiAgICAgIDExLFxuICAgICAgMTUzLFxuICAgICAgNSxcbiAgICAgIDEzNixcbiAgICAgIDkwLFxuICAgICAgMTAyLFxuICAgICAgMjEzLFxuICAgICAgMTM0LFxuICAgICAgMjAwLFxuICAgICAgMjIyLFxuICAgICAgNTUsXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICAzMCxcbiAgICAgIDExMCxcbiAgICAgIDIzMCxcbiAgICAgIDIxNyxcbiAgICAgIDIyNixcbiAgICAgIDIxMixcbiAgICAgIDE3NyxcbiAgICAgIDIzMyxcbiAgICAgIDEzMCxcbiAgICAgIDI1MCxcbiAgICAgIDMwLFxuICAgICAgMTM2LFxuICAgICAgMTMyLFxuICAgICAgMTAxLFxuICAgICAgMTE1LFxuICAgICAgNzksXG4gICAgICAyNDYsXG4gICAgICAxNjQsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRQTZLUVFZMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyNDQ1NzUyNzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNDMxODQ2NjQ2MDAyOjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlhENnVFREVJdjlvYmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCMVBKRlQ0UjBkZjNvMHdkU1I4bDhuYUYzZFFiWkJWL3ZOdEF1ZzV5V1FrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFoWk42UXgrQWF0YkR3aWdvZGZRbEZhSjArRGFaUEtFdjZ4YURPKzh6OTM5d1RFRFdHcXNCQUNPTWJjSWRmZUNrcHplaWlJYklXeVlXUVlEcEFqa0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFWcDV6ekpRMlhXVWFPenEycVZMQlVUTHczbC9Uc2VIeVRqUWNBbnNVOUIrd0tLWlN4UlI2eDJvQW84V01SYnRWWTByR1ZDa1BwemxHN01nUm1pL2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjQ0NTc1Mjc6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDcwNzA4OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdNRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR01GLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN1k3VGxuK204ODBTV2swRDRTZnh4RWV0dUtYN2YvdWltWERBOVRkajNpWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDEwNDc1NDEyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwNzA3MDM5NTQzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
