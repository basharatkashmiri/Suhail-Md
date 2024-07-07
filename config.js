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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923709129940;




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923709129940,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_55_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0LFxuICAgICAgICA1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDY2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY4LFxuICAgICAgICA1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDk4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDkyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc0LFxuICAgICAgICA4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDY4LFxuICAgICAgICAzNixcbiAgICAgICAgMTgyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDkxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzLFxuICAgICAgICA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyLFxuICAgICAgICA1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDYyLFxuICAgICAgICA5NCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjczZ3Q1bThTREk0aUFFS3YrcGtjVzBIWnZkcmJzbFpSMkU3V29DcWkvcDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNzA5MTI5OTQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCMTUyOTQxMTRCNTVEOTFGN0JDOUIyMEZCNDk5ODU3QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzNTMzNDZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM3MDkxMjk5NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRDQzk2MEQ4MzEyMENEMjFGNTY4NzBFRjFGOEVCRjQ0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM1MzM0N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3YWpQRV8tY1E1QzBqM09reEpXQ2d3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdmZjE4ZDhhLTI5YWEtNDM2Yy05MDljLTM4YTM3ZmQ3MjkxN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDU1LFxuICAgICAgMjAsXG4gICAgICAyMDAsXG4gICAgICAzMCxcbiAgICAgIDE0NCxcbiAgICAgIDUsXG4gICAgICAxNzEsXG4gICAgICAxMTYsXG4gICAgICAxNjAsXG4gICAgICAxMzQsXG4gICAgICA4LFxuICAgICAgMTE5LFxuICAgICAgMTU3LFxuICAgICAgMTcwLFxuICAgICAgMTg2LFxuICAgICAgMTgsXG4gICAgICAxNzcsXG4gICAgICAxNzcsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMyxcbiAgICAgIDEwMCxcbiAgICAgIDM2LFxuICAgICAgMjEzLFxuICAgICAgOTEsXG4gICAgICAxMzEsXG4gICAgICAyMzAsXG4gICAgICA1OCxcbiAgICAgIDQ4LFxuICAgICAgNTQsXG4gICAgICA1NyxcbiAgICAgIDE5MSxcbiAgICAgIDE3MyxcbiAgICAgIDcsXG4gICAgICA3OSxcbiAgICAgIDkzLFxuICAgICAgNTcsXG4gICAgICA5MixcbiAgICAgIDg4LFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRDQjhHODdYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM3MDkxMjk5NDA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuS6l/CdkIHwnZCa8J2QrPCdkKHwnZCa8J2Qq/CdkJrwnZCtIPCdkIrwnZCa8J2QrPCdkKHwnZCm8J2QovCdkKvwnZCi5LqXXFxuXFxu4oCiXFxuXFxuXFxu4oCiXFxuXFxuXFxu4oCiXFxuXFxuXFxu4oCiXFxuXFxuXFxu4oCiXFxuXFxuXFxu4oCiXFxuXFxuXFxuXFxu4oCiXFxuXFxuXFxuXFxu4oCiXFxuXFxuXFxuXFxu4oCiXFxuXFxuXFxuXFxu4oCiXFxuXFxuXFxuXFxu4oCiXFxuXFxuXFxuXFxu4oCiXCIsXG4gICAgXCJsaWRcIjogXCIzODYxNjExODM5Njk0OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzYraElJQkVMbUVxclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLbk5EU3UrZ1dCMlpqQjZ1dFdlc1hVR0U3Mm15ajVFdXFUa0hud0Z4dnlRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdsUUNEVnBuK3hneS9oeTZBTW42dEU4UGxvTmNoMitxN1V4UWhabDJLOU5yNFZIUmZZd3JpTllHSmppRjF6cEViT0V5YXpqY2doV2dzU0pSa1lQbkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInBhbUxDVE44b0FCYUx1TS9YVy9DV25OLzczSGl4R0NjR3ZseEdsVGVTT09SYjgxZmMydWR2TEU2SkliR3BleDdHamJzQmwyeG1iVFg4SUxQMCswRUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzcwOTEyOTk0MDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzUzMzQxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSHJmXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIcmYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPdEZsUzhkYnQyQ0diU0NOK2N1SVBDSWVxdE1CancvWDBvU1lDVDJvb0N3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3MjcwMzI3OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMzUzMzQ4MzM0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Basharat Kashmiri ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Basharat-Kashmiri",
  ownername:process.env.OWNER_NAME|| "Basharat",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "public";
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
